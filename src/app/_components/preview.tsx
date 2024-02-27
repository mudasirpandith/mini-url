"use client";
import React, { useEffect, useState } from "react";
import cheerio from "cheerio";
interface Meta {
  title: string;
  description: string;
  imageUrl: string;
}
interface Props {
  url: string;
}
export default function Preview({ url }: Props) {
  const [metaData, setMetaData] = useState<Meta | null>(null);
  useEffect(() => {
    async function getMetadata(url: string) {
      try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        const title = $("title").text();
        const description = $('meta[name="description"]').attr("content");
        const imageUrl = $('meta[property="og:image"]').attr("content");

        return { title, description, imageUrl };
      } catch (error) {
        console.error("Error fetching metadata:", error);
        return null;
      }
    }
    const targetUrl = url;
    getMetadata(targetUrl).then((metadata) => {
      const body = {
        title: metadata?.title ?? "No Title",
        description: metadata?.description ?? "No Description",
        imageUrl: metadata?.imageUrl ?? "No Url",
      };
      return setMetaData(body);
    });
  }, [url]);

  return (
    <div className="border container max-w-sm p-2 w-fit divide-y-0">
      {" "}
      <img src={metaData?.imageUrl} alt="f" />
      <div className="flex flex-col gap-2 p-2 ">
        <h1 className="text-sky-700 font-semibold">
          {metaData?.title ?? "mnot"}
        </h1>
        <p className="text-slate-400">{url}</p>
        <p>{metaData?.description}</p>
      </div>
    </div>
  );
}
