"use client";
import { useCallback, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PaginationControlled({count, topRef}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) ?? 1);
  
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (_, value) => {
    router.push(pathname + "?" + createQueryString("page", value));
    setPage(value);
  };

  return (
    <Stack spacing={2} className="pb-5">
      <Pagination count={count} page={page || 1} onChange={handleChange} />
    </Stack>
  );
}
