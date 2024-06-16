"use client";
import { useEffect, useState } from "react";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import Link from "next/link";

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
    <div className="pb-0">
      {data?.map((datamap) => (
        // @ts-ignore
        <div key={datamap.sys.id} className="relative">
          <Image
            className="object-cover w-full h-screen md:h-auto"
            alt="Image"
            //  @ts-ignore
            src={`https:${datamap.fields.articleImage.fields.file.url}`}
            width={1920}
            height={1080}
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white bg-black bg-opacity-50 p-4 lg:pl-40 lg:pt-20 md:pt-16 sm:pt-12 xs:pt-10">
            <p className="text-4xl lg:text-7xl font-ZenDots">{datamap.fields.title}</p>
            <p className="pt-4 lg:pt-6 text-lg lg:text-2xl tracking-wide font-BakbakOne">{datamap.fields.summary}</p>
            <div className="font-Anek_Devanagari pt-4 lg:pt-6 text-lg">
              <RichText document={datamap.fields.details} />
            </div>
            <div className="pt-4 lg:pt-6">
              <Link href="/product/">
                <button className="px-4 py-2 font-bold text-black rounded-full bg-white hover:bg-gray-200 transition duration-300">
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
