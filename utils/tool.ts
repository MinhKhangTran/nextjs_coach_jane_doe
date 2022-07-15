import fs from "fs/promises";
import path from "path";

export interface Root {
  hero: Hero;
  "ueber-mich": UeberMich;
  leistungen: Leistungen[];
  qualifikationen: Qualifikationen[];
  testimonial: Testimonial[];
  socials: Social[];
}

export interface Hero {
  image: string;
  altText: string;
  title: string;
  text: string;
  btnText: string;
}

export interface UeberMich {
  image: string;
  altText: string;
  title: string;
  text: string;
}

export interface Leistungen {
  id: number;
  thumb: string;
  altText: string;
  title: string;
  text: string;
}

export interface Qualifikationen {
  id: number;
  icon: string;
  title: string;
  text: string;
}

export interface Testimonial {
  id: number;
  title: string;
  text: string;
}

export interface Social {
  id: number;
  image: string;
  title: string;
  url: string;
}

export const getJsonData = async () => {
  const filePath = path.join(process.cwd(), "utils", "db.json");
  const db = await fs.readFile(filePath);
  const data: Root = JSON.parse(db);
  return data;
};
