import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
    AppBar, Avatar, Box, Button,
    Grid2 as Grid, ListItemText,
    List, ListItem, ListItemAvatar, ListItemButton, 
    Stack, Toolbar, Typography 
} from '@mui/material';
import DateTimeLabel from "../DateTimeLabel/DateTimeLabel";
import { appRoutes } from "@components/routes/AppRouter";
import useUtilityStore from "@store/utilityStore";

const ButtonWrapper = (props: any) => <Button variant="contained" {...props} />;

type NavItemsType = {
    label: string;
    path?: string;
    element?: any;
    onClick?: (stores: any) => void;
};

const assignNavItemsByType = (navItems: any) => {
    const type = typeof navItems;
    if (type === "function") return navItems(appRoutes);
    if (Array.isArray(navItems)) return navItems
    else if (type === "object") return [navItems]
    else if (type === "string") return [{label: navItems}]
    else return [];
};

type NavbarPropsType = {
    navItems: 
        (appRoutes: NavItemsType[]) => NavItemsType[]
        | NavItemsType[]
        | NavItemsType
        | string 
}

export const Navbar = (props: NavbarPropsType) => {
    const utilityStore = useUtilityStore();
    const navigate = useNavigate();
    const navItems = assignNavItemsByType(props.navItems);
    return (
        <AppBar
            sx={{
                zIndex: 100,
                backdropFilter: "blur(12px)",
                bgcolor: "transparent",
                border: "none",
                boxShadow: "none",
                "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "-20px", // Adjust if needed
                    height: "80px", // Controls how far the blur radiates
                    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent)",
                    pointerEvents: "none",
                },
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={"headshot"} />
                    </ListItemAvatar>
                    <ListItemText 
                        primary={
                            <Typography color="inherit" variant="h6" component="h6">
                                Michael Woodward
                            </Typography>
                        }
                        secondary={<DateTimeLabel />}
                    />
                </ListItem>

                <Box sx={{ display: "flex", width: "100%" }}>
                    { //["Home", "All Posts", "Contact", "Subscribe"]
                    navItems.map((listItem: NavItemsType, index: number) => (
                        <ListItemText 
                            key={index}
                            // @ts-expect-error
                            component={(index > 2) ? ButtonWrapper : ListItemButton} 
                            primary={listItem.label}
                            onClick={
                                (listItem?.path && !listItem.path.includes(":"))
                                    ? () => listItem.path && navigate(listItem.path)
                                    : () => listItem.onClick && listItem.onClick({ utilityStore })
                            }
                        />
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};