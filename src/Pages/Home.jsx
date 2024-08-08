import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper } from '@mui/material';
import MyNavbar from '../Component/MyNavbar';
import '../Css/Home.css';

function Home() {
  return (
    <Box style={{padding:0,justifyContent:'center'}} component={Paper}>
      <MyNavbar/>
      <Container className="container" maxWidth="lg" sx={{justifyContent:'center'}}>
        {/* Hero Bölümü */}
        <Box className="hero-section">
          <Box className="hero-content">
            <Typography variant="h5" component="h1" gutterBottom className="hero-title">
              GÜMÜŞ OTO KURTARMA
            </Typography>
            <Typography variant="h6" component="p" gutterBottom className="hero-subtitle">
              Oto kurtarma hizmetlerinde güvenilir ortağınız
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className="hero-button"
              component="a"
              href="tel:05432071130"
            >
              Bize Ulaşın
            </Button>
          </Box>
        </Box>

        {/* Hizmetler Bölümü Öncesi Açıklama */}
        <Box className="section">
          <Typography variant="h4" component="h2" gutterBottom className="section-title">
            Gaziantep ve Çevresinde Hızlı ve Güvenilir Hizmet
          </Typography>
          <Typography variant="body1" component="p" className="section-content">
            Gaziantep şehir içi ve çevresinde, oto kurtarma ve yol yardım ihtiyaçlarınızı en hızlı ve güvenilir şekilde karşılıyoruz. 
            Geniş hizmet ağı ve deneyimli ekibimizle, araç sorunlarınızı en kısa sürede çözmek için buradayız. 
            İster şehir içi acil çekici ihtiyacı, ister Gaziantep ve çevresindeki uzun yol yardımları olsun, 
            profesyonel hizmet anlayışımızla size her zaman en iyi çözümü sunmak için çalışıyoruz.
          </Typography>
        </Box>

        {/* Hizmetler Bölümü */}
        <Box className="section">
          <Typography variant="h4" component="h2" gutterBottom className="section-title">
            Hizmetlerimiz
          </Typography>
          <Grid container spacing={2} className="service-grid">
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="service-card">
                <Typography variant="h6" component="h3" gutterBottom>
                  Acil Çekici Hizmeti
                </Typography>
                <Typography variant="body1" component="p">
                  Her durum için 7/24 acil çekici hizmeti sunuyoruz.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="service-card">
                <Typography variant="h6" component="h3" gutterBottom>
                  Yol Yardım Hizmeti
                </Typography>
                <Typography variant="body1" component="p">
                  Lastik değişimi, akü takviyesi ve daha fazlasını kapsayan yol yardım hizmetimiz mevcuttur.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="service-card">
                <Typography variant="h6" component="h3" gutterBottom>
                  Araç Kurtarma Hizmeti
                </Typography>
                <Typography variant="body1" component="p">
                  Tüm kaza türleri için araç kurtarma hizmetleri sunuyoruz.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* İletişim Bölümü */}
        <Box className="section">
          <Typography variant="h4" component="h2" gutterBottom className="section-title">
            Bize Ulaşın
          </Typography>
          <Paper className="contact-section">
            <Typography variant="h6" component="p" gutterBottom>
              Bizi arayın: 05432071130
            </Typography>
            <Typography variant="h7" component="p" gutterBottom>
              Email: info@gumusotokurtarma.com
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href="tel:05432071130"
              sx={{ mt: 2 }}
            >
              Şimdi Ara
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
