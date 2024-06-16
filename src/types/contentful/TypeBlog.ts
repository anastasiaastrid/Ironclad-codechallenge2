import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeBlogFields {
  contentTypeId: "blog";
  fields: {
    title: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    summary: EntryFields.Symbol;
    details: EntryFields.RichText;
    articleImage: Asset;
    author: EntryFields.Symbol;
    createdAt: EntryFields.Date;
    aboutText: EntryFields.RichText;
    companyOverviewImage: Asset;
    companyOverviewTitle: EntryFields.Symbol;
    tagLine: EntryFields.Symbol;
  };
}

export type TypeBlog = Entry<TypeBlogFields>;
