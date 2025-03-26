import { Box, Card, CardContent, Grid, Skeleton } from '@mui/material';

export default function CategoryLoading() {
    return (
        <Box sx={{ p: 2 }}>
            <Skeleton variant="text" width="300px" height={48} sx={{ mb: 3 }} />
            
            <Grid container spacing={2}>
                {[1, 2, 3].map((item) => (
                    <Grid item xs={12} key={item}>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Skeleton variant="text" width="60%" height={32} sx={{ mb: 1 }} />
                                <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
                                <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
                                <Skeleton variant="text" width="30%" height={16} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
} 