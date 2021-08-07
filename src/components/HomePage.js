import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
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

  return (
    <div>
      <div className="our-hotel-container">
        <div className="our-hotel-1">
          <div>
            <p className="our-hotel-title">
              <h1>OUR HOTELS</h1>
            </p>
            <p className="our-hotel-content">
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
          <SwiperSlide onClick={() => console.log('okkkkkkkkkkkk')} className='swiper-slide'><img src='https://i.pinimg.com/564x/3b/17/83/3b178399298a409f7842130f769ffa92.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://media.cntraveler.com/photos/5d827bb077061d0008731f5f/16:9/w_4000,h_2250,c_limit/1-Hotel-West-Hollywood_2019_Pool_157.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://www.andreus-resorts.it/typo3conf/ext/bn_typo_dist/Resources/Public/client/Bilder/Bildauswahl_Kunde_21.11.18/Yoga_Meditation/_bp_170991_web.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://hotel-theyard.berlin/wp-content/uploads/2017/07/Bistro-the-YARD_BCD0084_Homepage.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://c8.alamy.com/comp/2A9DNYX/hotel-limousine-service-2A9DNYX.jpg'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320'></img></SwiperSlide>
          <SwiperSlide className='swiper-slide'><img src='https://phanthiet.ttchotels.com/uploads//images/hotel-ttc-hotel-premium-phan-thiet/images/service/gym-phan-thiet.jpg'></img></SwiperSlide>
        </Swiper>
      </div>
      <div className="container4">
        <div className="content">
          <div className="content-left">
            <p><h1>
              Unlocking the
            </h1>
              <span className="h1Text">potential</span> of those who
              <h1> advance the world
              </h1></p>
            <p>
              numquam odit ab eius minus voluptatum tenetur, minima beatae
              voluptas ut, quia nobis necessitatibus optio.
            </p>
          </div>
          <div className="content-right">
            <img
              src="https://i.pinimg.com/564x/9c/04/20/9c0420929300a85b6ce85ae79addb46c.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container3">
        <ul className="list">
          <li>
            <div className="container">
              <div className="img-hover-zoom">
                <img src="https://i.pinimg.com/564x/c1/8d/99/c18d99fb7d6fb9dd37406c71be2447ca.jpg" alt="" />
              </div>
              <div className="description">
                <h4>Design</h4>
              </div>
            </div>
          </li>
          <li>
            <div className="container">
              <div className="img-hover-zoom">
                <img src="https://i.pinimg.com/564x/bf/9e/d4/bf9ed439091ac676d73c4ed133466332.jpg" alt="" />
              </div>
              <div className="description">
                <h4>Ocean</h4>
              </div>
            </div>
          </li>
          <li>
            <div className="container">
              <div className="img-hover-zoom">
                <img src="https://i.pinimg.com/564x/30/fc/91/30fc91d46ab449defdacb7c717bc3ee5.jpg" alt="" />
              </div>
              <div className="description">
                <h4>old house</h4>
              </div>
            </div>
          </li>
          <li>
            <div className="container">
              <div className="img-hover-zoom">
                <img src="https://i.pinimg.com/564x/5b/d0/d9/5bd0d9c6c17d39f9b11da9ee9f77b9a1.jpg" alt="" />
              </div>
              <div className="description">
                <h4>Garden</h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="more-infor">
        <div className="five-star infor-more-hotel">

          <div className="five-star-1">
            <div className="content">
              <p className="infor-title"> 5 STAR STANDARD HOTEL</p>
              <p className="infor-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit corrupti
                deleniti autem eveniet sed facilis vel voluptatibus animi natus beatae laboriosam, eos placeat,
                architecto eaque, ut nobis iure aliquam.</p>
              <button className="infor-btn">
                See more
              </button>
            </div>
          </div>
          <div className="five-star-2">

          </div>
        </div>

        <div className="transport infor-more-hotel">
          <div className="transport-1">
          </div>
          <div className="transport-2">
            <div className="content">
              <p className="infor-title">
INCLUDING SHIPPING SERVICES </p>
              <p className="infor-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit corrupti
                deleniti autem eveniet sed facilis vel voluptatibus animi natus beatae laboriosam, eos placeat,
                architecto eaque, ut nobis iure aliquam.</p>
              <button className="infor-btn">
                See more
              </button>
            </div>

          </div>
        </div>


      </div>

      <div className="best-loacation con">
        <h3 className="h3-tit des">Top place</h3>
        <div className="destinations">
          <div className="destination" >
            <Avatar style={{ marginLeft: "0%" }} alt="Remy Sharp" src="http://divui.com/blog/wp-content/uploads/2018/03/du-lich-da-lat-cuoi-tuan-cover.jpg" className={classes.large} />
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
