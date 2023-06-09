import React from "react";
import {AppBar, Toolbar, IconButton,Badge,MenuItem,Menu ,Typography, Button} from '@material-ui/core';
import { ShoppingCart } from "@material-ui/icons";
import {Link, useLocation } from 'react-router-dom';




import logo from '../../assets/cosmetics.png';
import useStyles from './styles';

const Navbar = ({totalItems, login}) => {
    const classes = useStyles();
    const location = useLocation(); 


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography  component={Link} to="/giris"  variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="MidShines Cosmetics" height="70px" className={classes.image} />
                        Midshines Cosmetics 
                    </Typography>
                    <div className={classes.grow} />

                    {location.pathname=== '/giris' &&  (
                    <div className={classes.button} >

                        <IconButton  component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                           <Badge badgeContent ={totalItems} color="secondary" >
                               <ShoppingCart/>
                           </Badge>
                        </IconButton>

                        
                        <IconButton component={Link} to="/" aria-label="Show cart items" color="inherit">
                           Çıkış Yap
                        </IconButton>
                        
                    </div> ) }

                        {location.pathname === '/' && (
                                                    
                        <div className = {classes.button} >                            
                        <IconButton component={Link} to="/login" aria-label="Show cart items" color="inherit">
                           Giriş Yap
                        </IconButton> 
                        


                        <IconButton component={Link} to="/signup" aria-label="Show cart items" color="inherit">
                           Kayıt Ol
                        </IconButton> 
                        </div>

                        ) }
                        


                    
                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
