import "./App.css";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Stack,
  Grid,
  Rating,
} from "@mui/material";
import {
  Info as InfoIcon,
  Menu as MenuIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import list from "./list.json";

export default function App() {
  const [anchorE1, setAnchorE1] = useState(null);
  const handleMenu = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };
  const SettingsList = [
    "My Extensions & Apps",
    "Language: English (United States)",
    "Location: India",
    "Developer Dashboard",
    "Help",
  ];

  const onMouseEnter = (block_index, row_index) => {
    document
      .getElementById("style_" + block_index + "_" + row_index)
      .classList.remove("hidden");
    document
      .getElementById("style_" + block_index + "_" + row_index)
      .classList.add("visible");
  };

  const onMouseLeave = (block_index, row_index) => {
    document
      .getElementById("style_" + block_index + "_" + row_index)
      .classList.remove("visible");
    document
      .getElementById("style_" + block_index + "_" + row_index)
      .classList.add("hidden");
  };

  return (
    <div>
      <Box>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="inherit" size="large">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Chrome Web Store
            </Typography>
            <IconButton color="inherit" onClick={handleMenu}>
              <SettingsIcon />
            </IconButton>
            <Menu
              anchorEl={anchorE1}
              open={Boolean(anchorE1)}
              onClose={handleClose}
            >
              {SettingsList.map((value, index) => {
                return (
                  <MenuItem key={index} onClick={handleClose}>
                    {value}
                  </MenuItem>
                );
              })}
            </Menu>
            <Button color="inherit" sx={{ textTransform: "inherit" }}>
              Sign in
            </Button>
          </Toolbar>
        </AppBar>
        hey
        <Box
          sx={{ backgroundColor: "#fafafa", width: "1000px", margin: "auto" }}
        >
          {list.map((block, block_index) => {
            return (
              <>
                <Box pt={10} />
                <br />
                <Box mx={2}>
                  <Stack
                    direction="row"
                    display="flex"
                    justifyContent="space-between"
                    sx={{ borderTop: "2px solid #e8eaed" }}
                    pt={4}
                    mb={1}
                  >
                    <Typography variant="h5">
                      {block.titles.title}
                      <IconButton>
                        <InfoIcon />
                      </IconButton>
                    </Typography>
                    <Button
                      LinkComponent={"a"}
                      href={block.titles.buttonLink}
                      target="_blank"
                      variant="outlined"
                      sx={{ backgroundColor: "white" }}
                    >
                      {block.titles.buttonName}
                    </Button>
                  </Stack>
                  <Typography sx={{ color: "#3c4043" }}>
                    {block.titles.description}
                  </Typography>
                  <Grid container spacing={2} columnGap={2} mt={2}>
                    {block.list.map((row, row_index) => {
                      return (
                        <Grid item xs={3.5}>
                          <a
                            href={row.href}
                            target="_blank"
                            onMouseEnter={() => {
                              onMouseEnter(block_index, row_index);
                            }}
                            onMouseLeave={() => {
                              onMouseLeave(block_index, row_index);
                            }}
                          >
                            <Box sx={{ position: "relative" }}>
                              <img
                                style={{ width: "266px" }}
                                src={row.imageSrc}
                              />
                              <Box
                                id={"style_" + block_index + "_" + row_index}
                                className="hidden"
                                sx={{
                                  position: "absolute",
                                  top: "0px",
                                  left: "0px",
                                  width: "-webkit-fill-available",
                                  height: "-webkit-fill-available",
                                  padding: "15px",
                                  letterSpacing: "0.014em",
                                  fontSize: "0.87rem",
                                  textAlign: "center",
                                  display: "flex",
                                  alignItems: "center",
                                  backgroundColor: "rgba(255,255,255,0.95)",
                                }}
                              >
                                {row.hoverText}
                              </Box>
                            </Box>
                            <Typography
                              sx={{
                                marginTop: "15px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {row.extensionName}
                            </Typography>
                            <Typography
                              sx={{ marginTop: "8px", display: "flex" }}
                              title={row.ratingTitle}
                            >
                              <Rating
                                sx={{ color: "black" }}
                                defaultValue={
                                  Math.floor(Math.random() * 10) / 5 + 3
                                }
                                precision={0.5}
                                readOnly
                              />
                              <Typography ml={1}>{row.ratingValue}</Typography>
                            </Typography>
                          </a>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}
