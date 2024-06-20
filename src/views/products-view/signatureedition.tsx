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
        <title>Ironclad Watch Signature Edition Products</title>
        <link rel="preload" href="/fonts/ZenDots-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/BakbakOne-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </Head>
      {showContent && (
        <div className="max-w-full my-auto mx-auto py-5 px-4 sm:px-6">
          {data.map((datamap) => (
            <div
              // @ts-ignore
              key={datamap.sys.id}
              className="bg-zinc-900 text-white font-Anek_Devanagari pt-12 pb-8 px-4 sm:px-6 lg:px-8 mb-8 max-w-full max-h-full"
            >
              <div className="px-4 sm:px-0">
                <p className="text-xl lg:text-5xl text-white font-ZenDots text-center">
                  {datamap.fields.companyOverviewTitle}
                </p>
                <p className="text-sm lg:text-base text-white font-BakbakOne tracking-widest pb-4 text-center mb-3">
                  {datamap.fields.productTitle}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0 mx-auto">
                {/* Product Section 1 */}
                {datamap.fields.imageProductSection1 && (
                  <div key={datamap.fields.imageProductSection1.sys.id} className="text-gray-200">
                    <div className="relative w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto">
                      <Image
                        className="rounded-lg"
                        alt={`Product Image 1`}
                        // @ts-ignore
                        src={`https:${datamap.fields.imageProductSection1.fields.file.url}`}
                        layout="fill"
                        objectFit="cover"
                        loading="lazy"
                        placeholder="blur"
                      />
                    </div>
                    <p className="text-sm lg:text-xl text-gray-200 font-ZenDots pt-4 text-center lg:pt-8 mb-4">
                      {/* @ts-ignore */}
                      {datamap.fields.titleProductSection1}
                    </p>
                    <div className="lg:leading-relaxed text-xs w-auto lg:text-base rounded-lg text-justify px-4 sm:px-0 mb-4">
                      <RichText document={datamap.fields.productSection1 || ""} />
                    </div>
                    <div className="pt-2 px-4 sm:px-0 text-center">
                      <Link href="/product/">
                        <button className="text-xs lg:text-base px-4 py-2 font-bold text-black rounded-full bg-white">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
                {/* Product Section 2 */}
                {datamap.fields.imageProductSection2 && (
                  <div key={datamap.fields.imageProductSection2.sys.id} className="text-gray-200">
                    <div className="relative w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto">
                      <Image
                        className="rounded-lg"
                        alt={`Product Image 2`}
                        // @ts-ignore
                        src={`https:${datamap.fields.imageProductSection2.fields.file.url}`}
                        layout="fill"
                        objectFit="cover"
                        loading="lazy"
                        placeholder="blur"
                      />
                    </div>
                    <p className="text-sm lg:text-xl text-gray-200 font-ZenDots pt-4 text-center lg:pt-8 mb-4">
                      {/* @ts-ignore */}
                      {datamap.fields.titleProductSection2}
                    </p>
                    <div className="lg:leading-relaxed text-xs w-auto lg:text-base rounded-lg text-justify px-4 sm:px-0 mb-4">
                      <RichText document={datamap.fields.productSection2 || ""} />
                    </div>
                    <div className="pt-2 px-4 sm:px-0 text-center">
                      <Link href="/product/">
                        <button className="text-xs lg:text-base px-4 py-2 font-bold text-black rounded-full bg-white">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
                {/* Product Section 3 */}
                {datamap.fields.imageProductSection3 && (
                  <div key={datamap.fields.imageProductSection3.sys.id} className="text-gray-200">
                    <div className="relative w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto">
                      <Image
                        className="rounded-lg"
                        alt={`Product Image 3`}
                        // @ts-ignore
                        src={`https:${datamap.fields.imageProductSection3.fields.file.url}`}
                        layout="fill"
                        objectFit="cover"
                        loading="lazy"
                        placeholder="blur"
                      />
                    </div>
                    <p className="text-sm lg:text-xl text-gray-200 font-ZenDots pt-4 text-center lg:pt-8 mb-4">
                      {/* @ts-ignore */}
                      {datamap.fields.titleProductSection3}
                    </p>
                    <div className="lg:leading-relaxed text-xs w-auto lg:text-base rounded-lg text-justify px-4 sm:px-0 mb-4">
                      <RichText document={datamap.fields.productSection3 || ""} />
                    </div>
                    <div className="pt-2 px-4 sm:px-0 text-center">
                      <Link href="/product/">
                        <button className="text-xs lg:text-base px-4 py-2 font-bold text-black rounded-full bg-white">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SignatureEdition;
