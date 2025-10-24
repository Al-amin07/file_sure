import { StaticImageData } from "next/image";

export interface ICourse {
  id: number;
  title: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  rating: number;
  students: number;
  image: string | StaticImageData;
  instructor: string;
  duration: string;
}
