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
    <div className="bg-white">
      <Head>
        <title>Ironclad Watch Company History</title>
        <link rel="preload" href="/fonts/ZenDots-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/BakbakOne-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </Head>

      {showContent && (
        <div className="max-w-full mx-auto py-5 px-4 sm:px-6">
          {data?.map((datamap) => (
            // @ts-ignore
            <div key={datamap.sys.id} className="grid grid-cols-1 gap-4 py-5 px-7 items-center md:grid-cols-1 lg:grid-cols-3">
              <div className="flex justify-center mx-auto">
                <div className="rounded-md overflow-hidden h-72 w-72 lg:h-96 lg:w-96">
                  <Image
                    className="object-cover object-center"
                    alt="Company History Image"
                    //  @ts-ignore
                    src={`https:${datamap.fields.companyHistoryImage.fields.file.url}`}
                    width={600}
                    height={600}
                    layout="responsive"
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="col-span-2 text-center md:text-left lg:ml-8 mt-5 lg:mt-0">
                <p className="text-2xl lg:text-5xl text-black font-ZenDots">{datamap.fields.title}</p>
                <p className="text-base lg:text-2xl pb-4 text-black font-BakbakOne tracking-widest">
                  {datamap.fields.companyHistoryTitle}
                </p>
                <div className="w-auto text-xs lg:text-base text-gray-900 lg:leading-7 text-justify">
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
