import { Card, CardContent, CardMedia, Box, Typography, Stack, Divider, Avatar } from '@mui/material';
import Link from 'next/link';
import { formatDate } from '@/utils/date';

interface Blog {
    id: string;
    title: string;
    createdAt: string;
    thumbnail: string;
    author: {
        name: string;
        avatar: string;
    };
}

interface Category {
    id: string;
    name: string;
    slug: string;
    count: number;
}

interface SidebarProps {
    latestBlogs: Blog[];
    featuredCategories: Category[];
}

export default function Sidebar({ latestBlogs, featuredCategories }: SidebarProps) {
    return (
        <>
            {/* Author Info */}
            <Card sx={{ mb: 4 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar
                        src="/author-avatar.jpg"
                        alt="Author"
                        sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                    />
                    <Typography variant="h6" gutterBottom>
                        Admin
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Chào mừng đến với blog của tôi. Tôi là một người đam mê viết lách và chia sẻ kiến thức.
                    </Typography>
                </CardContent>
            </Card>

            {/* Categories */}
            <Card sx={{ mb: 4 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Danh mục
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Stack spacing={1}>
                        {featuredCategories.map((category) => (
                            <Box
                                key={category.id}
                                component={Link}
                                href={`/category/${category.slug}`}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    '&:hover': {
                                        color: 'primary.main'
                                    }
                                }}
                            >
                                <Typography variant="body2">{category.name}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {category.count}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Bài viết gần đây
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Stack spacing={2}>
                        {latestBlogs.slice(0, 3).map((blog) => (
                            <Box
                                key={blog.id}
                                component={Link}
                                href={`/blog/${blog.id}`}
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    '&:hover': {
                                        color: 'primary.main'
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{ width: 80, height: 60, objectFit: 'cover' }}
                                    image={blog.thumbnail}
                                    alt={blog.title}
                                />
                                <Box>
                                    <Typography variant="subtitle2" noWrap>
                                        {blog.title}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {formatDate(blog.createdAt)}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
} 