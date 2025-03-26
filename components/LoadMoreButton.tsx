import { Box, Button } from '@mui/material';
import Link from 'next/link';

export default function LoadMoreButton() {
    return (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Link href="/categories" style={{ textDecoration: 'none' }}>
                <Button 
                    variant="outlined" 
                    size="large"
                    sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white'
                        }
                    }}
                >
                    Xem thêm bài viết
                </Button>
            </Link>
        </Box>
    );
} 