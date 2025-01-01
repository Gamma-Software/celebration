import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log(process.env.LOOPS_API_KEY);

  if (request.method !== "POST") {
    return NextResponse.json(
      {},
      {
        status: 400,
        statusText: "Bad Request",
      }
    );
  }

  const body = await request.json();
  const { email, source } = body;

  try {
    const [loopsResponse] = await Promise.all([
      fetch("https://app.loops.so/api/v1/contacts/create", {
        method: "POST",
        body: JSON.stringify({
          email,
          source,
          receiveProductUpdates: true,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
        },
      }),
    ]);

    if (loopsResponse.status === 200 || loopsResponse.status === 409) {
      return NextResponse.json({ status: "OK" });
    } else {
      console.error("Loops", JSON.stringify(loopsResponse));
      return NextResponse.json(
        {},
        {
          status: 500,
          statusText: "Internal Server Error",
        }
      );
    }
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      {},
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
}
