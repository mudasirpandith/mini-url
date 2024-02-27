"use server";
import { db } from "@/lib/db";
import { Url } from "@prisma/client";
import { nanoid } from "nanoid";
export const shortenUrl = async (longUrl: string): Promise<Url | undefined> => {
  try {
    const shortId = nanoid(7);
    const res = await db.url.create({
      data: {
        longUrl,
        shortId,
      },
    });
    return res as Url;
  } catch (error) {
    console.log({ "Error in shortening the url : ": error });
  }
};
