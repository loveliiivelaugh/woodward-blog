import { Divider, Container, Grid2 as Grid, Typography } from '@mui/material';
import { ExperienceSection } from '@custom/AccordianListItem/AccordianListItem';
import PostsSection from '@components/pages/Blog/PostsSection';
import NewsletterSection from '@components/pages/Blog/NewsletterSection';
import SocialLinks from '@components/pages/Blog/SocialLinks';
// import headshot from "@assets/headshot.png";

export default function Dashboard(props: any) {
    return (
        <Grid container spacing={2}>
            <Grid size={12}>
                <Typography variant="h4">
                    Hello 👋
                </Typography>
                <Typography>
                    Hi, I’m Michael, a software engineer by day and a curious writer by night. I work in tech, crafting intuitive user experiences. Here, I share my thoughts on design, engineering, AI, and the random sparks of inspiration that keep me going.
                </Typography>
            </Grid>

            <SocialLinks />

            <Grid size={12}>
                <Typography variant="h5">Featured Posts</Typography>
                <ExperienceSection />
            </Grid>

            <PostsSection />

            <NewsletterSection />

            <Grid size={12} mt={2}>
                <Typography variant="h5">Beyond the Blog</Typography>
                <Typography variant="body1">
                    Looking for more? Explore my portfolio, past collaborations, and side projects. Whether it’s design, tech, or creative experiments, there’s always something exciting to share.
                </Typography>
            </Grid>

            <Divider />
        </Grid>
    )
};

export const Footer = () => (
    <Grid size={12} sx={{ bgcolor: "transparent", backdropFilter: "blur(8px)" }} mt={2} mb={2}>
        <Container maxWidth="sm" sx={{ justifyContent: "space-between", display: "flex" }} >
            <Typography variant="body1">From Chicago with ❤️</Typography>
            <Typography variant="body1">Ⓒ 2025 Michael Woodward</Typography>
        </Container>
    </Grid>
);