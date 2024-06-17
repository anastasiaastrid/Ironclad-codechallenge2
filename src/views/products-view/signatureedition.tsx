"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import Link from "next/link";

<Head>
  <title>Ironclad Watch Signature Edition Products</title>
</Head>;

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
    <div className="bg-white">
      {data?.map((datamap) => (
        // @ts-ignore
        <div
          // @ts-ignore
          key={datamap.sys.id}
          className="bg-zinc-900 font-Anek_Devanagari
        pt-0 pb-5
        "
        >
          <div
            className="px-16 py-10
          sm:px-8
          md:px-16
          lg:px-28 "
          >
            <p className="text-3xl lg:text-5xl text-white font-ZenDots">{datamap.fields.companyOverviewTitle}</p>
            <p className="text-white font-BakbakOne tracking-widest pb-4">{datamap.fields.productTitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            
            <div className="text-gray-200">
                <div className="relative">
                  <Image
                    className="rounded-lg
                    lg:px-14
                     px-16"
                    alt="Image"
                    // @ts-ignore
                    src={`https:${datamap.fields.imageProductSection1?.fields.file.url}`}
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </div>
                {/* @ts-ignore */}
                <p
                  className="text-xl text-gray-200 font-ZenDots
                lg: pt-3 lg:text-2xl lg:px-0 px-16"
                >
                  {/* @ts-ignore */}
                  {datamap.fields.titleProductSection1}
                </p>
                <div className="rounded-lg text-justify lg:px-0 px-16">
                  <RichText document={datamap.fields.productSection1 || ""} />
                </div>
                <div className="lg:pb-4 pt-2 lg:px-0 px-14">
                  <Link href="/product/">
                    <button className="px-4 py-2 font-bold text-black rounded-full bg-white hover:bg-gray-200 transition duration-300">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>

              <div className="text-gray-200">
                <div className="relative">
                  <Image
                    className="rounded-lg
                    lg:px-14
                     px-16"
                    alt="Image"
                    // @ts-ignore
                    src={`https:${datamap.fields.imageProductSection2?.fields.file.url}`}
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </div>
                {/* @ts-ignore */}
                <p
                  className="text-xl text-gray-200 font-ZenDots
                lg: pt-3 lg:text-2xl lg:px-0 px-16"
                >
                  {/* @ts-ignore */}
                  {datamap.fields.titleProductSection2}
                </p>
                <div className="rounded-lg text-justify lg:px-0 px-16">
                  <RichText document={datamap.fields.productSection2 || ""} />
                </div>
                <div className="lg:pb-4 pt-2 lg:px-0 px-14">
                  <Link href="/product/">
                    <button className="px-4 py-2 font-bold text-black rounded-full bg-white hover:bg-gray-200 transition duration-300">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>

              <div className="text-gray-200">
                <div className="relative">
                  <Image
                    className="rounded-lg
                    lg:px-14
                     px-16"
                    alt="Image"
                    // @ts-ignore
                    src={`https:${datamap.fields.imageProductSection3?.fields.file.url}`}
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </div>
                {/* @ts-ignore */}
                <p
                  className="text-xl text-gray-200 font-ZenDots
                lg: pt-3 lg:text-2xl lg:px-0 px-16"
                >
                  {/* @ts-ignore */}
                  {datamap.fields.titleProductSection3}
                </p>
                <div className="rounded-lg text-justify lg:px-0 px-16">
                  <RichText document={datamap.fields.productSection3 || ""} />
                </div>
                <div className="lg:pb-4 pt-2 lg:px-0 px-14">
                  <Link href="/product/">
                    <button className="px-4 py-2 font-bold text-black rounded-full bg-white hover:bg-gray-200 transition duration-300">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SignatureEdition;
