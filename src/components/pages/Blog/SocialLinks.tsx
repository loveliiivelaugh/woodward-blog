import { Divider, Grid2 as Grid } from '@mui/material';
import { List, ListItem } from '@mui/material';

const SocialLinks = () => {
    return (
        <Grid size={12}>
            <List>
                {["Medium", "Substack", "Twitter/X"].map((link, index) => <ListItem key={index}>{link}</ListItem>)}
            </List>
            <Divider />
        </Grid>
    );
};

export default SocialLinks;