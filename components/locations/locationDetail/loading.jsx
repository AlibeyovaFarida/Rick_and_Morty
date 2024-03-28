import PageContainer from '@/container/PageContainer'
import React from 'react'
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Skeleton } from "@mui/material";
const LocationDetailPageLoading = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-6 pt-[61px] pb-[48px]">
          {Array(12)
            .fill("*")
            .map((_, index) => {
              return (
                <div key={index}>
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
    </PageContainer>
  );
}

export default LocationDetailPageLoading