import { AppBar, Toolbar, Button, Stack, Typography } from '@mui/material';

function Header() {
  return (
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
          <Button color="inherit" variant="contained">
            Cart (0)
          </Button>
        </Toolbar>
      </Stack>
    </AppBar>
  );
}

export default Header;