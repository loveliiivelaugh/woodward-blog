import { Card, Grid2 as Grid, Typography } from '@mui/material';
import FormContainer from "@custom/forms/FormContainer";

const NewsletterSection = () => {
    return (
        <Grid size={12}>
            <Card sx={{ p: 2 }} elevation={0}>
                <Typography variant="h5">Newsletter</Typography>
                <FormContainer
                    schema={{
                        table: "newsletter",
                        columns: [
                            {
                                name: 'email',
                                dataType: "text"
                            }
                        ]
                    }}
                />
                <Typography variant="body1">
                    Love design, tech, and random thoughts? Subscribe to my newsletter — it’s like a good chat, in your inbox!
                </Typography>
            </Card>
        </Grid>
    )
}

export default NewsletterSection