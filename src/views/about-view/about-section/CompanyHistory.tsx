"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";

function CompanyHistory() {
  const [data, setData] = useState<TypeBlogFields[]>([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntries<TypeBlogFields>();
        // @ts-ignore
        setData(response?.items || []);
        setShowContent(true);
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
      {showContent && (
        <div className="max-w-full mx-auto my-auto py-5 px-4 sm:px-6 lg:px-8">
          {data?.map((datamap) => (
            // @ts-ignore
            <div key={datamap.sys.id} className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5 px-4 sm:px-0">
              <div className="col-span-1 flex justify-center">
                <div className="relative w-full h-96 md:h-auto">
                  <Image
                    className="rounded-md"
                    // @ts-ignore
                    src={`https:${datamap.fields.companyHistoryImage.fields.file.url}`}
                    alt="Company History Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="col-span-2 text-center md:text-left">
                <p className="text-3xl lg:text-5xl text-black font-ZenDots">{datamap.fields.title}</p>
                <p className="text-xl lg:text-2xl pb-4 text-black font-BakbakOne tracking-widest">
                  {datamap.fields.companyHistoryTitle}
                </p>
                <div className="text-lg lg:text-base text-gray-900 leading-7 text-justify">
                  <RichText document={datamap.fields.companyHistoryText} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CompanyHistory;
