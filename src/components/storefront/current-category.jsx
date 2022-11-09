import { connect } from 'react-redux';
import { Typography } from "@mui/material";


function CurrentCategory(props) {
  const activeCategory = props.categories.categories.find(category => {
    return category.normalized === props.categories.active;
  })

  return (
    <>
      <Typography variant="h2">{activeCategory.display}</Typography>
      <Typography variant="h5">{activeCategory.description}</Typography>
      </>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories
});

export default connect(mapStateToProps)(CurrentCategory);