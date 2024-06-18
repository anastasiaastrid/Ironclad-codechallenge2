"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";

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
    <div className="bg-white min-h-full w-full">
      <Head>
        <title>Ironclad Watch Company History</title>
      </Head>
      <div className="max-w-full max-h-full my-auto mx-auto py-5 px-4 sm:px-6 lg:px-20">
        {data?.map((datamap) => (
          // @ts-ignore
          <div
          // @ts-ignore
            key={datamap.sys.id}
            className="
          grid grid-cols-1 py-5 px-7 items-center
          md:grid-cols-1 
          lg:grid-cols-2

          "
          >
            <div className="flex justify-center">
              <Image
                className="rounded-md"
                alt="Company History Image"
                // @ts-ignore
                src={`https:${datamap.fields.companyHistoryImage.fields.file.url}`}
                width={374}
                height={441}
                sizes="100vw"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl lg:text-5xl text-black font-ZenDots">{datamap.fields.title}</p>
              <p className="text-xl lg:text-2xl pb-4 text-black font-BakbakOne tracking-widest">
                {datamap.fields.companyHistoryTitle}
              </p>
              <div className="lg:pr-40 text-lg lg:text-base text-gray-900 leading-7 text-justify">
                <RichText document={datamap.fields.companyHistoryText} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyHistory;
