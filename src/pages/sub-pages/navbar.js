import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, MenuItem, Button, Container, IconButton, Toolbar, Box, AppBar} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const pages = ['Home', 'About', 'Experience', 'Portfolio', 'Contact'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const theme = useTheme();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" className={'material-header'} color={'default'}>
            <Container maxWidth="xl">
                <Toolbar disableGutters variant={'dense'}>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, paddingTop: '1.75vh'}}>
                        <IconButton
                            size="large"
                            aria-label="navigation menu bar"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon color={'info'}/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            MenuListProps={{
                                'aria-labelledby': 'fade-button'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            PaperProps={{
                                style: {
                                    marginTop: '1rem',
                                    overflow: 'hidden',
                                    width: '100vw',
                                }
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'}
                            }}
                        >
                            <Box>
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Link
                                            style={{
                                                color: theme.palette.info.main,
                                                paddingTop: '0.5rem',
                                                paddingBottom: '0.5rem',
                                                textDecoration: 'none'
                                            }}
                                            href={`#${page.toLowerCase()}`} textAlign="center">{page}</Link>
                                    </MenuItem>
                                ))}
                            </Box>
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'space-between'}}>
                        {pages.map((page) => (
                            <Button
                                href={`#${page.toLowerCase()}`}
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: '#3A4249', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
