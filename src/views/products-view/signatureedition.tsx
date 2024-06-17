"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import Link from "next/link";

function SignatureEdition() {
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
        <title>Ironclad Watch Signature Edition Products</title>
      </Head>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {data?.map((datamap) => (
          // @ts-ignore
          <div
          // @ts-ignore
            key={datamap.sys.id}
            className="bg-zinc-900 text-white font-Anek_Devanagari pt-5 pb-8 px-4 sm:px-6 lg:px-8"
          >
            <div className="px-4 sm:px-0">
              <p className="text-3xl lg:text-5xl text-white font-ZenDots text-center">
                {datamap.fields.companyOverviewTitle}
              </p>
              <p className="text-white font-BakbakOne tracking-widest pb-4 text-center">
                {datamap.fields.productTitle}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
              {[1, 2, 3].map((index) => (
                <div key={index} className="text-gray-200">
                  <div className="relative h-80">
                    <Image
                      className="rounded-lg"
                      alt={`Product Image ${index}`}
                      //  @ts-ignore
                      src={`https:${datamap.fields[`imageProductSection${index}`]?.fields.file.url}`}
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xl text-gray-200 font-ZenDots pt-3 text-center lg:text-left">
                    {/* @ts-ignore */}
                    {datamap.fields[`titleProductSection${index}`]}
                  </p>
                  <div className="rounded-lg text-justify px-4 sm:px-0">
                    {/* @ts-ignore */}
                    <RichText document={datamap.fields[`productSection${index}`] || ""} />
                  </div>
                  <div className="pt-2 px-4 sm:px-0 text-center">
                    <Link href="/product/">
                      <button className="px-4 py-2 font-bold text-black rounded-full bg-white">Shop Now</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SignatureEdition;
