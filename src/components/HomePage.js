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
// import { UncontrolledCarousel } from 'reactstrap';
// import React from 'react';
import "./css/HomePage.css"
// import ImageGallery from 'react-image-gallery';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";

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
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

export default function HomePage() {
  SwiperCore.use([Autoplay]);
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
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <div>
      <div class="our-hotel-container">
        <div class="our-hotel-1">
          <div>
            <p class="our-hotel-title">
              Khách sạn của chúng tôi
            </p>
            <p class="our-hotel-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt distinctio, eveniet explicabo
              voluptatum alias minus esse. Laboriosam rem omnis porro, libero accusantium vero ullam velit quaerat.
              Quos, quisquam iure!
            </p>
          </div>

        </div>


        <Swiper className="swiper-container"
          spaceBetween={0}
          slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          loop={true}
          autoplay={{
            delay: 3000
          }}
        >
          <SwiperSlide className='swiper-slide'><img src='https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-khach-san-dep-tphcm.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://premiumholidayclub.com/Upload/images/couple-hotel-check-in-484378693-small.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://media.cntraveler.com/photos/5d827bb077061d0008731f5f/16:9/w_4000,h_2250,c_limit/1-Hotel-West-Hollywood_2019_Pool_157.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://www.andreus-resorts.it/typo3conf/ext/bn_typo_dist/Resources/Public/client/Bilder/Bildauswahl_Kunde_21.11.18/Yoga_Meditation/_bp_170991_web.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://hotel-theyard.berlin/wp-content/uploads/2017/07/Bistro-the-YARD_BCD0084_Homepage.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://c8.alamy.com/comp/2A9DNYX/hotel-limousine-service-2A9DNYX.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://i.pinimg.com/originals/30/6a/f3/306af3bc7c6ab631736ee2a660f28a3f.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://phanthiet.ttchotels.com/uploads//images/hotel-ttc-hotel-premium-phan-thiet/images/service/gym-phan-thiet.jpg'></img></SwiperSlide>
        </Swiper>
      </div>
{/* ****************************************************** */}
      <div className='new-hotel con'>
        <h3 className="h3-tit">Khách sạn mới nhất</h3>
      
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
                  <Button className='btn btn-share' >
                  <p>Share</p>
                  </Button>
                  <Button className= 'btn btn-learn'>
                    <p>Learn More</p>
                  </Button>
                </CardActions>
              </Card>
            )
          })}
        </div>
      </div>
{/* ********************************************************************* */}
      <div className='best-room con'>
        <h3 className="h3-tit">Phòng được được yêu thích</h3>
       
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
                  <Button className='btn btn-share' >
                    <p>Share</p>
                  </Button>

                  <Button className= 'btn btn-learn'>
                  <p>Learn More</p>
                  </Button>
                </CardActions>
              </Card>
            )
          })}
        </div>
      </div>


      {/* *********** Thêm thông tin ***************** */}
      <div class="more-infor">
        <div class="five-star infor-more-hotel">

          <div class="five-star-1">
            <div class="content">
              <p class="infor-title"> KHÁCH SẠN TIÊU CHUẨN 5 SAO</p>
              <p class="infor-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit corrupti
                deleniti autem eveniet sed facilis vel voluptatibus animi natus beatae laboriosam, eos placeat,
                architecto eaque, ut nobis iure aliquam.</p>
              <button class="infor-btn">
                Thêm thông tin
              </button>
            </div>
          </div>
          <div class="five-star-2">

          </div>
        </div>

        <div class="transport infor-more-hotel">
          <div class="transport-1">
          </div>
          <div class="transport-2">
            <div class="content">
              <p class="infor-title"> BAO GỒM DỊCH VỤ VẬN CHUYỂN </p>
              <p class="infor-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit corrupti
                deleniti autem eveniet sed facilis vel voluptatibus animi natus beatae laboriosam, eos placeat,
                architecto eaque, ut nobis iure aliquam.</p>
              <button class="infor-btn">
                Thêm thông tin
              </button>
            </div>

          </div>
        </div>

        <div class="conference infor-more-hotel">
          <div class="conference-1">
            <div class="content">
              <p class="infor-title">TRUNG TÂM HỘI NGHỊ </p>
              <p class="infor-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit corrupti
                deleniti autem eveniet sed facilis vel voluptatibus animi natus beatae laboriosam, eos placeat,
                architecto eaque, ut nobis iure aliquam.</p>
              <button class="infor-btn">
                Thêm thông tin
              </button>
            </div>

          </div>
          <div class="conference-2">

          </div>
        </div>
      </div>

      {/* *********************** */}
      <div className="best-loacation con">
      <h3 className="h3-tit des">Top điểm đến được yêu thích</h3>
      <div className="destinations">
        <div className="destination" >
          <Avatar style={{ marginLeft: "0%" }} alt="Remy Sharp" src="https://vietnamtourism.gov.vn/images/2018/DaLat3.jpg" className={classes.large} />
          <p>Thành phố Đà Lạt</p>
        </div>
        <div className="destination">
          <Avatar style={{ marginLeft: "0%" }} alt="Remy Sharp" src="https://cdn1.nhatrangtoday.vn/images/photos/bai-bien-nha-trang-4.jpg" className={classes.large} />
          <p>Bãi biển Nha Trang</p>
        </div>
        <div className="destination">
          <Avatar style={{ marginLeft: "0%" }} alt="Remy Sharp" src="https://m.baotuyenquang.com.vn/media/images/2020/08/img_20200824090858.jpg" className={classes.large} />
          <p>Thủ đô Hà Nội</p>
        </div>
        <div className="destination">
          <Avatar style={{ marginLeft: "0%" }} alt="Remy Sharp" src="https://baodanang.vn/dataimages/202004/original/images1557744_20_4__ANH_CAU_VANG.jpg" className={classes.large} />
          <p>Thành phố Đà Nẵng</p>
        </div>
        <div className="destination">
          <Avatar style={{ marginLeft: "0%" }} alt="Remy Sharp" src="https://img1.kienthucvui.vn/uploads/2019/08/14/hinh-anh-hoang-thanh-hue-dep-nhat_054029883.jpg" className={classes.large} />
          <p>Cố đô Huế</p>
        </div>
   
      </div>
      </div>
      
    </div>
  );
}
