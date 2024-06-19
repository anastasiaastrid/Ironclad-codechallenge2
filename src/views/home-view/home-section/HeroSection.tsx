"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import Link from "next/link";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import Head from "next/head";

function HeroSection() {
  const [data, setData] = useState<TypeBlogFields[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.getEntries<TypeBlogFields>();
        // @ts-ignore
        setData(res?.items || []);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 pb-0 max-w-full max-h-full mx-auto my-auto">
      <Head>
        <title>Ironclad Watch</title>
        <link rel="preload" href="/fonts/ZenDots-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/BakbakOne-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </Head>
      {data.length > 0 &&
        data.map((datamap) => (
          // @ts-ignore
          <div key={datamap.sys.id} className="bg-black relative">
            <Image
              className="h-[380px] w-fit object-cover lg:object-cover lg:h-full lg:w-full md:object-cover md:h-full md:w-full sm:object-cover sm:h-full sm:w-full"
              alt="Image"
              // @ts-ignore
              src={`https:${datamap.fields.articleImage.fields.file.url}`}
              width={1920}
              height={1080}
              priority={true}
            />

            <div className=" absolute inset-0 flex flex-col justify-center px-10 py-10  lg:p-28 sm:p-full sm:w-full bg-black bg-opacity-50 text-white">
              <p className=" text-2xl lg:text-7xl font-ZenDots sm:p-full sm:w-full">{datamap.fields.title}</p>
              <p className=" pt-4 lg:pt-6 text-base lg:text-2xl sm:p-full sm:w-full tracking-wide font-BakbakOne">
                {datamap.fields.summary}
              </p>
              <div className="font-Anek_Devanagari text-sm pr-10 pt-4 lg:pt-6 lg:text-lg sm:p-full sm:w-full">
                <RichText document={datamap.fields.details} />
              </div>
              <div className="w-1/2 pt-4 lg:pt-6">
                <Link href="/product/">
                  <button className="text-sm lg:text-lg px-4 py-2 font-bold text-black rounded-full bg-white">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default HeroSection;
