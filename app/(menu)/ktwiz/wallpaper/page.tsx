import Image from "next/image";
import { wallpaper_img } from "@/assets/images/@index";

export default function page() {
  return (
    <Image
      className="rounded-[50px]"
      src={wallpaper_img}
      alt="wallpaper_img"
      width={1100}
      height={1000}
    />
  );
}
