import { Box, Card, CardContent, CardMedia, Stack, Chip, Typography, Avatar } from '@mui/material';
import Link from 'next/link';
import { formatDate } from '@/utils/date';

interface Blog {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    thumbnail: string;
    category: string;
    author: {
        name: string;
        avatar: string;
    };
    metadata: {
        views: number;
    };
}

interface LatestPostsProps {
    blogs: Blog[];
}

export default function LatestPosts({ blogs }: LatestPostsProps) {
    return (
        <>
            {blogs.map((blog) => (
                <Link 
                    key={blog.id} 
                    href={`/blog/${blog.id}`}
                    style={{ textDecoration: 'none' }}
                >
                    <Card sx={{ 
                        mb: 3,
                        '&:hover': {
                            boxShadow: 6,
                            transform: 'translateY(-4px)',
                            transition: 'all 0.3s ease-in-out'
                        }
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 200, height: 150, objectFit: 'cover' }}
                                    image={blog.thumbnail}
                                    alt={blog.title}
                                />
                                <Box sx={{ flex: 1 }}>
                                    <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                                        <Chip label={blog.category} size="small" />
                                        <Chip label={`${blog.metadata.views} lượt xem`} size="small" variant="outlined" />
                                    </Stack>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                        {blog.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {blog.content.substring(0, 150)}...
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Avatar src={blog.author.avatar} alt={blog.author.name} sx={{ width: 24, height: 24 }} />
                                        <Typography variant="caption" color="text.secondary">
                                            {blog.author.name} • {formatDate(blog.createdAt)}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </>
    );
} 