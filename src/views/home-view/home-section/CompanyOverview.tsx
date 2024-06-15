import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import Image from "next/image";
import RichText from "@/views/richtext/richText";
import Link from "next/link";

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
          <div key={datamap.sys.id} className="relative">
            <div>
              <div className="px-40 py-10">
                <RichText document={datamap.fields.aboutText} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
