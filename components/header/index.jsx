"use client"
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import Link from "next/link";
import CloseBtn from "../../assets/close.svg";
import BurgerBtn from '../../assets/burger.svg'
import { useEffect } from "react";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const handleShowBurgerMenu = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <div className="shadow-[-2px_0px_8px_2px_rgba(0,0,0,0.1)]">
      <div className="px-6 lg:px-[210px]">
        <div className="max-w-[975px] my-0 mx-auto w-full">
          <div className="pt-[6px] pb-[5px] flex items-center justify-between">
            <Link href={"/"}>
              <Image src={Logo} alt="" width={"46"} height={"49"} />
            </Link>
            <nav
              className={`bg-white lg:bg-transparent w-full lg:w-fit h-screen lg:h-fit z-10 lg:z-0 absolute lg:static top-[60px] left-0 pt-12 lg:pt-0 ${
                isOpen ? "flex" : "hidden"
              } lg:flex items-center flex-col lg:flex-row gap-12 lg:gap-6 text-2xl lg:text-lg font-bold`}
            >
              <Link
                href={{
                  pathname: "/characters",
                }}
              >
                Characters
              </Link>
              <Link href="/locations">Locations</Link>
              <Link href="/episodes">Episodes</Link>
            </nav>
            <button className="lg:hidden" onClick={handleShowBurgerMenu}>
              {isOpen ? (
                <Image src={CloseBtn} alt="" />
              ) : (
                <Image src={BurgerBtn} alt="" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
