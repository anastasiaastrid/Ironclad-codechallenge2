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
    productTitle: EntryFields.Symbol;
    imageProductSection1: Asset;
    imageProductSection2: Asset;
    imageProductSection3: Asset;
    titleProductSection1: Symbol;
    titleProductSection2: Symbol;
    titleProductSection3: Symbol;
    productSection1: EntryFields.RichText;
    productSection2: EntryFields.RichText;
    productSection3: EntryFields.RichText;
    companyHistoryImage: Asset;
    companyHistoryTitle: EntryFields.Symbol;
    companyHistoryText: EntryFields.RichText;
  };
}

export type TypeBlog = Entry<TypeBlogFields>;
