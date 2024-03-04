import artist from "./artist";
import accessibleImage from "./objects/accessibleImage";
import blockContent from "./objects/blockContent";
import credits from "./objects/credits";
import item from "./objects/item";
import link from "./objects/link";
import twoColumn from "./objects/twoColumn";
import release from "./release";
import about from "./singletons/about";

export const schemaTypes = [
  // singleton document types
  about,
  // regular document types
  artist,
  release,
  // objects
  accessibleImage,
  link,
  blockContent,
  credits,
  twoColumn,
  item,
];

/**
 * Define the singleton document types
 */
export const singletonTypes = new Set<string>([about.name]);
