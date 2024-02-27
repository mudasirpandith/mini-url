import { Url } from "@prisma/client";
import { db } from "./db";

export const getShortUrl = async (
  shortId: string
): Promise<Url | undefined> => {
  try {
    const url = await db.url.findUnique({
      where: {
        shortId,
      },
    });
    if (url) return url as Url;
    return undefined;

  } catch (error) {
    console.log({ "Eror in retriving : ": error });
  }
};
