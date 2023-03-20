import * as React from 'react';
import {useState} from 'react';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {GoodsType} from "../../App";
import {deleteFromCartAC} from "../../state/ordersReducer";
import {Cart} from "../../features/Cart/Cart";
import style from "../header/Header.module.css";
import {Fade} from "@mui/material";
import Paper from "@mui/material/Paper/Paper";
import {AccountCircle} from '@mui/icons-material';
import {useAppDispatch, useAppSelector} from "../../state/hooks";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Header() {

    const dispatch = useAppDispatch()
    const orders = useAppSelector<GoodsType[]>(state => state.orders)
    let [cartOpen, setCartOpen] = useState<boolean>(false)



    const deleteFromCartHandler = (id: number) => {
        dispatch(deleteFromCartAC({id}))
    }

    const showOrders = () => {
        let totalPrice = 0
        orders.forEach(el => totalPrice += Number.parseFloat(el.price))
        return <div>
            {orders.map(el => {
                return (
                    <Cart key={el.id} item={el} deleteFromCartHandler={deleteFromCartHandler}/>
                )
            })}
            <p className={style.totalPrice}>Total: ${new Intl.NumberFormat().format(totalPrice)}</p>
        </div>
    }

    const showNothing = () => {
        return <div>
            <b>Cart is empty</b>
        </div>
    }


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box >
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit"
                                    onClick={() => setCartOpen(cartOpen = !cartOpen)}>
                            <Badge badgeContent={orders.length} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>

                        <Fade in={cartOpen}>
                            <Paper style={{ position: 'absolute',
                                top: '50px',
                                right: '25px',
                                width: '450px',
                                minHeight: '100px',
                                padding: '20px',
                                zIndex: '1000'
                            }}>
                                {orders.length > 0 ? showOrders() : showNothing()}
                            </Paper>

                        </Fade>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}