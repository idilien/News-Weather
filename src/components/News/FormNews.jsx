import useClimate from '../../hooks/useClimate';
import ListNews from "../../components/News/ListNews";
import  FormControl  from '@mui/material/FormControl';
import  InputLabel  from '@mui/material/InputLabel';
import  Select  from '@mui/material/Select';
import  MenuItem  from '@mui/material/MenuItem';
import  Grid  from "@mui/material/Grid"

const FormNews = () => {

  const {category, handleChangeCategory} = useClimate()

  
const categories = [
  { value: 'general', label: 'general'},
  { value: 'entertainment', label: 'entertainment'},
  { value: 'technology', label: 'technology'},
  { value: 'science', label: 'science'},
  { value: 'health', label: 'health'},
  { value: 'business', label: 'business'},
  { value: 'sports', label: 'sports'},
]

  return (
       <>
    <Grid 
        container
        justifyContent="center"
    >
      <Grid item xs={10} md={6} lg={4}>
        <form >
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
                  <Select 
                            label ="category"
                            onChange={handleChangeCategory}
                            value={category}
                            >
                      {categories.map(cat => (
                        <MenuItem
                        key={cat.value}
                        value={cat.value}
                        >
                            {cat.label}
                        </MenuItem>
                      ))}
                  </Select>
            </FormControl>
         </form>
          </Grid>
      </Grid>
      </>
  )
}

export default FormNews

  