import Link from "next/link";

const extractMetaTags = async (url: string) => {
  try {
    // Call your API endpoint that handles metadata extraction
    const response = await fetch(`/api/get-metadata?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return undefined;
  }
};

async function LinkPreview({ url }: { url: string }) {
   //here calling the function
  const data = await extractMetaTags(url);

  console.log(data);

  if (!data) {
    return <p>Failed to fetch link preview.</p>;
  }
  return (
    <Link
      href={"http://www.google.com"}
      target="_blank"
      className="text-black  w-[50%] h-[200px] cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]"
      style={{
        textDecoration: "none",
      }}
    >
      <div className="object-cover h-full">
        <img
          src={data.image}
          alt="Link Preview"
          className="object-cover h-full w-[340px] m-0"
        />
      </div>
      <div className="p-4 w-[60%]">
        <h3 className="text-3xl font-bold leading-[2rem] mb-2 ">
          {data.title}
        </h3>
        <p className="text-base  line-clamp-3 mb-2 ">{data.description}</p>
        <span className="mt-3 opacity-50 text-xs">&nbsp;{url}</span>
      </div>
    </Link>
  );
}

export default LinkPreview;
