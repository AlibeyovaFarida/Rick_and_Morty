import React from 'react'
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Skeleton } from "@mui/material";
import PageContainer from "@/container/PageContainer";
const EpisodePageLoading = () => {
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
        <div className='w-full max-w-[500px]'>
          <Skeleton
            style={style2}
            variant="rectangular"
            width={"100%"}
            height={56}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-6 pt-[61px] pb-[48px]">
          {Array(20)
            .fill("*")
            .map((_, index) => {
              return (
                <div className="w-[240px] max-w-[340px] sm:max-w-[300px] md:w-[200px] md:max-w-[240px]">
                  <Skeleton
                    style={style2}
                    variant="rectangular"
                    width={"100%"}
                    height={128}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </PageContainer>
  );
}

export default EpisodePageLoading