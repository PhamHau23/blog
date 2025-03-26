import { Box, Typography, Stack, Card, CardContent, CardMedia } from '@mui/material';
import Link from 'next/link';

interface Blog {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    thumbnail: string;
    author: {
        name: string;
    };
}

interface LatestBlogsProps {
    blogs: Blog[];
    formatDate: (date: string) => string;
}

export default function LatestBlogs({ blogs, formatDate }: LatestBlogsProps) {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                Bài viết mới nhất
            </Typography>

            <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100%',
                    gap: { xs: 3, sm: 0 }
                }}
            >
                {blogs.map((blog) => (
                    <Box 
                        key={blog.id}
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '50%',
                                md: 'calc(33.33%)'
                            },
                            p: { sm: 1 }
                        }}
                    >
                        <Link href={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}>
                            <Card 
                                sx={{ 
                                    height: '100%',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: 3
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={blog.thumbnail}
                                    alt={blog.title}
                                />
                                <CardContent>
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
                                        }}
                                    >
                                        {blog.title}
                                    </Typography>
                                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                                        <Typography variant="body2" color="text.secondary">
                                            {blog.author.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {formatDate(blog.createdAt)}
                                        </Typography>
                                    </Stack>
                                    <Typography 
                                        variant="body2" 
                                        color="text.secondary"
                                        sx={{
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {blog.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
} 