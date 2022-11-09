import { Typography, Box, Tab, Container } from '@mui/material';
import { TabContext, TabList } from '@mui/lab'
import store from './../../store';
import { connect } from 'react-redux';

function Categories(props) {

  const handleChange = (e, newValue) => {
    store.dispatch({ type: newValue });
  }

  return (
    <Container>
      <Typography variant="h5">Browse Our Categories</Typography>
      <TabContext value={props.categories.active}>
        <Box>
          <TabList onChange={handleChange}>
            {
              props.categories.categories.map(category => {
                return <Tab label={category.display} value={category.normalized} key={category.normalized} />
              })
            }
          </TabList>
        </Box>
      </TabContext>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories
});

export default connect(mapStateToProps)(Categories);