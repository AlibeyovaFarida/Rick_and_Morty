"use client";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Search from "@/components/search";
import CloseBtn from "../../../assets/close.svg";
import FilterBtn from "../../../assets/filter.svg";
import { getAllTypes } from "../../../services/getAllLocations";
import { getAllDimensions } from "@/services/getAllLocations";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Image from "next/image";
const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [typesList, setTypesList] = useState([]);
  const [dimensionsList, setDimensionsList] = useState([]);
  const [type, setType] = useState(searchParams.get("type") ?? "");
  const [dimension, setDimension] = useState(
    searchParams.get("dimension") ?? ""
  );
  const [isOpen, setIsOpen] = useState(false);
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [typesData, dimensionsData] = await Promise.all([
          getAllTypes(),
          getAllDimensions(),
        ]);
        setTypesList(typesData);
        setDimensionsList(dimensionsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChangeType = (event) => {
    setType(event.target.value);
    router.push(pathname + "?" + createQueryString("type", event.target.value));
  };
  const handleChangeDimension = (event) => {
    setDimension(event.target.value);
    router.push(
      pathname + "?" + createQueryString("dimension", event.target.value)
    );
  };
  return (
    <div
      className={`w-full max-w-[975px] flex gap-4 lg:gap-0 items-center flex-col lg:flex-row pt-[16px]`}
    >
      <Search placeholder="Filter by name..." />
      <div
        className={`w-full ${
          isOpen ? "flex" : "hidden"
        } lg:flex items-center flex-col lg:flex-row bg-white absolute top-[110px] z-30 lg:static max-w-[312px] lg:max-w-full p-4 lg:p-0 rounded`}
      >
        <div
          className="w-full flex lg:hidden justify-between pb-4 text-xl font-roboto font-medium"
          onClick={() => setIsOpen(false)}
        >
          <h3>Filters</h3>
          <button onClick={() => setIsOpen(false)}>
            <Image src={CloseBtn} alt="" />
          </button>
        </div>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <Select
            value={type}
            onChange={handleChangeType}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Type</em>
            </MenuItem>
            {typesList.map((type) => {
              return (
                <MenuItem value={type} key={type}>
                  {type}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <Select
            value={dimension}
            onChange={handleChangeDimension}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Dimension</em>
            </MenuItem>
            {dimensionsList.map((dimension) => {
              return (
                <MenuItem value={dimension} key={dimension}>
                  {dimension}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <button
          className="lg:hidden w-full bg-[#E3F2FD] rounded py-4 text-[#2196F3] uppercase font-medium font-roboto mt-[33px]"
          onClick={() => setIsOpen(false)}
        >
          Apply
        </button>
      </div>
      <button
        className="w-full flex lg:hidden bg-[#E3F2FD] items-center justify-center py-[15px] rounded gap-5 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.24),0px_0px_2px_0px_rgba(0,0,0,0.12)]"
        onClick={() => setIsOpen(true)}
      >
        <Image src={FilterBtn} alt="" />
        <span className="text-[#2196F3] uppercase font-roboto">
          Advanced Filters
        </span>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-0 left-0 z-20 bg-black bg-opacity-50 w-screen h-screen`}
      ></div>
    </div>
  );
};

export default Filter;
