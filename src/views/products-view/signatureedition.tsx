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
            // @ts-ignore
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
                {datamap.fields.imageProductSection1 && (
                  <ProductSection
                    // @ts-ignore
                    image={datamap.fields.imageProductSection1.fields.file.url}
                    // @ts-ignore
                    title={datamap.fields.titleProductSection1}
                    // @ts-ignore
                    content={datamap.fields.productSection1 || ""}
                  />
                )}
                {datamap.fields.imageProductSection2 && (
                  <ProductSection
                    // @ts-ignore
                    image={datamap.fields.imageProductSection2.fields.file.url}
                    // @ts-ignore
                    title={datamap.fields.titleProductSection2}
                    // @ts-ignore
                    content={datamap.fields.productSection2 || ""}
                  />
                )}
                {datamap.fields.imageProductSection3 && (
                  <ProductSection
                    // @ts-ignore
                    image={datamap.fields.imageProductSection3.fields.file.url}
                    // @ts-ignore
                    title={datamap.fields.titleProductSection3}
                    // @ts-ignore
                    content={datamap.fields.productSection3 || ""}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Component untuk menampilkan setiap bagian produk
const ProductSection = ({ image, title, content }: { image: string; title: string; content: string }) => (
  <div className="text-gray-200">
    <div className="relative h-64 sm:h-80 lg:h-96">
      <Image
        className="rounded-lg"
        alt={`Product Image`}
        src={`https:${image}`}
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />
    </div>
    <p className="text-xl text-gray-200 font-ZenDots pt-4 text-center lg:pt-8 mb-4">{title}</p>
    <div className="rounded-lg text-justify px-4 sm:px-0 mb-4">
      {/* @ts-ignore */}
      <RichText document={content} />
    </div>
    <div className="pt-2 px-4 sm:px-0 text-center">
      <Link href="/product/">
        <button className="px-4 py-2 font-bold text-black rounded-full bg-white">Shop Now</button>
      </Link>
    </div>
  </div>
);

export default SignatureEdition;
