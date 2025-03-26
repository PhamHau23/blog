import { Box, Paper, Skeleton, Stack } from '@mui/material';

export default function BlogDetailLoading() {
    return (
        <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 'lg', mx: 'auto' }}>
            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                <Skeleton variant="rectangular" width={150} height={36} sx={{ borderRadius: 1 }} />
            </Stack>

            <Paper elevation={2} sx={{ p: { xs: 2, md: 4 } }}>
                <Skeleton variant="text" height={60} sx={{ mb: 2 }} />
                <Skeleton variant="text" width={200} height={24} sx={{ mb: 3 }} />
                
                <Skeleton variant="text" sx={{ mb: 2 }} />
                <Skeleton variant="text" sx={{ mb: 2 }} />
                <Skeleton variant="text" sx={{ mb: 2 }} />
                <Skeleton variant="text" width="80%" sx={{ mb: 2 }} />
            </Paper>
        </Box>
    );
}