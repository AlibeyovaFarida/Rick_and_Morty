import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { Skeleton } from "@mui/material";
import PageContainer from "@/container/PageContainer";

const LocationPageLoading = () => {
  const style = {
    display: "flex",
    height: "200px",
    alignItems: "center",
    justifyContent: "center",
  };
  const style2 = {
    borderRadius: "5px",
  };
  return (
    <PageContainer>
      <div className="flex flex-col items-center pt-[36px]">
        <Box sx={style}>
          <CircularProgress />
        </Box>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 pt-[16px]">
          <Skeleton
            style={style2}
            variant="rectangular"
            width={"100%"}
            height={56}
          />
          <div className="w-full hidden lg:flex gap-3">
            {Array(2)
              .fill("*")
              .map((_, index) => {
                return (
                  <Skeleton
                    style={style2}
                    variant="rectangular"
                    width={"100%"}
                    height={56}
                  />
                );
              })}
          </div>
          <div className="w-full lg:hidden">
            <Skeleton
              style={style2}
              variant="rectangular"
              width={"100%"}
              height={56}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-6 pt-[61px] pb-[48px]">
          {Array(20)
            .fill("*")
            .map((_, index) => {
              return (
                <div className="w-[240px] max-w-[340px] sm:max-w-[300px] md:w-[200px] md:max-w-[240px]">
                  <Skeleton
                    style={style2}
                    width={"100%"}
                    height={128}
                    variant="rectangular"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </PageContainer>
  );
};

export default LocationPageLoading;
