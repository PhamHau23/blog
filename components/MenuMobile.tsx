import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { CloseIcon } from '@/icons';

const arr = [
    'Home','Categories','Chính trị','Kinh tế','Sức khỏe','Thể thao'
]

interface Props{
    setOpen: (open: boolean) => void
}

export default function MenuMobile({setOpen}: Props){
    return (
        <List sx={{ width: 200 }}>
            <ListItem onClick={() => setOpen(false)}
                sx={{justifyContent: 'flex-end'}}
                className='cursor-pointer pr-3'
            >
                <CloseIcon fill="black" className='w-6 h-6 hover:fill-green-600'/>
            </ListItem>
            {arr.map((item, index) => (
                <ListItem key={index} sx={{ padding: 'unset' }} className='hover:text-green-600'>
                    <ListItemButton>
                        <ListItemText primary={item} 
                            slotProps={{ 
                                primary: { 
                                    className: 'text-lg' 
                                } 
                            }}/>
                    </ListItemButton>
                </ListItem>))
            }
        </List>
    )
}