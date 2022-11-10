import { Typography, Box, Tab, Container } from '@mui/material';
import { TabContext, TabList } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  const handleChange = (e, newValue) => {
    dispatch({type: newValue});
  }

  return (
    <Container>
      <Typography variant="h5">Browse Our Categories</Typography>
      <TabContext value={categories.active}>
        <Box>
          <TabList data-testid="productCategorySelector" onChange={handleChange}>
            {
              categories.categories.map(category => {
                return <Tab label={category.name} value={category.name} key={category._id} />
              })
            }
          </TabList>
        </Box>
      </TabContext>
    </Container>
  )
}

export default Categories;