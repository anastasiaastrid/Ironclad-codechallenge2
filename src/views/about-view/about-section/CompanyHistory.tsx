"use client";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/app/types/contentful/TypeBlog";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import { useState, useEffect } from "react";

function CompanyHistory() {
  const [data, setData] = useState<TypeBlogFields[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntries<TypeBlogFields>();
        // @ts-ignore
        setData(response?.items || []);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-white">
      {data?.map((datamap) => (
        // @ts-ignore
        <div key={datamap.sys.id} className="my-1 md:flex md:items-center justify-center lg:flex lg:item-center">
          <div className="md:w-1/2 sm:p-14 md:px-28 md: pb-2">
            <Image
              className="object-cover rounded-md loading-lazy sm:w-full md:w-full md:h-1/2 lg:w-full xl:w-full"
              alt="Image"
              // @ts-ignore
              src={`https:${datamap.fields.companyHistoryImage.fields.file.url}`}
              width={500}
              height={500}
            />
          </div>
          <div className="sm:px-14 sm:py-0  md:w-1/2 mt-4 md:mt-0 md:pr-40 text-center md:text-left font-Anek_Devanagari">
            <div className="text-sm text-gray-900 leading-7 font-semibold text-justify">
              {/* @ts-ignore */}
              <p className="text-4xl text-black font-ZenDots">{datamap.fields.title}</p>
              <p className="text-xl pb-4 text-black font-BakbakOne tracking-widest">{datamap.fields.tagLine}</p>
              <p className="text-4xl pb-4 text-black font-BakbakOne">{datamap.fields.companyHistoryTitle}</p>
              <RichText document={datamap.fields.companyHistoryText} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompanyHistory;
