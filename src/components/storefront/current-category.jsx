import { useSelector } from 'react-redux';
import { Typography } from "@mui/material";

function CurrentCategory() {
  const categories = useSelector(state => state.categories).categories;
  const active = useSelector(state => state.categories).active;

  const activeCategory = categories.find(category => category.name === active);

  return (
    <>
      <Typography variant="h2">{activeCategory.name}</Typography>
      <Typography variant="h5">{activeCategory.description}</Typography>
      </>
  )
}

export default CurrentCategory;