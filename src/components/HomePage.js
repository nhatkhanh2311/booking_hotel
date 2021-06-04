import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { UncontrolledCarousel } from 'reactstrap';
import "./css/HomePage.css"
const useStyles = makeStyles((theme) => ({
  root: {
    width: "23%",
    minWidth: 240,
    marginLeft: 20,
    marginTop: 30
  },
  media: {
    height: 140,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function HomePage() {
  const classes = useStyles();

  const data = [
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/12/47/3e/c6/silverland-yen-hotel.jpg",
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    }
    , {
      img: "https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-19.jpg",
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      img: "https://thietkeaz.com/images/thiet-ke-phong-ngu-khach-san-36.jpg",
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      img: "https://www.hoteljob.vn/files/Anh-Hoteljob-Ni/Nam-2019/Thang-6/Bo-sung-2/tim-hieu-dien-tich-phong-tieu-chuan-cac-hang-sao-khach-san-02.jpg",
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },

  ]

  const items = [
    {
      src: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/190579530_3741435479414180_3918195475456542642_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=dbeb18&_nc_ohc=H0K7Wpp33nAAX_dd97H&_nc_oc=AQkr-PLlCydYyAUafM9tSPDXXpGXVB7V5CbUlSdarjXvEaPoH_mjeIS6ZGmNXCNdC_yANyztkvd4bLEhRVssbKBX&_nc_ht=scontent.fdad3-3.fna&oh=1e13de853b3db089a1962b45361cbafe&oe=60D02947',

      key: '1'
    },
    {
      src: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/187463909_3741438656080529_7421689148204696612_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=dbeb18&_nc_ohc=ULL2D71ZQgkAX8T2Q9v&_nc_ht=scontent.fdad3-1.fna&oh=ce3a106e1892cd1c7e6d1234113b6464&oe=60CFB3AB',


      key: '2'
    },
    {
      src: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/190091531_3741438772747184_8793024995860699333_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=dbeb18&_nc_ohc=1VMZ6Q4kdioAX_VRDZA&_nc_ht=scontent.fdad3-1.fna&oh=89374cc105dff61bec845d67c1ec1634&oe=60D088DB',


      key: '3'
    },
    {
      src: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/187398234_3741440012747060_6576089724660946887_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=dbeb18&_nc_ohc=vlYGWKXMafwAX9P0a2v&_nc_ht=scontent.fdad3-1.fna&oh=81429bf3271b9fd73381c1d92f9e4aa6&oe=60CF6E5C',


      key: '4'
    },
    {
      src: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/190801123_3741441076080287_3441212252874464541_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=dbeb18&_nc_ohc=le44qYMYB9IAX-IR-4v&_nc_oc=AQl93tCsP6sykXiF0uuMYKClbzSv4rjQLBKj7Fi9PDn4l2cePPv5Kdf04JHeaUvCPcz5ZFUcwNjCUpq4E07MjU7V&_nc_ht=scontent.fdad3-1.fna&oh=e06c0ab4e0569f6c6bdfa9286cfd3127&oe=60D0A292',


      key: '5'
    },

  ];

  return (
    <div>
      <div className="cou" >
        <UncontrolledCarousel items={items} />
      </div>
      <hr></hr>
      <h3 className="h3">khách sạn mới nhất</h3>
      <div className="db">
        {data.map(d => {
          return (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={d.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {d.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {d.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" >
                  Share
        </Button>
                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
          )
        })}


      </div>
      <h3 className ="h3">Phòng được được yêu thích</h3>
      <div className="db">
        {data.map(d => {
          return (
            <Card className={classes.root} style={{ borderBottom: "5px solid lightgreen" }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={d.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {d.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {d.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" >
                  Share
        </Button>

                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
          )
        })}
      </div>
        <h3 className="h3">Top điểm đến được yêu thích</h3>
      <div className="destinations">
      <div className="destination" >
        <Avatar style={{marginLeft:"17%"}} alt="Remy Sharp" src="https://vietnamtourism.gov.vn/images/2018/DaLat3.jpg" className={classes.large} />
        <p>Thành phố Đà Lạt</p>
      </div>
      <div className="destination">
        <Avatar style={{marginLeft:"17%"}} alt="Remy Sharp" src="https://cdn1.nhatrangtoday.vn/images/photos/bai-bien-nha-trang-4.jpg" className={classes.large} />
        <p>Bãi biển Nha Trang</p>
      </div>
      <div className="destination">
        <Avatar style={{marginLeft:"17%"}} alt="Remy Sharp" src="https://baodanang.vn/dataimages/202004/original/images1557744_20_4__ANH_CAU_VANG.jpg" className={classes.large} />
        <p>Thành phố Đà Nẵng</p>
      </div>
      <div className="destination">
        <Avatar style={{marginLeft:"17%"}} alt="Remy Sharp" src="https://media.vov.vn/uploaded/bavu/2015_08_06/2_qcfo.jpg" className={classes.large} />
        <p>Cố đô Huế</p>
      </div>
      </div>

    </div>
  );
}
