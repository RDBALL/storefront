import { AppBar, Toolbar, Button, Stack, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar variant="dense">
        <Stack direction="row" spacing={2}>
          <Typography variant="h6" color="inherit" component="div">
            Our Store
          </Typography>
          <Button color="inherit" variant="contained">
            Cart (0)
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;