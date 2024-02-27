import { db } from "@/lib/db";
import { notFound, redirect } from "next/navigation";
import React from "react";

interface PageProps {
  params: {
    shortId: string;
  };
}

export default async function Page({ params: { shortId } }: PageProps) {
  const url = await db.url.findUnique({
    where: {
      shortId,
    },
  });

  if (url) {
    redirect(url.longUrl);
  }
  if (!url) notFound();
  return <h1>redirecting...</h1>;
}
