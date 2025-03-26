"use client"

import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';

const categories = [
    { id: 'politics', name: 'Chính trị', color: '#4CAF50' },
    { id: 'economics', name: 'Kinh tế', color: '#2196F3' },
    { id: 'health', name: 'Sức khỏe', color: '#F44336' },
    { id: 'sports', name: 'Thể thao', color: '#FF9800' },
    { id: 'technology', name: 'Công nghệ', color: '#9C27B0' },
    { id: 'entertainment', name: 'Giải trí', color: '#E91E63' }
];

export default function Categories() {
    const router = useRouter();

    const handleCategoryClick = (categoryId: string) => {
        router.push(`/categories/${categoryId}`);
    };

    return (
        <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 'lg', mx: 'auto' }}>
            <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 'bold' }}>
                Danh mục
            </Typography>
            
            <Grid container spacing={2}>
                {categories.map((category) => (
                    <Grid item xs={6} sm={4} md={3} key={category.id}>
                        <Card 
                            onClick={() => handleCategoryClick(category.id)}
                            sx={{
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                },
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderLeft: `4px solid ${category.color}`
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    {category.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
} 