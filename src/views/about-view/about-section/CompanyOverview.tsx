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
    <div className="bg-white">
      <Head>
        <title>Ironclad Watch Company Overview</title>
      </Head>
      {data?.map((datamap) => (
        //@ts-ignore
        <div
          //@ts-ignore
          key={datamap.sys.id}
          className="my-5 px-16 justify-center
          md:flex md:items-center
          lg:px-16 lg:flex lg:item-center
          "
        >
          <div className="md:w-1/2 sm:p-4 md:px-8 lg:px-12 md:pb-2">
            <Image
              className="rounded-md"
              alt="Image"
              //@ts-ignore
              src={`https:${datamap.fields.companyOverviewImage.fields.file.url}`}
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="sm:px-4 md:w-1/2 mt-4 md:mt-0 md:pr-8 lg:pr-16 text-center md:text-left font-Anek_Devanagari">
            <div className="text-sm text-gray-900 leading-7 font-semibold text-justify">
              <p className="text-3xl text-black font-ZenDots">{datamap.fields.title}</p>
              <p className="text-xl pb-2 text-black font-BakbakOne tracking-widest">{datamap.fields.tagLine}</p>
              <RichText document={datamap.fields.aboutText} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompanyOverview;
