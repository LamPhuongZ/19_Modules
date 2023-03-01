// import {...} from './.....js';
// import: khai báo sử dụng các biến/hàm từ các module khác
import { PI, cicrleArea } from "./utils.js";
import Students from "./Students.js";
import { getProduct } from "./services.js";


console.log("Số PI: ", PI);
console.log("Diện tích hình tròn: ", cicrleArea(3));


const student = new Students("0001", "Nam", "nam@gmail.com");
console.log("Sinh viên: ", student);

getProduct()
.then((respons) => {
    console.log(respons.data);
})
