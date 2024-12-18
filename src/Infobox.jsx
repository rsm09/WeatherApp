import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Infobox({info}){

    let Rainy_img="https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let Hot_img ="https://as1.ftcdn.net/v2/jpg/05/17/22/64/1000_F_517226464_Iw1oXxQsgbJB9tyBy7EnfV9W5hF1R71O.jpg";
    let Cold_img="https://as2.ftcdn.net/v2/jpg/06/40/56/57/1000_F_640565721_0rcpejTFYqJw1fCQa5ozLGpad9sZgBfM.jpg";
    
    return <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
              info.humidity>80
              ?Rainy_img
              :info.temp>20
              ?Hot_img:Cold_img
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>
            The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      </Card>
    </div>
}