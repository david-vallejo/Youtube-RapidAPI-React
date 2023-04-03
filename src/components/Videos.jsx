import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack 
    direction={direction || "row"} 
    flexWrap="wrap" 
    justifyContent="center" 
    alignItems="center" 
    gap={2} 
    padding="10px 0px">
      {videos.map((item, idx) => (
        <Box key={idx} sx={{}}>
          {item.id.videoId && <VideoCard video={item} flex="1"/> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;