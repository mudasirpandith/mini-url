"use client";
import React, { useState, useTransition } from "react";
import { toast } from "sonner";
import { Copy, CopyCheck, Loader2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { shortenUrl } from "@/actions/shortenurl";
import Preview from "./preview";
import { Url } from "@prisma/client";

export default function Form() {
  const [longUrl, setLongUrl] = useState<string>("");
  const [data, setData] = useState<Url | undefined>(undefined);
  const [shortening, startShortening] = useTransition();
  const [copies, setCopied] = useState<boolean>(false);

  const handleCopyToClipboard = async () => {
    if (data) {
      try {
        await navigator.clipboard.writeText(
          `https://miniurl.vercel.app/${data.shortId}`
        );
        toast("Copied to clipboard");
        setCopied(true);
      } catch (error) {
        console.error("Error copying to clipboard:", error);
        toast("Failed to copy to clipboard");
      }
    }
  };

  const handleSubmit = () => {
    startShortening(() => {
      shortenUrl(longUrl)
        .then((data) => {
          setData(data);
        })
        .catch(() => {
          toast("Something went wrong");
          console.log("error");
        });
    });
  };

  return (
    <div className="flex flex-1 gap-4 flex-col mb-3">
      <div className="flex  container flex-row gap-4">
        <Input
          type="url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter the url here"
        />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <Button disabled={shortening} onClick={handleSubmit}>
                {shortening && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}{" "}
                Shorten
              </Button>
            </TooltipTrigger>
            <TooltipContent>Click to shorten url</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>{" "}
      {data?.shortId && (
        <div className="flex container flex-col gap-3">
          <div className="flex flex-row vertically-centered  border-collapse  p-2 justify-between align-middle rounded-sm">
            <code className="text-ellipsis">{`https://miniurl.vercel.app/${data?.shortId}`}</code>
            <Button
              size={"sm"}
              variant={"secondary"}
              onClick={handleCopyToClipboard}
            >
              {copies ? <CopyCheck color="green" /> : <Copy />}
            </Button>
          </div>
        </div>
      )}
      {data?.shortId && (
        <div className="flex container flex-col gap-3">
          <h1 className="font-bold text-slate-400">Facebook</h1>

          <Preview url={data?.longUrl as string} />
        </div>
      )}
    </div>
  );
}
