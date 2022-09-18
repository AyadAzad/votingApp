import React from 'react'
import Box from '@mui/material/Box'
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import "./css/style.css"


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

class Product extends React.Component {
  handleUpVote() {
    this.props.onVote(this.props.id);
  }
    render(){

        return(
         
           
  
           
<Box className='pt-4 products'>
         <Paper elevation={6} variant='outlined' sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}>

                <Grid container spacing={2} className="product-image" >
                        <Grid Item>
                            <ButtonBase sx={{ width: 128, height: 128 }} >
                                <Img src={this.props.productImageUrl} />
                            </ButtonBase>
                        </Grid>

                        <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <a href='@'  onClick={this.handleUpVote} style={{cursor:'pointer'}}>
              <KeyboardArrowUpSharpIcon style={{color:'red'}}/>
              </a>
              {this.props.votes}
              </Typography>
              <Typography gutterBottom variant='subtitle1' component="div" href={this.props.url}>
              {this.props.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
              {this.props.description}
              </Typography>
              <Typography variant="body2" color="text.secondary" display={'flex'}>
                Submitted by: 
                <Avatar alt="Remy Sharp" src={this.props.submitterAvatarUrl} />
              </Typography>
                        </Grid>
                        </Grid>
                        </Grid>
                </Grid>

        </Paper>
        </Box>
           
           
        );
    }
}
export default Product; 