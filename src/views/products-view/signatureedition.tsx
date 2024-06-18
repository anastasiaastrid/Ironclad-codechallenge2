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
    <div className="bg-white min-h-full w-full">
      <Head>
        <title>Ironclad Watch Signature Edition Products</title>
      </Head>
      <div className="max-w-full max-h-full my-auto mx-auto py-5 px-4 sm:px-6 ">
        {data?.map((datamap) => (
          <div
            // @ts-ignore
            key={datamap.sys.id}
            className="bg-zinc-900 text-white font-Anek_Devanagari pt-12 pb-8 px-4 sm:px-6 lg:px-8 mb-8"
          >
            <div className="px-4 sm:px-0">
              <p className="text-3xl lg:text-5xl text-white font-ZenDots text-center mb-6">
                {datamap.fields.companyOverviewTitle}
              </p>
              <p className="text-white font-BakbakOne tracking-widest pb-4 text-center mb-8">
                {datamap.fields.productTitle}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
              <div className="text-gray-200">
                <div className="relative h-80 sm:h-64 md:h-80 lg:h-96">
                  <Image
                    className="rounded-lg"
                    alt={`Product Image 1`}
                    // @ts-ignore
                    src={`https:${datamap.fields.imageProductSection1?.fields.file.url}`}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-xl text-gray-200 font-ZenDots pt-4 text-center lg:pt-8 mb-4">
                  {/** @ts-ignore */}
                  {datamap.fields.titleProductSection1}
                </p>
                <div className="rounded-lg text-justify px-4 sm:px-0 mb-4">
                  <RichText document={datamap.fields.productSection1 || ""} />
                </div>
                <div className="pt-2 px-4 sm:px-0 text-center">
                  <Link href="/product/">
                    <button className="px-4 py-2 font-bold text-black rounded-full bg-white">Shop Now</button>
                  </Link>
                </div>
              </div>

              <div className="text-gray-200">
                <div className="relative h-80 sm:h-64 md:h-80 lg:h-96">
                  <Image
                    className="rounded-lg"
                    alt={`Product Image 2`}
                    // @ts-ignore
                    src={`https:${datamap.fields.imageProductSection2?.fields.file.url}`}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-xl text-gray-200 font-ZenDots pt-4 text-center lg:pt-8 mb-4">
                  {/** @ts-ignore */}
                  {datamap.fields.titleProductSection2}
                </p>
                <div className="rounded-lg text-justify px-4 sm:px-0 mb-4">
                  <RichText document={datamap.fields.productSection2 || ""} />
                </div>
                <div className="pt-2 px-4 sm:px-0 text-center">
                  <Link href="/product/">
                    <button className="px-4 py-2 font-bold text-black rounded-full bg-white">Shop Now</button>
                  </Link>
                </div>
              </div>

              <div className="text-gray-200">
                <div className="relative h-80 sm:h-64 md:h-80 lg:h-96">
                  <Image
                    className="rounded-lg"
                    alt={`Product Image 3`}
                    // @ts-ignore
                    src={`https:${datamap.fields.imageProductSection3?.fields.file.url}`}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-xl text-gray-200 font-ZenDots pt-4 text-center lg:pt-8 mb-4">
                  {/** @ts-ignore */}
                  {datamap.fields.titleProductSection3}
                </p>
                <div className="rounded-lg text-justify px-4 sm:px-0 mb-4">
                  <RichText document={datamap.fields.productSection3 || ""} />
                </div>
                <div className="pt-2 px-4 sm:px-0 text-center">
                  <Link href="/product/">
                    <button className="px-4 py-2 font-bold text-black rounded-full bg-white">Shop Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SignatureEdition;
