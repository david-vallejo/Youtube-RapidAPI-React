import React from 'react'
import {Paper, Container,Box, Typography, Image} from '@mui/material'

const Footer = () => {
  return (
<Paper sx={{padding: "20px 0px",
    width: '100%',
    position: 'relative',
    bottom: 0,
    width: '100%',
    background: "transparent"
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
            <div>

            </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="#fff">
            Copyright ©2023 David Vallejo
          </Typography>
        </Box>
      </Container>
    </Paper>
  )
}

export default Footer