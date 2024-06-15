import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type RichTextType = {
  document: RichTextDocument;
};

export default function RichText({ document }: RichTextType) {
  if (!document) {
    return null;
  }
  return <>{documentToReactComponents(document)}</>;
}
