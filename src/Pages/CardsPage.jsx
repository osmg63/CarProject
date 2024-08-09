import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, CardActionArea, Grid } from '@mui/material';
import MyNavbar from '../Component/MyNavbar';
import '../Css/CardsPage.css'; // CSS dosyasını import et

const cardData = [
  {
    title: 'Gaziantep-Kahramanmaraş',
    description: 'Gaziantep ile Kahramanmaraş arasında hızlı ve güvenilir oto kurtarma hizmeti sunuyoruz.',
    image: '/Pictures/foto1.jpg',
  },
  {
    title: 'Gaziantep-Osmaniye',
    description: 'Gaziantep ile Osmaniye arasında 7/24 oto kurtarma hizmetimizden yararlanabilirsiniz.',
    image: '/Pictures/foto1.jpg',
  },
  {
    title: 'Gaziantep-Şanlıurfa',
    description: 'Gaziantep ile Şanlıurfa arasında profesyonel oto kurtarma hizmeti sağlıyoruz.',
    image: '/Pictures/foto1.jpg',
  },
  {
    title: 'Gaziantep-Adana',
    description: 'Gaziantep ile Adana arasında her türlü oto kurtarma ihtiyacınız için buradayız.',
    image: '/Pictures/foto1.jpg',
  },
  {
    title: 'Gaziantep-Konya',
    description: 'Gaziantep ile Konya arasında geniş kapsamlı oto kurtarma hizmetlerimiz mevcuttur.',
    image: '/Pictures/foto1.jpg',
  },
  {
    title: 'Gaziantep-Diyarbakır',
    description: 'Gaziantep ile Diyarbakır arasında hızlı ve güvenli oto kurtarma hizmeti sunuyoruz.',
    image: '/Pictures/foto1.jpg',
  },
];

function handleCall() {
  window.location.href = 'tel:05432071130'; 
}

function CardsPage() {
  return (
    <>
    <MyNavbar />
    <Box className="container">
      
      <Grid className='cards-container' container >
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={index} sx={{display:'flex',justifyContent:'center',Maxwidth: '30%'}}>
            <Card className="card-item" >
              <CardActionArea>
                <CardMedia
                  component="img"
                  className="card-media"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent className="card-content">
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color='info'
                    className="card-button"
                    onClick={handleCall}
                  >
                    Hemen Ara
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>  
  );
}

export default CardsPage;
