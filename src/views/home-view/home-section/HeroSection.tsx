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
    <div className="grid grid-cols-1 pb-0">
      {data?.map((datamap) => (
        // @ts-ignore

        //imagesection
        <div key={datamap.sys.id} className="relative">
          <Image
            className="object-cover
            lg:object-cover lg:-mt-16"
            alt="Image"
            // @ts-ignore
            src={`https:${datamap.fields.articleImage.fields.file.url}`}
            width={1920}
            height={1080}
            priority
          />

          {/* div for text */}

          <div
            className=" TEXT
          inset-0 flex flex-col justify-center text-white px-10 py-10 -mt-14
          md:absolute sm:absolute lg:absolute
          md: bg-black md:bg-opacity-50 lg:bg-black lg:bg-opacity-50 sm:bg-black sm:bg-opacity-50
          lg:pl-28 lg:p-[155px] md:pt-16 sm:pt-16
            "
          >
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
