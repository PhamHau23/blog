import Image from 'next/image';
import { Container, Box } from '@mui/material';

const banner: string = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1738745992/img/hrf9lkoe6ujwd5nyexev.jpg'

export default function Banner() {
    return (
        <Box sx={{ 
            width: '100%', 
            padding: { xs: '10px 0', md: '20px 0' }
        }}>
            <Container maxWidth="lg">
                <Box 
                    sx={{ 
                        position: 'relative',
                        width: '100%',
                        height: { xs: '200px', sm: '300px', md: '400px', lg: '500px' },
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                >
                    <Image 
                        src={banner} 
                        alt="Banner" 
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </Box>
            </Container>
        </Box>
    );
}