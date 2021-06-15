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
      src: 'https://bellevue-3c99.kxcdn.com/bellevue/hotel/wp-content/uploads/sites/9/2017/12/hotel_demo_1-605x465.jpg',
      key: '1'
    },
    {
      src: 'https://bellevue-3c99.kxcdn.com/bellevue/hotel/wp-content/uploads/sites/9/2017/12/hotel_demo_1-605x465.jpg',
      key: '2'
    },
    {
      src: 'https://bellevue-3c99.kxcdn.com/bellevue/hotel/wp-content/uploads/sites/9/2017/12/hotel_demo_53-605x465.jpg',
      key: '3'
    },
    {
      src: 'https://bellevue-3c99.kxcdn.com/bellevue/hotel/wp-content/uploads/sites/9/2017/12/hotel_demo_9-605x465.jpg',
      key: '4'
    },
    {
      src: 'https://bellevue-3c99.kxcdn.com/bellevue/hotel/wp-content/uploads/sites/9/2017/12/hotel_demo_50-605x465.jpg',
      key: '5'
    },

  ];

  return (
    <div>
      {/* <div className="cou" >
        <UncontrolledCarousel items={items} />
      </div> */}
      <hr></hr>
      <h3 className="h3">Khách sạn mới nhất</h3>
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
      <h3 className="h3">Phòng được được yêu thích</h3>
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
     
      {/* *********** MORE INFOR ***************** */}
      <div class="more-infor">
        <div class="five-star infor">

          <div class="five-star-1">
            <div class="content">
              <p class="infor-title"> KHÁCH SẠN TIÊU CHUẨN 5 SAO</p>
              <p class="infor-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit corrupti
                deleniti autem eveniet sed facilis vel voluptatibus animi natus beatae laboriosam, eos placeat,
                architecto eaque, ut nobis iure aliquam.</p>
              <button class="infor-btn">
                More info
              </button>
            </div>
          </div>
          <div class="five-star-2">

          </div>
        </div>

        <div class="transport infor">
          <div class="transport-1">
          </div>
          <div class="transport-2">
            <div class="content">
              <p class="infor-title"> BAO GỒM DỊCH VỤ VẬN CHUYỂN </p>
              <p class="infor-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit corrupti
                deleniti autem eveniet sed facilis vel voluptatibus animi natus beatae laboriosam, eos placeat,
                architecto eaque, ut nobis iure aliquam.</p>
              <button class="infor-btn">
                More infor
              </button>
            </div>

          </div>
        </div>

        <div class="conference infor">
          <div class="conference-1">
            <div class="content">
              <p class="infor-title">TRUNG TÂM HỘI NGHỊ </p>
              <p class="infor-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit corrupti
                deleniti autem eveniet sed facilis vel voluptatibus animi natus beatae laboriosam, eos placeat,
                architecto eaque, ut nobis iure aliquam.</p>
              <button class="infor-btn">
                More infor
              </button>
            </div>

          </div>
          <div class="conference-2">

          </div>
        </div>
      </div>
      <h3 className="h3">Top điểm đến được yêu thích</h3>
      <div className="destinations">
        <div className="destination" >
          <Avatar style={{ marginLeft: "17%" }} alt="Remy Sharp" src="https://vietnamtourism.gov.vn/images/2018/DaLat3.jpg" className={classes.large} />
          <p>Thành phố Đà Lạt</p>
        </div>
        <div className="destination">
          <Avatar style={{ marginLeft: "17%" }} alt="Remy Sharp" src="https://cdn1.nhatrangtoday.vn/images/photos/bai-bien-nha-trang-4.jpg" className={classes.large} />
          <p>Bãi biển Nha Trang</p>
        </div>
        <div className="destination">
          <Avatar style={{ marginLeft: "17%" }} alt="Remy Sharp" src="https://baodanang.vn/dataimages/202004/original/images1557744_20_4__ANH_CAU_VANG.jpg" className={classes.large} />
          <p>Thành phố Đà Nẵng</p>
        </div>
        <div className="destination">
          <Avatar style={{ marginLeft: "17%" }} alt="Remy Sharp" src="https://img1.kienthucvui.vn/uploads/2019/08/14/hinh-anh-hoang-thanh-hue-dep-nhat_054029883.jpg" className={classes.large} />
          <p>Cố đô Huế</p>
        </div>
      </div>
    </div>
  );
}
