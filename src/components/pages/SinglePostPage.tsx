import React from "react";
import { useLocation, useNavigate } from 'react-router';
import {
    Box,
    Typography,
    Button,
    Divider,
    Chip,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import coverImage from "@assets/cover.png";
import MarkdownWrapper from "@custom/wrappers/MarkdownWrapper/MarkdownWrapper";

type Post = {
    title: string;
    subtitle: string;
    publishedDate: string;
    topic: string;
    coverImageUrl: string;
    content: string;
};

type SinglePostPageProps = {
    post?: Post;
    onBack?: () => void;
};

const SinglePostPage: React.FC<SinglePostPageProps> = ({ post, onBack }) => {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    console.log("SINGLEPAGEPOST: ", location)
    if (!post) post = location.state.post as Post;

    fetch('./cicd_blog.md').then(res => res.json()).then(data => console.log("MARKDOWN? ", data))

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            sx={{
                maxWidth: 800,
                mx: "auto",
                px: 2,
                py: { xs: 4, md: 6 },
            }}
        >
            <Button
                onClick={onBack ? onBack : () => navigate('/posts')}
                sx={{ mb: 3, color: theme.palette.text.secondary }}
                startIcon={<span>←</span>}
            >
                All posts
            </Button>

            <Typography variant="h4" fontWeight={600} gutterBottom>
                {post.title}
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {post.subtitle}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Box display="flex" justifyContent="space-between" flexWrap="wrap" mb={4}>
                <Box>
                    <Typography variant="body2" color="text.secondary">
                        Published
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                        {post.publishedDate}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2" color="text.secondary">
                        Topic
                    </Typography>
                    <Chip
                        label={post.topic}
                        size="small"
                        sx={{
                            fontWeight: 500,
                            mt: 0.5,
                        }}
                    />
                </Box>
            </Box>

            <Box
                component={motion.img}
                src={coverImage || post.coverImageUrl}
                alt="Post cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    mb: 4,
                    boxShadow: 3,
                }}
            />
                <MarkdownWrapper>
                    {post.content}
                </MarkdownWrapper>
        </Box>
    );
};

export default SinglePostPage;
