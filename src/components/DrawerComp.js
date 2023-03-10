import React from 'react'
import { useState } from 'react'
import { Drawer, List, IconButton, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const pages = ["product", "services", "about", "contact", "login", "register"]
    return (
        <>

            <Drawer open={openDrawer} onClose={() => {
                setOpenDrawer(false)
            }}>
                <List>
                    {
                        pages.map((page, index) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <ListItemText>
                                    <Link to={`/${page}`} style={{textDecoration:'none',color:"black"}}>{page} </Link>
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>

                        )
                        )
                    }


                </List>
            </Drawer>
            <IconButton sx={{ color: "black", marginLeft: "auto" }} onClick={() => { setOpenDrawer(!openDrawer) }}>
                <MenuIcon />
            </IconButton>


        </>






    )
}

export default DrawerComp