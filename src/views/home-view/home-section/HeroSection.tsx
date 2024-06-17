"use client";
import { useEffect, useState } from "react";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import Link from "next/link";
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
    <div className="grid grid-cols-1 pb-0">
      <Head>
        <link
          rel="preload"
          href="/fonts/Anek-Devanagari-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/fonts/BakbakOne-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/ZenDots-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      {data.length > 0 &&
        data.map((datamap) => (
          // @ts-ignore
          <div key={datamap.sys.id} className="relative">
            {/* Image Section */}
            <Image
              className="h-96 w-full object-cover lg:object-cover lg:h-full lg:w-full md:object-cover md:h-full md:w-full sm:object-cover sm:h-full sm:w-full"
              alt="Image"
              // @ts-ignore
              src={`https:${datamap.fields.articleImage.fields.file.url}`}
              width={1920}
              height={1080}
              priority={true}
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-10 py-10 lg:pl-28 lg:pr-155px bg-black bg-opacity-50 text-white">
              <p className="text-4xl lg:text-7xl font-ZenDots">{datamap.fields.title}</p>
              <p className="pt-4 lg:pt-6 text-lg lg:text-2xl tracking-wide font-BakbakOne">{datamap.fields.summary}</p>
              <div className="font-Anek_Devanagari pt-4 lg:pt-6 text-lg lg:text-lg">
                <RichText document={datamap.fields.details} />
              </div>
              <div className="pt-4 lg:pt-6">
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
