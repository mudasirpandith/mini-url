import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Form from "./(auth)/micro-link/_components/form";

export default function Page() {
  return (
    <div className="flex flex-1 md:flex-row flex-col leading-loose">
      <div className="flex flex-col  gap-4 p-5 flex-4  justify-center w-full  ">
        <p className="p-2 bg-slate-100 font-semibold w-fit text-sky-700 rounded-xl">
          Le&apos;s make simple with one click.
        </p>
        <h1 className="text-2xl md:text-4xl leading ">
          BIO LINK AND LINK SHORTENER FOR BUISNESS NEEDS
        </h1>
        <p className="text-slate-400 ">
          On a single plateform, you&apos;ll find all tools you need to connect
          audiences worldwide manage links and QR codes.
        </p>
      </div>
      <div className="flex p-10  flex-col flex-4 w-full justify-center  items-center ">
        <h1 className="text-4xl text-left text-black font-bold  p-5">
          Micro Url
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8 px-5">
          Shorten your URLs very efficiently and securely with Micro Url.
        </p>
        <div className="flex gap-4 mx-auto">
          <Form />
        </div>
        {/* <div className="container border h-fit p-4 gap-10  rounded-xl ">
          <div className="flex flex-1  justify-between">
            <h1 className="font-bold">QR CODE</h1>
            <Button>Download PNG</Button>
          </div>
          <div className="flex flex-1 flex-row gap-10">
            <img
              className="w-[100px] h-[100px]"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM67noIvrgVMgIdV3q7XfgagA1ZeUVJmWxUPkoTcW0x9gTZNB_UFL3motnRBRfeIxxrQY&usqp=CAU"
              }
              alt="qrcode"
            />
            <div className=" font-semibold flex flex-col w-full justify-center ">
              <p>https://micro-u.vercel.app/</p>
              <p>22 December 2022</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
