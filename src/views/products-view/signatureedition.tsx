"use client"
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import Link from "next/link";

function SignatureEdition() {
  const [data, setData] = useState<TypeBlogFields[]>([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntries<TypeBlogFields>();
        // @ts-ignore
        setData(response?.items || []);
        setShowContent(true); // Show content after fetching data
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-white min-h-full">
      <Head>
        <title>Ironclad Watch Signature Edition Products</title>
        <link
          rel="preload"
          href="/fonts/ZenDots-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BakbakOne-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>

      {showContent && (
        <div className="max-w-full my-auto py-5 px-4 sm:px-6 lg:px-8">
          {data.map((datamap) => (
            <div
            // @ts-ignore
              key={datamap.sys.id}
              className="bg-zinc-900 text-white font-Anek_Devanagari py-12 px-4 sm:px-6 lg:px-8 mb-8 rounded-lg"
            >
              <div className="px-4 sm:px-0">
                <p className="text-3xl lg:text-5xl text-white font-ZenDots text-center mb-6">
                  {datamap.fields.companyOverviewTitle}
                </p>
                <p className="text-white font-BakbakOne tracking-widest text-center mb-8">
                  {datamap.fields.productTitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="text-gray-200 flex flex-col items-center justify-center"
                  >
                    <div className="relative sm:h-64 md:h-80 lg:h-96 h-[151px] w-[217px] lg:w-full">
                      <div className="absolute inset-0 flex justify-center items-center">
                        <Image
                          className="rounded-lg"
                          alt={`Product Image ${index}`}
                          // @ts-ignore
                          src={`https:${datamap.fields[`imageProductSection${index}`]?.fields.file.url}`}
                          layout="fill"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <p className="text-xl text-gray-200 font-ZenDots pt-4 text-center lg:pt-8 mb-4">
                     {/* @ts-ignore */}
                      {datamap.fields[`titleProductSection${index}`]}
                    </p>
                    <div className="rounded-lg text-justify px-4 sm:px-0 mb-4">
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
      )}
    </div>
  );
}

export default SignatureEdition;
