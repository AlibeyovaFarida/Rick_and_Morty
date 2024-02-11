import PageContainer from '@/container/PageContainer'
import React from 'react'
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
const CharacterDetailLoading = () => {
    const style = {
      display: "flex",
      height: "200px",
      alignItems: "center",
      justifyContent: "center",
    };
  return (
    <PageContainer>
      <div className="flex justify-center items-center my-[30vh]">
        <Box sx={style}>
          <CircularProgress />
        </Box>
      </div>  
    </PageContainer>    
  )
}

export default CharacterDetailLoading