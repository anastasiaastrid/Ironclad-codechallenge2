"use client";
import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import RichText from "@/views/richtext/richText";
import { useState, useEffect } from "react";
import Image from "next/image";
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
    <div className="bg-white">
      {data?.map((datamap) => (
        // @ts-ignore

        <div key={datamap.sys.id}>
          <div className="bg-zinc-900 font-Anek_Devanagari">
            <div className="px-28 pt-10 pb-5">
              <p className="text-3xl text-white font-ZenDots">{datamap.fields.companyOverviewTitle}</p>
              <p className="text-white font-BakbakOne tracking-widest pb-4">{datamap.fields.productTitle}</p>

              <div className="flex content-center gap-8">
                <div className="text-gray-200 text-justify">
                  <Image
                    className="rounded-lg loading-lazy"
                    alt="Image" // @ts-ignore
                    src={`https:${datamap.fields.imageProductSection1.fields.file.url}`}
                    width={1080}
                    height={1080}
                  />
                  <p className="pt-5 text-xl text-gray-200 font-ZenDots">
                    {/* @ts-ignore */}
                    {datamap.fields.titleProductSection1}
                  </p>
                </div>

                <div className="text-gray-200 text-justify">
                  <Image
                    className="rounded-lg loading-lazy"
                    alt="Image" // @ts-ignore
                    src={`https:${datamap.fields.imageProductSection2.fields.file.url}`}
                    width={1080}
                    height={1080}
                  />
                  {/* @ts-ignore */}
                  <p className="pt-5 text-xl text-gray-200 font-ZenDots">{datamap.fields.titleProductSection2}</p>
                </div>

                <div className="text-gray-200 text-justify">
                  <Image
                    className="rounded-lg loading-lazy"
                    alt="Image" // @ts-ignore
                    src={`https:${datamap.fields.imageProductSection3.fields.file.url}`}
                    width={1080}
                    height={1080}
                  />
                  {/* @ts-ignore */}
                  <p className="pt-5 text-xl text-gray-200 font-ZenDots">{datamap.fields.titleProductSection3}</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-1 pt-2 pr-4 rounded-lg text-gray-200 text-justify">
                  <RichText document={datamap.fields.productSection1 || ""} />
                </div>
                <div className="flex-1 pt-2 pr-4 rounded-lg text-gray-200 text-justify">
                  <RichText document={datamap.fields.productSection2} />
                </div>
                <div className="flex-1 pt-2 pr-4 rounded-lg text-gray-200 text-justify">
                  <RichText document={datamap.fields.productSection3} />
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-1 pr-4 rounded-lg text-gray-200 text-justify">
                  <div className="lg:pb-4 pt-2">
                    <Link href="/product/">
                      <button className="px-4 py-2 font-bold text-black rounded flex items-center justify-center bg-white text-center transition duration-300 transform hover:scale-110">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex-1 pr-4 rounded-lg text-gray-200 text-justify">
                  <div className="lg:pb-4 pt-2">
                    <Link href="/product/">
                      <button className="px-4 py-2 font-bold text-black rounded flex items-center justify-center bg-white text-center transition duration-300 transform hover:scale-110">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex-1 pr-4 rounded-lg text-gray-200 text-justify">
                  <div className="lg:pb-4 pt-2">
                    <Link href="/product/">
                      <button className="px-4 py-2 font-bold text-black rounded flex items-center justify-center bg-white text-center transition duration-300 transform hover:scale-110">
                        Shop Now
                      </button>
                    </Link>
                  </div>
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
