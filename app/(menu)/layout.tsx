import SubBannerMenu from "@/components/common/SubMenuBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubBannerMenu />
      <div className="w-full flex justify-center">
        <div className="w-[1100px] h-auto pt-10 pb-[100px]">{children}</div>
      </div>
    </>
  );
}
