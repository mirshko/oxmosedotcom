import type { Artist } from "../schemas/artist";

export const AboutQuery = /* groq */ `
  *[_type == "about"][0]
`;

type TwoColumn<T> = {
  left: T;
  right: T;
};

type Item = {
  name: string;
  _type: "item";
  link?: string;
};

export type Credits = {
  title: string;
  _type: "credits";
  items: Item[];
};

export type AboutQuery = {
  overview: string;
  title: string;
  part1: any[];
  part2: TwoColumn<Credits[]>;
  part3: any[];
  part4: TwoColumn<Credits[]>;
  part5: any[];
};

export type Link = {
  _type: "link";
  name: string;
  href: string;
};

export const ContactQuery = /* groq */ `
  *[_type == "contact"][0]
`;

export type ContentSection = {
  _type: "contentSection";
  title: string;
  content: any[];
  link: Link;
};

export type ContactQuery = {
  overview: string;
  title: string;
  generalSection: ContentSection;
  listenLinks: Link[];
  followLinks: Link[];
  pressKit: Link;
  demoSection: ContentSection;
  syncSection: ContentSection;
};

export const ArtistsQuery = /* groq */ `
*[_type == "artist" && defined(slug)] | order(name asc)`;

export type ArtistsQuery = Artist[];
