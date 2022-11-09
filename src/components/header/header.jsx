import { AppBar, Toolbar, Stack, Typography } from '@mui/material';
import SimpleCart from '../cart/simplecart';
import './style.css'

function Header() {

  return (
    <>
      <AppBar position="static" color="inherit">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" color="inherit" component="div">
            OUR STORE
          </Typography>
          <Toolbar variant="dense">
          </Toolbar>
        </Stack>
      </AppBar>
      <div id="cartDisplay">
        <SimpleCart />
      </div>
    </>
  );
}

export default Header;