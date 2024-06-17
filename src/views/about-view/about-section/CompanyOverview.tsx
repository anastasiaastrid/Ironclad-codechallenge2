"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";

function CompanyOverview() {
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
    <div className="bg-white min-h-screen">
      <Head>
        <title>Ironclad Watch Company Overview</title>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap" as="style" />
        {/* @ts-ignore */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap" media="print" onLoad="this.media='all'" />
        {/* @ts-ignore */}
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap" media="print" onLoad="this.media='all'" />
        {/* @ts-ignore */}
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap" media="print" onLoad="this.media='all'" />
      </Head>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {data?.map((datamap) => (
        //@ts-ignore

          <div key={datamap.sys.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-end">
              <Image
                className="rounded-md"
                alt="Company Overview Image"
                // @ts-ignore
                src={`https:${datamap.fields.companyOverviewImage.fields.file.url}`}
                width={500}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl lg:text-5xl text-black font-ZenDots">{datamap.fields.title}</p>
              <p className="text-xl lg:text-2xl pb-4 text-black font-BakbakOne tracking-widest">{datamap.fields.tagLine}</p>
              <div className="text-lg lg:text-base text-gray-900 leading-7 text-justify">
                <RichText document={datamap.fields.aboutText} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyOverview;
