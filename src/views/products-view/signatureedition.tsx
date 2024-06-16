"use client";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import RichText from "@/views/richtext/richText";
import { useState, useEffect } from "react";
import Image from "next/image";

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
        <div key={datamap.sys.id}>
          <div className="bg-zinc-900 font-Anek_Devanagari">
            <div className=" px-28 pt-10 pb-5">
              <p className="text-3xl text-white font-ZenDots">{datamap.fields.companyOverviewTitle}</p>
              <p className=" text-white font-BakbakOne tracking-widest pb-4">{datamap.fields.productTitle}</p>

              <div className="flex gap-8">
                <div className=" text-gray-200 text-justify">
                  <Image
                    className="rounded-lg loading-lazy "
                    alt="Image"
                    // @ts-ignore
                    src={`https:${datamap.fields.imageProductSection1.fields.file.url}`}
                    width={1080}
                    height={1080}
                  />
                  <p className="text-xl text-gray-200 font-ZenDots">{datamap.fields.titleProductSection1}</p>
                  <RichText document={datamap.fields.productSection1} />
                </div>

                <div className=" text-gray-200 text-justify ">
                  <Image
                    className="rounded-lg loading-lazy "
                    alt="Image"
                    // @ts-ignore
                    src={`https:${datamap.fields.imageProductSection2.fields.file.url}`}
                    width={1080}
                    height={1080}
                  />
                  <p className="text-xltext-gray-200 font-ZenDots">{datamap.fields.titleProductSection2}</p>
                  <RichText document={datamap.fields.productSection2} />
                </div>

                <div className=" text-gray-200 text-justify">
                  <Image
                    className="rounded-lg loading-lazy "
                    alt="Image"
                    // @ts-ignore
                    src={`https:${datamap.fields.imageProductSection3.fields.file.url}`}
                    width={1080}
                    height={1080}
                  />
                  <p className="text-xltext-gray-200 font-ZenDots">{datamap.fields.titleProductSection3}</p>
                  <RichText document={datamap.fields.productSection3} />
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
