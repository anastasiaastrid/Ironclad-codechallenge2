"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";

function CompanyOverview() {
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
        <title>Ironclad Watch Company Overview</title>
      </Head>
      {showContent && (
        <div className="max-w-full max-h-full mx-auto my-auto py-5 px-4 sm:px-6">
          {data?.map((datamap) => (
            // @ts-ignore
            <div
              // @ts-ignore
              key={datamap.sys.id}
              className="
        grid grid-cols-1 gap-4 py-5 px-7 items-center
        md:grid-cols-1 
        lg:grid-cols-3
      "
            >
              <div className="flex justify-center col-span-1">
                <Image
                  className="rounded-md"
                  alt="Company Overview Image"
                  // @ts-ignore
                  src={`https:${datamap.fields.companyOverviewImage.fields.file.url}`}
                  width={374}
                  height={441}
                />
              </div>
              <div className="col-span-2 text-center md:text-left lg:ml-8 mt-5 lg:mt-0">
                <p className="text-3xl lg:text-5xl text-black font-ZenDots">{datamap.fields.title}</p>
                <p className="text-xl lg:text-2xl pb-4 text-black font-BakbakOne tracking-widest">
                  {datamap.fields.tagLine}
                </p>
                <div className="text-lg lg:text-base text-gray-900 leading-7 text-justify">
                  <RichText document={datamap.fields.aboutText} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CompanyOverview;
