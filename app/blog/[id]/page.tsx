import { Box, Typography, Paper, Button, Stack, Divider, Chip, Avatar } from '@mui/material';
import getApi from '@/services/getApi';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import { notFound } from 'next/navigation';

interface BlogDetail {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    category: string;
    status: 'draft' | 'published' | 'archived';
    author: {
        id: string;
        name: string;
        avatar: string;
        role: string;
    };
    metadata: {
        readTime: number;
        views: number;
        likes: number;
        tags: string[];
        comments: number;
        shares: number;
    };
    thumbnail: string;
    summary: string;
    lastModified: string;
}

interface PageProps {
    params: {
        id: string;
    };
}

export default async function BlogDetail({ params }: PageProps) {
    const data = await getApi(`blog/${params.id}`);
    
    if(!data){
        return notFound()
    }
    
    const blog: BlogDetail = data.blog || {};

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

    return (
        <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 'lg', mx: 'auto' }}>
            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                <Link href={`/categories/${blog.category}`} passHref style={{ textDecoration: 'none' }}>
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
                        Quay lại danh mục
                    </Button>
                </Link>
            </Stack>

            <Paper elevation={2} sx={{ p: { xs: 2, md: 4 } }}>
                {blog.thumbnail && (
                    <Box sx={{ position: 'relative', height: 400, mb: 4 }}>
                        <Image
                            src={blog.thumbnail}
                            alt={blog.title}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </Box>
                )}

                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {blog.title}
                </Typography>

                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                    <Avatar src={blog.author?.avatar} alt={blog.author?.name} />
                    <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {blog.author?.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {blog.author?.role}
                        </Typography>
                    </Box>
                </Stack>

                <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={2} 
                    sx={{ mb: 3 }}
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                >
                    <Stack direction="row" spacing={2} alignItems="center">
                        <AccessTimeIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            {blog.metadata?.readTime} phút đọc
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <VisibilityIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            {blog.metadata?.views.toLocaleString()} lượt xem
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <FavoriteIcon fontSize="small" color="error" />
                        <Typography variant="body2" color="text.secondary">
                            {blog.metadata?.likes.toLocaleString()}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <CommentIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            {blog.metadata?.comments.toLocaleString()}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <ShareIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            {blog.metadata?.shares.toLocaleString()}
                        </Typography>
                    </Stack>
                </Stack>

                <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                    {blog.metadata?.tags.map((tag) => (
                        <Chip 
                            key={tag} 
                            label={tag} 
                            size="small"
                            sx={{ 
                                bgcolor: 'primary.main', 
                                color: 'white',
                                '&:hover': { bgcolor: 'primary.dark' }
                            }}
                        />
                    ))}
                </Stack>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Đăng ngày: {formatDate(blog.createdAt)}
                    {blog.lastModified !== blog.createdAt && (
                        <> | Cập nhật: {formatDate(blog.lastModified)}</>
                    )}
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography 
                    variant="body1" 
                    sx={{ 
                        lineHeight: 1.8,
                        fontSize: '1.1rem',
                        '& p': { mb: 2 },
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    {blog.content}
                </Typography>
            </Paper>
        </Box>
    );
}