"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="max-w-md space-y-8">
        <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
        <p className="text-3xl font-medium text-gray-700">
          Oops! Page not found.
        </p>
        <p className="text-base text-gray-500">
          It seems like we couldn&apos;t find what you were looking for. Please
          check the address or search again.
        </p>

        <Button onClick={() => router.back()}>Go Back</Button>
      </div>
    </div>
  );
};

export default NotFound;
