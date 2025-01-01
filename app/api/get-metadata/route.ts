import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const metaTags: Record<string, string> = Array.from(
      document.querySelectorAll("meta")
    ).reduce((tags, meta) => {
      const name =
        meta.getAttribute("name") ||
        meta.getAttribute("property") ||
        meta.getAttribute("itemprop");
      const content = meta.getAttribute("content");
      if (name && content) {
        tags[name] = content;
      }
      return tags;
    }, {} as Record<string, string>);

    return NextResponse.json({
      title:
        document.title || metaTags["og:title"] || metaTags["twitter:title"],
      description:
        metaTags.description ||
        metaTags["og:description"] ||
        metaTags["twitter:description"],
      image:
        metaTags.image || metaTags["og:image"] || metaTags["twitter:image"],
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch metadata" },
      { status: 500 }
    );
  }
}
