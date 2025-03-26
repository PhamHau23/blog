"use client"

import { MenuIcon } from "@/icons";
import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import MenuMobile from "./MenuMobile";

export default function MenuMobileBtn(){
    const [open, setOpen] = useState<boolean>(false)

    const toggleDrawer = (newOpen: boolean) => {
        setOpen(newOpen)
    }

    return(
        <div>
            <Button onClick={() => toggleDrawer(true)} sx={{padding: 'unset'}}>
                <MenuIcon fill="black"
                    className="w-8 h-8"
                />
            </Button>
            <Drawer open={open} anchor="right" onClose={() => toggleDrawer(false)}>
                <MenuMobile setOpen={setOpen}/>
            </Drawer>
        </div>
    )
}