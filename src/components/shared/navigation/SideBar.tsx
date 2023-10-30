"use client";
import React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import { usePathname } from "next/navigation";

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Tableau de bord", href: "/dashboard", icon: DashboardIcon },
  { text: "Calendrier", href: "/tasks", icon: StarIcon },
  //   { text: "Liste", href: "/list", icon: ChecklistIcon },
  //   { text: "Reglage", href: "/list", icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: "Aide", icon: SettingsIcon },
  { text: "Contactez-nous", icon: SupportIcon },
  { text: "Deconnexion", icon: LogoutIcon },
];
const SideBar = () => {
  const pathname = usePathname();
  return (
    <Box>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            top: ["48px", "56px", "64px"],
            height: "auto",
            bottom: 0,
            background: "rgba(222, 234, 243, 1)",
            border: "none",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {LINKS.map(({ text, href, icon: Icon }) => {
            const isActive =
              (pathname.includes(href) && href.length > 1) || pathname === href;

            return (
              <ListItem key={href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={href}
                  style={{
                    borderRadius: "8px",
                    background: isActive ? "rgba(4, 96, 163, 0.15)" : "",
                    margin: "0.5rem",
                  }}
                >
                  <ListItemIcon>
                    <Icon sx={{ color: isActive ? "#3B83B8" : "" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ color: isActive ? "#3B83B8" : "" }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Divider sx={{ mt: "auto" }} />
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ListItemText
                  primary={text}
                  sx={{
                    color:
                      text === "Deconnexion" ? "rgba(223, 30, 30, 0.75)" : "",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
