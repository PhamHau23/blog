import Skeleton from '@mui/material/Skeleton';
import { Box, Container } from '@mui/material';

export default function Loading() {
    return (
        <Container maxWidth="lg">
            {/* Header Skeleton */}
            <Box sx={{ mb: 4 }}>
                <Skeleton variant="text" width={200} height={40} sx={{ mb: 2 }} />
                <Skeleton variant="text" width={300} height={24} />
            </Box>

            {/* Main Content Layout */}
            <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4
            }}>
                {/* Main Content Area */}
                <Box sx={{ 
                    flex: { md: '0 0 66.666667%' },
                    maxWidth: { md: '66.666667%' }
                }}>
                    {/* Featured Post Skeleton */}
                    <Box sx={{ mb: 4 }}>
                        <Skeleton variant="rectangular" width="100%" height={300} sx={{ mb: 2 }} />
                        <Skeleton variant="text" width="80%" height={32} sx={{ mb: 1 }} />
                        <Skeleton variant="text" width="60%" height={24} sx={{ mb: 2 }} />
                        <Skeleton variant="text" width="100%" height={24} sx={{ mb: 1 }} />
                        <Skeleton variant="text" width="100%" height={24} sx={{ mb: 1 }} />
                        <Skeleton variant="text" width="80%" height={24} />
                    </Box>

                    {/* Post List Skeletons */}
                    {[1, 2, 3].map((item) => (
                        <Box key={item} sx={{ mb: 3 }}>
                            <Skeleton variant="rectangular" width="100%" height={200} sx={{ mb: 2 }} />
                            <Skeleton variant="text" width="70%" height={28} sx={{ mb: 1 }} />
                            <Skeleton variant="text" width="50%" height={24} />
                        </Box>
                    ))}
                </Box>

                {/* Sidebar */}
                <Box sx={{ 
                    flex: { md: '0 0 33.333333%' },
                    maxWidth: { md: '33.333333%' }
                }}>
                    {/* Author Info Skeleton */}
                    <Box sx={{ mb: 4 }}>
                        <Skeleton variant="circular" width={100} height={100} sx={{ mb: 2 }} />
                        <Skeleton variant="text" width="80%" height={24} sx={{ mb: 1 }} />
                        <Skeleton variant="text" width="60%" height={24} />
                    </Box>

                    {/* Categories Skeleton */}
                    <Box sx={{ mb: 4 }}>
                        <Skeleton variant="text" width="60%" height={32} sx={{ mb: 2 }} />
                        {[1, 2, 3, 4].map((item) => (
                            <Skeleton key={item} variant="text" width="80%" height={24} sx={{ mb: 1 }} />
                        ))}
                    </Box>

                    {/* Recent Posts Skeleton */}
                    <Box>
                        <Skeleton variant="text" width="60%" height={32} sx={{ mb: 2 }} />
                        {[1, 2, 3].map((item) => (
                            <Skeleton key={item} variant="text" width="90%" height={24} sx={{ mb: 1 }} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}