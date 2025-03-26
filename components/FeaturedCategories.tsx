import { Box, Typography, Stack, Chip } from '@mui/material';
import Link from 'next/link';
import CategoryIcon from '@mui/icons-material/Category';

interface Category {
    id: string;
    name: string;
    slug: string;
    count: number;
}

interface FeaturedCategoriesProps {
    categories: Category[];
}

export default function FeaturedCategories({ categories }: FeaturedCategoriesProps) {
    return (
        <Box sx={{ mb: 4 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                <CategoryIcon color="primary" />
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    Danh mục nổi bật
                </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {categories.map((category) => (
                    <Link 
                        key={category.id} 
                        href={`/categories/${category.slug}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <Chip
                            label={`${category.name} (${category.count})`}
                            sx={{
                                '&:hover': {
                                    bgcolor: 'primary.main',
                                    color: 'white'
                                }
                            }}
                        />
                    </Link>
                ))}
            </Stack>
        </Box>
    );
} 