"use client";
import React, { useState, useCallback } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Search from "@/components/search";
import {useRouter, useSearchParams } from "next/navigation";
import FilterBtn from '../../../assets/filter.svg'
import CloseBtn from '../../../assets/close.svg'
import Image from "next/image";
const statusList = ["Alive", "Dead", "Unknown"];
const speciesList = [
  "Human",
  "Alien",
  "Humanoid",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Robot",
  "Cronenberg",
];
const genderList = ["Female", "Male", "Genderless", "Unknown"];
const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [species, setSpecies] = useState(searchParams.get("species") ?? "");
  const [gender, setGender] = useState(searchParams.get("gender") ?? "");
  const [status, setStatus] = useState(searchParams.get("status") ?? "");
  const [isOpen, setIsOpen] = useState(false)
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleChangeSpecies = (event) => {
    setSpecies(event.target.value);
    router.push(
      "/characters" + "?" + createQueryString("species", event.target.value)
    );
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
    router.push(
      "/characters" + "?" + createQueryString("gender", event.target.value)
    );
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
    router.push(
      "/characters" + "?" + createQueryString("status", event.target.value)
    );
  };

  return (
    <div
      className={`w-full max-w-[975px] flex gap-4 lg:gap-0 items-center flex-col lg:flex-row pt-[16px]`}
    >
      <Search placeholder="Filter by name..." maxWidth={"lg:max-w-[240px]"} />
      <div
        className={`w-full ${
          isOpen ? "flex" : "hidden"
        } lg:flex items-center flex-col lg:flex-row bg-white absolute top-[110px] z-30 lg:static max-w-[312px] lg:max-w-full p-4 lg:p-0 rounded`}
      >
        <div
          className="w-full flex lg:hidden justify-between pb-4 text-xl font-roboto font-medium"
        >
          <h3>Filters</h3>
          <button onClick={() => setIsOpen(false)}>
            <Image src={CloseBtn} alt="" />
          </button>
        </div>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <Select
            value={species}
            onChange={handleChangeSpecies}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Species</em>
            </MenuItem>
            {speciesList.map((specie) => {
              return (
                <MenuItem value={specie} key={specie}>
                  {specie}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <Select
            value={gender}
            onChange={handleChangeGender}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Gender</em>
            </MenuItem>
            {genderList.map((gender) => {
              return (
                <MenuItem value={gender} key={gender}>
                  {gender}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <Select
            value={status}
            onChange={handleChangeStatus}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Status</em>
            </MenuItem>
            {statusList.map((status) => {
              return (
                <MenuItem value={status} key={status}>
                  {status}
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
