import artist from "./artist";
import accessibleImage from "./objects/accessibleImage";
import blockContent from "./objects/blockContent";
import link from "./objects/link";
import release from "./release";
import about from "./singletons/about";

export const schemaTypes = [
  //
  about,
  //
  artist,
  release,
  //
  accessibleImage,
  link,
  blockContent,
];

/**
 * Define the singleton document types
 */
export const singletonTypes = new Set<string>([about.name]);
