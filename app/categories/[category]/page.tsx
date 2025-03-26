import { Box, Card, CardContent, Typography, Button, Stack } from '@mui/material';
import getApi from '@/services/getApi';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Blog {
    id: string;
    title: string;
    content: string;
    createdAt: string;
}

interface PageProps {
    params: {
        category: string;
    };
}

export default async function CategoryPage({ params }: PageProps) {
    const data = await getApi(`categories?category=${params.category}`);
    const blogs: Blog[] = data.blogs || [];

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    const getCategoryName = (category: string) => {
        const categoryMap: { [key: string]: string } = {
            'politics': 'Chính trị',
            'economics': 'Kinh tế',
            'health': 'Sức khỏe',
            'sports': 'Thể thao',
            'technology': 'Công nghệ',
            'entertainment': 'Giải trí'
        };
        return categoryMap[category] || category;
    };

    return (
        <Box sx={{ p: 2 }}>
            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Link href="/categories" passHref style={{ textDecoration: 'none' }}>
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIcon />}
                        sx={{
                            borderColor: 'gray',
                            color: 'gray',
                            '&:hover': {
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                bgcolor: 'transparent'
                            }
                        }}
                    >
                        Quay lại
                    </Button>
                </Link>
            </Stack>

            <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 'bold' }}>
                {getCategoryName(params.category)}
            </Typography>
            
            <Stack spacing={2}>
                {blogs.map((blog) => (
                    <Link 
                        href={`/blog/${blog.id}`} 
                        key={blog.id}
                        style={{ textDecoration: 'none' }}
                    >
                        <Card 
                            sx={{
                                mb: 2,
                                transition: 'transform 0.2s',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 3
                                }
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    {blog.title}
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    color="text.secondary" 
                                    paragraph
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
                                <Typography variant="caption" color="text.secondary">
                                    Đăng ngày: {formatDate(blog.createdAt)}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </Stack>

            {blogs.length === 0 && (
                <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
                    Không có bài viết nào trong danh mục này.
                </Typography>
            )}
        </Box>
    );
} 