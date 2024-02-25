import { Cloudinary } from "@cloudinary/url-gen";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cld = new Cloudinary({
  cloud: {
    cloudName: "dc6nccalp",
  },
});
