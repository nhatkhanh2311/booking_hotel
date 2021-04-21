import React, { useState } from "react";
import { Container,FormGroup,Label,Input } from "reactstrap";
import './css/UpRoom.css';


export default function SignUp() {
   
    const onSubmit = (e) => {
        e.preventDefault();

      
    }

   

    return (
        <div className="UpRoom">
            <form onSubmit={onSubmit}>

                <div className="form-group">
                    <label>Tên phòng: </label>
                    <input type="text" className="form-control" placeholder="Nhập tên"
                       required
                    />
                  
                </div>


            
                <div className="form-group">
                    <label>Giá tiền</label>
                    <input type="number" className="form-control" placeholder="Nhập giá"
                        required
                    />
                 

                </div>
               
                <div className="form-group">
                    <label>Mô tả</label>
                    <textarea type="phone" className="form-control" placeholder="Nhập mô tả" />
                </div>

                <div className="form-group">
                    <label>Tên khách sạn: </label>
                    <input type="text" className="form-control" placeholder="Nhập tên khách sạn"
                       required
                    />
                  
                </div>
                <div className="form-group">
                    <label>Loại phòng: </label>
                    <input type="text" className="form-control" placeholder="Nhập loại"
                       required
                    />
                  
                </div>
                <div className="form-group">
                    <Label>Tải hình ảnh phòng:</Label>
                    <Input type="file" name="image" />
                    <br></br>

                </div>

               

                <button type="submit" className="btn btn-primary btn-block">Gửi</button>
                
            </form>
        </div>
    );
}