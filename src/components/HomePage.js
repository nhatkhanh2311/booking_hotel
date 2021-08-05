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
import "./css/HomePage.css"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
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

  return (
    <div>
      <div class="our-hotel-container">
        <div class="our-hotel-1">
          <div>
            <p class="our-hotel-title">
              <h1>OUR HOTELS</h1>
            </p>
            <p class="our-hotel-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt distinctio, eveniet explicabo
              voluptatum alias minus essevoluptatum alias minus esse.

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
          <SwiperSlide className='swiper-slide'><img src='https://i.pinimg.com/564x/3b/17/83/3b178399298a409f7842130f769ffa92.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://media.cntraveler.com/photos/5d827bb077061d0008731f5f/16:9/w_4000,h_2250,c_limit/1-Hotel-West-Hollywood_2019_Pool_157.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://www.andreus-resorts.it/typo3conf/ext/bn_typo_dist/Resources/Public/client/Bilder/Bildauswahl_Kunde_21.11.18/Yoga_Meditation/_bp_170991_web.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://hotel-theyard.berlin/wp-content/uploads/2017/07/Bistro-the-YARD_BCD0084_Homepage.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://c8.alamy.com/comp/2A9DNYX/hotel-limousine-service-2A9DNYX.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://phanthiet.ttchotels.com/uploads//images/hotel-ttc-hotel-premium-phan-thiet/images/service/gym-phan-thiet.jpg'></img></SwiperSlide>
        </Swiper>
      </div>
      <div class="container4">
        <div class="content">
          <div class="content-left">
            <h1>
              Unlocking the
              <span class="h1Text">potential</span> of those who
              advance the world
            </h1>
            <p>
              numquam odit ab eius minus voluptatum tenetur, minima beatae
              voluptas ut, quia nobis necessitatibus optio.
            </p>
          </div>
          <div class="content-right">
            <img
              src="https://i.pinimg.com/564x/9c/04/20/9c0420929300a85b6ce85ae79addb46c.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="container3">
        <ul class="list">
          <li>
            <div class="container">
              <div class="img-hover-zoom">
                <img src="https://i.pinimg.com/564x/c1/8d/99/c18d99fb7d6fb9dd37406c71be2447ca.jpg" alt="" />
              </div>
              <div class="description">
                <h4>Cho o doc dao</h4>
              </div>
            </div>
          </li>
          <li>
            <div class="container">
              <div class="img-hover-zoom">
                <img src="https://i.pinimg.com/564x/bf/9e/d4/bf9ed439091ac676d73c4ed133466332.jpg" alt="" />
              </div>
              <div class="description">
                <h4>Cho o doc dao</h4>
              </div>
            </div>
          </li>
          <li>
            <div class="container">
              <div class="img-hover-zoom">
                <img src="https://i.pinimg.com/564x/30/fc/91/30fc91d46ab449defdacb7c717bc3ee5.jpg" alt="" />
              </div>
              <div class="description">
                <h4>Cho o doc dao</h4>
              </div>
            </div>
          </li>
          <li>
            <div class="container">
              <div class="img-hover-zoom">
                <img src="https://i.pinimg.com/564x/5b/d0/d9/5bd0d9c6c17d39f9b11da9ee9f77b9a1.jpg" alt="" />
              </div>
              <div class="description">
                <h4>Cho o doc dao</h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
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

        
      </div>

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
