import  Card  from "@mui/material/Card"
import  CardMedia  from "@mui/material/CardMedia"
import  CardActions  from "@mui/material/CardActions"
import  CardContent  from "@mui/material/CardContent"
import  Link  from "@mui/material/Link"
import  Grid  from "@mui/material/Grid"
import  Typografhy  from "@mui/material/Typography"


const New = ({bn}) => {

    const {urlToImage, url, title, description, source} =bn
    
  return (
    <>
  
        <Grid item md={6} xl={4}>
            <Card className="card-material">
                        <CardMedia
                                component="img"
                                alt="img news"
                                image={urlToImage}
                                height={'250'}
                                />
                        <CardContent  className="card-content">
                                <Typografhy variant="body1" color="primary">
                                        {source.name}
                                </Typografhy>
                                <Typografhy variant="h5" color="div">
                                        {title}
                                </Typografhy>
                                <Typografhy variant="body2" color="div">
                                        {description}
                                </Typografhy>
                                <CardActions  className="actions">
                                    <Link className="link"
                                            href={url}
                                            target="_blank"
                                        //     color={'primary'}
                                                // textAlign={'center' }                            
                                            underline="none"
                                    >
                                        read more
                                    </Link> 
                                </CardActions>
                        </CardContent>        
            </Card>
        </Grid>
   
    </>
  )
}

export default New