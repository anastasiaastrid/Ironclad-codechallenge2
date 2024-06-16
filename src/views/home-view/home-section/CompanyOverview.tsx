import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import Image from "next/image";
import RichText from "@/views/richtext/richText";


export async function fetchCompanyOverviewSection() {
  try {
    const data = await client.getEntries<TypeBlogFields>();
    return data?.items;
  } catch (err) {
    console.log(err);
  }
}

export default async function CompanyOverview() {
  const data = await fetchCompanyOverviewSection();
  return (
    <div>
      <div>
        {data?.map((datamap) => (
          <div key={datamap.sys.id} className="my-8 md:flex md:items-center md:p-8">
            <div className="md:w-1/2 md:pl-28">
              <Image
                className="object-cover rounded-lg"
                alt="Image"
                // @ts-ignore
                src={`https:${datamap.fields.companyOverviewImage.fields.file.url}`}
                width={1900}
                height={1900}
              />
            </div>
            <div className="md:w-1/2 md:pl-10 mt-4 md:mt-0 md:pr-40 text-center md:text-left">
              <div className="text-sm text-slate-950 leading-relaxed font-semibold text-justify">
                <p className="text-4xl text-black font-semibold">{datamap.fields.companyOverviewTitle}</p>
                <p className="text-xl pb-4 text-black font-semibold font-PlaywriteDE">{datamap.fields.tagLine}</p>
                <RichText document={datamap.fields.aboutText} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
