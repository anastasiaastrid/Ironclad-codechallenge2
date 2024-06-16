import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import Link from "next/link";

export async function fetchHero() {
  try {
    const data = await client.getEntries<TypeBlogFields>();
    return data?.items;
  } catch (err) {
    console.log(err);
  }
}

export default async function HeroSection() {
  const data = await fetchHero();
  return (
    <div>
      <div>
        {data?.map((heromap) => (
          <div key={heromap.sys.id} className="relative">
            <Image
              className="object-cover h-screen "
              alt="Image"
              // @ts-ignore
              src={`https:${heromap.fields.articleImage.fields.file.url}`}
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 flex flex-col text-left text-white bg-black bg-opacity-50 p-4 lg:pl-40 lg:p-14 lg:pt-28">
              <p className="text-4xl lg:text-7xl">{heromap.fields.title}</p>
              <p className="pt-4 lg:pt-7 text-lg lg:text-2xl font-PlaywriteDE">{heromap.fields.summary}</p>
              <div className="pt-4 lg:pt-7 text-base">
                <RichText document={heromap.fields.details} />
              </div>
              <div className="pt-4 lg:pt-7">
                <Link className="px-4 py-2 bg-white font-bold text-black rounded" href="/products">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
