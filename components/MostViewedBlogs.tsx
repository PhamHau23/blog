"use client"

import { Box, Typography, Stack, Card, CardContent, CardMedia, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface Blog {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    thumbnail: string;
    author: {
        name: string;
    };
    metadata: {
        views: number;
    };
}

interface MostViewedBlogsProps {
    blogs: Blog[];
}

export default function MostViewedBlogs({ blogs }: MostViewedBlogsProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    // Internal formatting functions
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(date);
    };

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('vi-VN').format(num);
    };
    
    return (
        <Box sx={{ mb: 4 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                <TrendingUpIcon color="primary" />
                <Typography variant="h5" component="h2" sx={{ 
                    fontWeight: 'bold',
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }
                }}>
                    Bài viết được xem nhiều nhất
                </Typography>
            </Stack>
            <Stack spacing={2}>
                {blogs.map((blog) => (
                    <Link 
                        key={blog.id} 
                        href={`/blog/${blog.id}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <Card 
                            sx={{ 
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'translateX(8px)',
                                    boxShadow: 2
                                }
                            }}
                        >
                            <CardContent sx={{ padding: { xs: '12px', sm: '16px' } }}>
                                <Stack 
                                    direction={{ xs: 'column', sm: 'row' }} 
                                    spacing={2}
                                    alignItems={{ xs: 'center', sm: 'flex-start' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{ 
                                            width: { xs: '100%', sm: 200 },
                                            height: { xs: 200, sm: 150 },
                                            borderRadius: '4px'
                                        }}
                                        image={blog.thumbnail}
                                        alt={blog.title}
                                    />
                                    <Box sx={{ flex: 1, width: '100%' }}>
                                        <Typography 
                                            variant="h6" 
                                            component="h3" 
                                            gutterBottom
                                            sx={{
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                                                mt: { xs: 1, sm: 0 }
                                            }}
                                        >
                                            {blog.title}
                                        </Typography>
                                        <Stack 
                                            direction={{ xs: 'column', sm: 'row' }} 
                                            spacing={{ xs: 0.5, sm: 2 }} 
                                            alignItems={{ xs: 'flex-start', sm: 'center' }}
                                            sx={{ mb: 1 }}
                                        >
                                            <Typography variant="body2" color="text.secondary">
                                                {blog.author.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {formatDate(blog.createdAt)}
                                            </Typography>
                                            <Typography variant="body2" color="primary" sx={{ 
                                                fontWeight: 'medium',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                {formatNumber(blog.metadata.views)} lượt xem
                                            </Typography>
                                        </Stack>
                                        {!isMobile && (
                                            <Typography 
                                                variant="body2" 
                                                color="text.secondary"
                                                sx={{
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                }}
                                            >
                                                {blog.content}
                                            </Typography>
                                        )}
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </Stack>
        </Box>
    );
} 