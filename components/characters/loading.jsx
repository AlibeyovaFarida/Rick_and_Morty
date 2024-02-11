import { Skeleton } from '@mui/material';
import React from 'react'
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
const CharacterPageLoading = () => {
    const style = {
      display: "flex",
      height: "200px",
      alignItems: "center",
      justifyContent: "center"
    };
    const style2 = {
      borderRadius: "5px",
    };
  return (
    <div className="flex flex-col items-center pt-[36px]">
      <Box sx={style}>
        <CircularProgress />
      </Box>
      <div className="w-full hidden lg:flex items-center justify-center gap-4 pt-[16px]">
        {Array(4)
          .fill("*")
          .map((_, index) => {
            return <Skeleton width={240} height={96} key={index} />;
          })}
      </div>
      <div className="w-full flex flex-col lg:hidden items-center justify-center gap-4 pt-[16px] px-10">
        {Array(2)
          .fill("*")
          .map((_, index) => {
            return <Skeleton width={"100%"} height={96} key={index} />;
          })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-6 pt-[61px] pb-[48px]">
        {Array(12)
          .fill("*")
          .map((_, index) => {
            return (
              <div>
                <Skeleton
                  style={style2}
                  variant="rectangular"
                  width={240}
                  height={224}
                />
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton width={208} height={30} key={index} />
                  <Skeleton width={80} height={21} key={index} />
                </Box>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CharacterPageLoading