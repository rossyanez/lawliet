import Button from "@/components/Button";
import Logo from "@/components/Logo";
import MenuItem from "@/components/MenuItem";
import NameCard from "@/components/NameCard";
import Notification from "@/components/Notification";
import SearchButton from "@/components/SearchButton";
import Image from "next/image";

const menus = ["contact", "testimonial", "about", "terms"];

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-[131px] py-8">
          <ul className="flex text-center gap-14">
            {menus.map((menu, index) => (
              <li key={index}>
                <MenuItem>{menu}</MenuItem>
              </li>
            ))}
          </ul>
          <SearchButton />
        </div>
      </div>

      <div className="relative pb-[42px]">
        <Notification />
        <h2 className="font-playfair font-bold text-[90px] text-blue-300 leading-[120%] tracking-[0.02em] mt-5 w-[748px]">
          Your Solution Legal Consultacy
        </h2>
        <p className="font-jakarta text-grey-600 leading-[158%] tracking-[0.5px] mt-[46px] text-2xl w-[590px] font-medium">
          We are here to help you take care of your legality with the best
          service especially for you.
        </p>
        <Button />
        <p className="font-jakarta text-[22px] text-grey-500 mt-[115px] leading-[140.5%] tracking-[0.04em]">
          Trusted by 10+ companies in indonesia
        </p>
        <div className="grid grid-cols-[154px_auto] gap-y-[33px] mt-[34px]">
          <Image
            src="/airbnb-logo.png"
            width={89.71}
            height={28.02}
            alt="airbnb logo"
          ></Image>
          <Image
            src="/hubspot-logo.png"
            width={84}
            height={24.01}
            alt="hubspot"
          ></Image>
          <Image
            src="/microsoft-logo.png"
            width={122}
            height={26}
            alt="microsoft"
          ></Image>
          <Image
            src="/google-logo.png"
            width={84}
            height={28}
            alt="google"
          ></Image>
        </div>
        <NameCard />
      </div>
    </>
  );
}
