import useClimate from "../../hooks/useClimate"
import New from "./New";
import  Grid  from "@mui/material/Grid"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const ListNews = () => {

  const {news, totalNews, handleChangePage, page} = useClimate()
  const totalPages = Math.ceil( totalNews /  20)
  
  return (
   <>
            <div className="list-news">
                <h3>Breaking News</h3>
            </div>
            <div className="container-news">
                <Grid 
                        container
                        spacing={2}
                        >
                    {news.map(bn =>(
                      <New
                      key={bn.url}
                      bn={bn}
                      
                      />
                      ))}
                </Grid> 
                <Stack 
                      sx={{
                        marginY:5
                      }}
                      spacing={2}
                      direction={'row'}
                      justifyContent='center'
                      alignItems='center'
                >  
                  <Pagination 
                      count={totalPages} 
                      color="primary"
                      onChange={handleChangePage}
                      page={page}
                   />
                </Stack>
            </div>

       
   </>
  )
}

export default ListNews