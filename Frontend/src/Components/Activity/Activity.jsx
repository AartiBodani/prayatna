import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Activty.css";
import { Link } from "react-router-dom";

const Activity = () => {
  return (
    <Box className="mb-5 mt-5 py-5">
      <Container maxWidth="sm">
        {/* <Typography
          // component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          className="act_title"
        >
          Why Prayatna?
        </Typography> */}
        <h2 className="act_title text-center mb-4">Why Prayatna?</h2>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {/* We visited various NGO websites and found that they were doing only
          certain activities. They have faced the issue of finding a provider or
          NGO as per their needs. people must have to visit different NGO to
          take help from them. People have to visit various NGO websites to find
          the perfect one. */}
          Here, You can be visited various NGO as per your need.Also you can
          Communicate with them by sending Request.Our Mission is Help to Needy
          people and reduce their problems.
        </Typography>
        <Box className="heroButtons">
          <Grid container spacing={2} justifyContent="center">
            {/* <Grid item>
              <Button variant="contained" color="primary">
                About us
              </Button>
            </Grid> */}
            <Grid item>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ fontSize: "18px" }}
                >
                  More info
                </Button>
              </Link>
            </Grid>
          </Grid>
          {/* <Typography gutterBottom /> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Activity;
