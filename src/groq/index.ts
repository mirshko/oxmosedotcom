export const AboutQuery = /* groq */ `
  *[_type == "about"][0] {
    overview,
    title,
    part1,
    part2,
    part3,
    part4,
    part5,
  }
`;

type TwoColumn<Element> = {
  left: Element[];
  right: Element[];
};

type Credits = {
  title: string;
};

export type AboutQuery = {
  overview: string;
  title: string;
  part1: any[];
  part2: TwoColumn<Credits>;
  part3: any[];
  part4: TwoColumn<Credits>;
  part5: any[];
};
