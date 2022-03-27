import axios from 'axios';
import { useState ,useEffect } from 'react';


const Product = () => {
    
    const [productList, setProductList] = useState([]);

    // useEffect จะสะดวกกับการ loop ข้อมูลในลักษณะ array ออกมา แต่อย่างไรก็ตามจำเป็นต้องใส่ array เปล่าไว้ ณ ตอนจบ '[]' ไม่เช่นนั้นแล้วจะเกิด infinit loop ขึ้น 
    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(res => setProductList(res.data)) 
    },[])

    return(
        <>
            <div class="title-container">
                <h3>Product page</h3>
            </div>
            <div class="content-container">
                <ul>
                    {
                        productList.length === 0 && <h4>loading...</h4>
                    }
                    {
                        // หากต้องการ loop แสดงของที่อยู่ใน array ใช้ คำสั่ง map  เช่น array.map(element => ())
                        productList.map(element =>(
                            <div>{element.id} {element.userId} {element.title}</div>
                        ))

                    }
                </ul>
            </div>
        </>
    );
}


export default Product