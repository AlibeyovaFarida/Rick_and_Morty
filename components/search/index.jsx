"use client"
import React, { useCallback, useState } from 'react'
import SearchLogo from "../../assets/search.svg"
import Image from 'next/image'
import { usePathname, useSearchParams, useRouter } from "next/navigation";
const Search = ({placeholder, maxWidth}) => {
  const [searchInput, setSearchInput] = useState("")
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const HandleSearchData = (e) => {
    setSearchInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(
      pathname + "?" + createQueryString("name", e.target.value)
    );
  }
  return (
    <form
      onKeyUp={(e) => handleSubmit(e)}
      className={`w-full ${maxWidth} relative`}
    >
      <button>
        <Image src={SearchLogo} alt="" className="absolute top-[50%] left-3 translate-y-[-50%]" />
      </button>
      <input
        type="text"
        className="w-full h-[56px] border-[1px] border-black/[0.5] outline-none py-4 px-10 rounded-[6px]"
        placeholder={placeholder}
        value={searchInput}
        onChange={(e) => HandleSearchData(e)}
      />
    </form>
  );
}

export default Search