import { Grid2 as Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import NewsletterSection from './Blog/NewsletterSection';
import PostsSection from './Blog/PostsSection';
import PostSearch from './Blog/PostSearch';

const topics = ["Artificial Intelligence", "Design", "Engineering", "Thoughts"];

const PostsPage = () => {
    return (
        <>

            <Grid size={12}>
                <PostSearch />
            </Grid>
            <Grid size={12}>
                <Typography variant="h5">
                    Topics
                </Typography>
                <List sx={{ pl: 4, display: "flex" }}>
                    {topics.map((topic, index) => (
                        <ListItem>
                            <ListItemIcon>{"->"}</ListItemIcon>
                            <ListItemText key={index} secondary={topic} />
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <PostsSection />
            <NewsletterSection />
        </>
    )
};

export default PostsPage;