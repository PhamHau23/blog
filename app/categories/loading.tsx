import { Box, Grid, Skeleton } from '@mui/material';

export default function CategoriesLoading() {
    return (
        <Box sx={{ p: 2 }}>
            <Skeleton variant="text" width="200px" height={48} sx={{ mb: 3 }} />
            
            <Grid container spacing={2}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Grid item xs={6} sm={4} md={3} key={item}>
                        <Skeleton 
                            variant="rectangular" 
                            height={100}
                            sx={{
                                borderRadius: 1
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
} 