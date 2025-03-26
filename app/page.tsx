import { Box, Container } from '@mui/material';
import getApi from '@/services/getApi';
import FeaturedSlider from '@/components/FeaturedSlider';
import LatestPosts from '@/components/LatestPosts';
import Sidebar from '@/components/Sidebar';

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

interface Category {
    id: string;
    name: string;
    slug: string;
    count: number;
}

export default async function Home() {
    // Lấy dữ liệu từ tất cả các danh mục
    const categories = ['politics', 'economics', 'health', 'sports', 'technology', 'entertainment'];
    const allBlogs: Blog[] = [];
    
    for (const category of categories) {
        const data = await getApi(`categories?category=${category}`);
        if (data.blogs) {
            allBlogs.push(...data.blogs);
        }
    }

    // Sắp xếp theo thời gian mới nhất
    const latestBlogs = allBlogs
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 6);

    // Sắp xếp theo lượt xem nhiều nhất
    const mostViewedBlogs = allBlogs
        .sort((a, b) => b.metadata.views - a.metadata.views)
        .slice(0, 3);

    // Danh mục nổi bật
    const featuredCategories: Category[] = [
        { id: 'politics', name: 'Chính trị', slug: 'politics', count: 12 },
        { id: 'economics', name: 'Kinh tế', slug: 'economics', count: 15 },
        { id: 'technology', name: 'Công nghệ', slug: 'technology', count: 18 },
        { id: 'health', name: 'Sức khỏe', slug: 'health', count: 10 },
        { id: 'sports', name: 'Thể thao', slug: 'sports', count: 8 },
        { id: 'entertainment', name: 'Giải trí', slug: 'entertainment', count: 14 }
    ];

    return (
        <Container maxWidth="lg">
            {/* Main Content Layout */}
            <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4
            }}>
                {/* Main Content Area */}
                <Box sx={{ 
                    flex: { md: '0 0 66.666667%' },
                    maxWidth: { md: '66.666667%' }
                }}>
                    {/* Featured Posts Slider */}
                    <FeaturedSlider blogs={mostViewedBlogs} />

                    {/* Latest Posts */}
                    <LatestPosts blogs={latestBlogs.slice(1)} />
                </Box>

                {/* Sidebar */}
                <Box sx={{ 
                    flex: { md: '0 0 33.333333%' },
                    maxWidth: { md: '33.333333%' }
                }}>
                    <Sidebar 
                        latestBlogs={latestBlogs}
                        featuredCategories={featuredCategories}
                    />
                </Box>
            </Box>
        </Container>
    );
}
