"use client"

import { SearchIcon } from "@/icons"
import MenuMobileBtn from "./MenuMobileBtn"
import Link from "next/link"
import { Box, Container, InputBase, IconButton, useMediaQuery, useTheme } from "@mui/material"

const navItems = ['Home', 'Categories']

export default function Header(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    return(
        <Box component="header" sx={{ 
            width: '100%', 
            padding: '10px 0',
        }}>
            <Container maxWidth="lg">
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Link href="/" className="text-4xl font-bold">BLOG</Link>
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            marginTop: 2,
                            marginBottom: 2
                        }}>
                            <InputBase 
                                placeholder="Tìm kiếm..." 
                                sx={{
                                    border: '1px solid #9e9e9e',
                                    borderRadius: '8px',
                                    padding: '4px 8px',
                                    marginRight: 1,
                                    width: { xs: '150px', sm: '200px', md: '250px' }
                                }}
                            />
                            <IconButton sx={{ 
                                backgroundColor: 'black',
                                borderRadius: '50%',
                                width: 40,
                                height: 40,
                                '&:hover': {
                                    backgroundColor: '#333'
                                }
                            }}>
                                <SearchIcon className="w-5 h-5" fill="white"/>
                            </IconButton>
                        </Box>
                    </Box>

                    {isMobile ? (
                        <MenuMobileBtn />
                    ) : (
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            gap: 3
                        }}>
                            {navItems.map((item, index) => (
                                <Link 
                                    key={index} 
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="text-lg font-medium hover:text-green-600 transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    )
}