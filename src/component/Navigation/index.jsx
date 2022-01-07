import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/about"
            label="Dashboard"
            icon={<DashboardIcon />}
          />
          <BottomNavigationAction
          component={Link}
          to="/login"
          label="Login" icon={<LoginIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
