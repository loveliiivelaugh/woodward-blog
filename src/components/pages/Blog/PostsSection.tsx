import {
    Grid2 as Grid, ListItemText,
    Toolbar, Typography
} from '@mui/material';
import { List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon } from '@mui/material';
import OpenInNewWindowIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";
import { postsData } from './postsData';

const PostsSection = () => {
    const navigate = useNavigate();
    const handlePostClick = (post: { id: string }) => {
        navigate("/post/" + post.id, { state: { post } });
    };
    return (
        <Grid size={12}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h5">New Posts</Typography>
                <ListItem>
                    <ListItemText primary="All posts" />
                    <ListItemIcon>
                        <OpenInNewWindowIcon />
                    </ListItemIcon>
                </ListItem>
                {/* <IconButton>
                </IconButton> */}
            </Toolbar>
            <List>
                {postsData.map((listItem, index) => (
                    <ListItem key={index} component={ListItemButton} onClick={() => handlePostClick({ id: index.toString(), ...listItem })}>
                        <ListItemText primary={listItem.title} secondary={listItem.subtitle} />
                        <ListItemAvatar>{listItem.publishedDate}</ListItemAvatar>
                    </ListItem>
                ))}
            </List>
        </Grid>
    )
}

export default PostsSection