'use client';

import { Box, CardMedia, Avatar, Stack, Chip, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Link from 'next/link';
import { formatDate } from '@/utils/date';
import { useEffect, useState } from 'react';

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

interface FeaturedSliderProps {
    blogs: Blog[];
}

export default function FeaturedSlider({ blogs }: FeaturedSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
        }, 10000);

        return () => clearInterval(timer);
    }, [blogs.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    };

    return (
        <Box sx={{ mb: 4, position: 'relative' }}>
            <Box 
                className="slider-container"
                sx={{ 
                    position: 'relative',
                    height: '500px',
                    overflow: 'hidden',
                    borderRadius: 2
                }}
            >
                {blogs.map((blog, index) => (
                    <Box
                        key={blog.id}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: index === currentIndex ? 'block' : 'none'
                        }}
                    >
                        <Link 
                            href={`/blog/${blog.id}`}
                            style={{ 
                                textDecoration: 'none', 
                                height: '100%', 
                                display: 'block',
                                position: 'relative'
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{ 
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                                image={blog.thumbnail}
                                alt={blog.title}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    p: 4,
                                    color: 'white',
                                    zIndex: 2
                                }}
                            >
                                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                                    <Chip 
                                        label={blog.category} 
                                        size="small" 
                                        sx={{ 
                                            bgcolor: 'rgba(255,255,255,0.3)',
                                            color: 'white',
                                            '& .MuiChip-label': { color: 'white' }
                                        }} 
                                    />
                                    <Chip 
                                        label={`${blog.metadata.views} lượt xem`} 
                                        size="small" 
                                        sx={{ 
                                            bgcolor: 'rgba(255,255,255,0.3)',
                                            color: 'white',
                                            '& .MuiChip-label': { color: 'white' }
                                        }} 
                                    />
                                </Stack>
                                <Typography 
                                    variant="h3" 
                                    component="h3" 
                                    gutterBottom
                                    sx={{ 
                                        fontWeight: 'bold',
                                        fontSize: { xs: '2rem', md: '2.5rem' }
                                    }}
                                >
                                    {blog.title}
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    sx={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        opacity: 0.9
                                    }}
                                >
                                    {blog.content.substring(0, 150)}...
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                                    <Avatar 
                                        src={blog.author.avatar} 
                                        alt={blog.author.name} 
                                        sx={{ 
                                            width: 40, 
                                            height: 40,
                                            border: '2px solid white'
                                        }} 
                                    />
                                    <Typography 
                                        variant="subtitle1" 
                                        sx={{ 
                                            fontWeight: 500
                                        }}
                                    >
                                        {blog.author.name} • {formatDate(blog.createdAt)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Box>
                ))}
            </Box>

            {/* Navigation Buttons */}
            <IconButton 
                sx={{ 
                    position: 'absolute', 
                    left: 16, 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    '&:hover': { 
                        bgcolor: 'rgba(255, 255, 255, 0.4)',
                        color: 'white'
                    },
                    zIndex: 3,
                    width: 48,
                    height: 48
                }}
                onClick={handlePrev}
            >
                <ChevronLeft sx={{ fontSize: 32 }} />
            </IconButton>
            <IconButton 
                sx={{ 
                    position: 'absolute', 
                    right: 16, 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    '&:hover': { 
                        bgcolor: 'rgba(255, 255, 255, 0.4)',
                        color: 'white'
                    },
                    zIndex: 3,
                    width: 48,
                    height: 48
                }}
                onClick={handleNext}
            >
                <ChevronRight sx={{ fontSize: 32 }} />
            </IconButton>

            {/* Dots Indicator */}
            <Box 
                sx={{ 
                    position: 'absolute', 
                    bottom: 24, 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1.5,
                    zIndex: 3
                }}
            >
                {blogs.map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            bgcolor: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                            cursor: 'pointer'
                        }}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </Box>
        </Box>
    );
} 