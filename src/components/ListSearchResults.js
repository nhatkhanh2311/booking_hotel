import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import SearchResults from "./css/SearchResults.css"
import { Button, Form, FormGroup, Input, Label,ButtonToggle  } from "reactstrap";

const data = [
  {
    img:"https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-19.jpg",
    title:"Bãi tắm vũng tàu",
    describe:"Bãi tắm nổi tiếng khu vực nam trung bộ",
    id:"1050430",
    price:"500 000"
  },
  {
    img:"https://media-cdn.tripadvisor.com/media/photo-s/12/47/3e/c6/silverland-yen-hotel.jpg",
    title:"Bãi tắm vũng tàu",
    describe:"Rẻ và đẹp",
    id:"1050430",
    price:"500 000"
  },
  {
    img:"https://thietkeaz.com/images/thiet-ke-phong-ngu-khach-san-36.jpg",
    title:"Bãi tắm vũng tàu",
    describe:"Rẻ và đẹp",
    id:"1050430",
    price:"500 000"
  },
  {
    img:"https://www.hoteljob.vn/files/Anh-Hoteljob-Ni/Nam-2019/Thang-6/Bo-sung-2/tim-hieu-dien-tich-phong-tieu-chuan-cac-hang-sao-khach-san-02.jpg",
    title:"Bãi tắm vũng tàu",
    describe:"Rẻ và đẹp",
    id:"1050430",
    price:"500 000"
  },
  {
    img:"https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-19.jpg",
    title:"Bãi tắm vũng tàu",
    describe:"Rẻ và đẹp",
    id:"1050430",
    price:"500 000"
  },
  
]

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop: 15,
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ListSearchResults() {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="left">
        <Form >
          <FormGroup className="FormGroup" >
            <Label for="userInput">Chỗ nghỉ/điểm đến</Label>
            <Input type="text" id="userInput" placeholder="Đà Nẵng"
            />
          </FormGroup>

          <FormGroup className="FormGroup">
            <Label for="passInput">Ngày nhận</Label>
            <Input type="date"
            />
          </FormGroup>
          <FormGroup className="FormGroup">
            <Label for="passInput">Ngày trả</Label>
            <Input type="date"
            />
          </FormGroup>
          <FormGroup className="FormGroup">
            <Label for="userInput">Số người</Label>
            <Input type="number" id="userInput" defaultValue="2"
            />
          </FormGroup>


          <Button color="primary" block style={{ width: 250, marginLeft: "7%", marginBottom: 15 }}>
            Tìm
            </Button>
        </Form>
        <div className="left2" style={{ marginTop: 50 }}>
          <h6>Các bộ lọc phổ biến</h6>

          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label">Giáp biển
            <div className="rightLB">
                15
              </div>
            </Label>
          </FormGroup>
          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label">
              Bãi biển
              <div className="rightLB">
                26
              </div>
            </Label>
          </FormGroup>
          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label">
              Hồ bơi
              <div className="rightLB">
                10
              </div>
            </Label>
          </FormGroup>
          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label">
              Bao gồm bữa sáng
              <div className="rightLB">
                7
              </div></Label>
          </FormGroup>
          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label">
              5 sao
              <div className="rightLB">
                32
              </div></Label>
          </FormGroup>
          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label">
              Căn hộ
              <div className="rightLB">
                24
              </div></Label>
          </FormGroup>
          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label"
            >Tự nấu
              <div className="rightLB">
                42
              </div></Label>
          </FormGroup>
        </div>


        <div className="left2">
          <h6>Sức khỏe và an toàn</h6>
          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label">
              Có phòng tập gym
            <div className="rightLB">
                15
              </div>
            </Label>
          </FormGroup>
          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label">
              Có chỗ nghỉ có tăng cường các biện pháp an toàn và sức khỏe
              <div><pre>    </pre></div>
              <div className="rightLB">
                26
              </div>
            </Label>
          </FormGroup>
        </div>

        <div className="left2">
          <h6>Hoạt động thú vị</h6>
          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label">
              Xe đạp
            <div className="rightLB">
                15
              </div>
            </Label>
          </FormGroup>
          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label">
              Dạy nấu ăn
              
              <div className="rightLB">
                26
              </div>
            </Label>
          </FormGroup>
          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label">
              Tour đi bộ
              
              <div className="rightLB">
                21
              </div>
            </Label>
          </FormGroup>
          <FormGroup check className="check">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check className="label">
              Tour tham quan
              
              <div className="rightLB">
                32
              </div>
            </Label>
          </FormGroup>
        </div>


      </div>
      <div className="right">
        {data.map(d=>{
          return(
            <Paper className={classes.paper} >
          <Grid container spacing={2} >
            <Grid item >
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={d.img} />
              </ButtonBase>
            </Grid >
            <Grid item xs={12} sm container  >
              <Grid item xs container direction="column" spacing={2}  >
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {d.title}
                </Typography>
                  <Typography variant="body2" gutterBottom>
                    {d.describe}
                </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {d.id}
                </Typography>
                </Grid>
               
              </Grid>
              <div>
                <div>
                  VND:{d.price}           
                  </div>
                <div style={{marginTop:100}}>
                <ButtonToggle color="info">Xem thêm</ButtonToggle>
                </div>
              </div>

            </Grid>
          </Grid>
        </Paper>
          )
        })}
        
      </div>
    </div>
  );
}
