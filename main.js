// Bài 1:
/**
 * Mô hình 3 khối:
 * B1: cho người dùng nhập số ngày làm
 * B2: Lấy giá trị số ngày làm *100.000
 * B3: Xuất kết quả ra màn hình
 */
document.getElementById('btnTinhLuong').onclick = function(){
var day=document.getElementById('day').value;

var thanhTien = day*100000;

//   document.getElementById('footerTinhLuong').innerHTML="";
  var currentFormat= new Intl.NumberFormat('vn-VN');
   var result = document.createElement('p');
    result.innerHTML="Ngày lương: "+day+"- Tiền lương: "+currentFormat.format(thanhTien);
    console.log(result);
    document.getElementById('footerTinhLuong').appendChild(result);

}

// tính số trung bình
/**
 * Mô hình 3 khối:
 * B1: cho người dùng nhập 5 số thực bất kì
 * B2: Lấy giá trị từng số cộng lại rồi chia cho 5
 * B3: Xuất kết quả ra màn hình
 */
document.getElementById('btnTinhTB').onclick=function(){
var num1=document.getElementById('num1').value;
num1=parseFloat(num1);
var num2=document.getElementById('num2').value;
num2=parseFloat(num2);
var num3=document.getElementById('num3').value;
num3=parseFloat(num3);
var num4=document.getElementById('num4').value;
num4=parseFloat(num4);
var num5=document.getElementById('num5').value;
num5=parseFloat(num5);

var TBinh = (num1 + num2 + num3 + num4 + num5)/5;
document.getElementById('footerTB').innerHTML="";
   var result = document.createElement('p');
    result.innerHTML="Trung bình: "+TBinh;
    console.log(result);
    document.getElementById('footerTB').appendChild(result);
}

// quy đổi tiền USD sang VND
/**
 * Mô hình 3 khối:
 * B1: cho người dùng nhập số tiền USD
 * B2: Lấy giá trị số tiền USD *23.500 ra số tiền VND
 * B3: Xuất kết quả ra màn hình
 */
document.getElementById('btnTinhVND').onclick=function(){
    var USD = document.getElementById('USD').value*1;

    var VND=USD*23500;
    var currentFormat= new Intl.NumberFormat('vn-VN');
    var result = document.createElement('p');
     result.innerHTML="Tiền VND: "+currentFormat.format(VND);
     console.log(result);
     document.getElementById('footerVND').appendChild(result);
}

// tính chu vi, diện tích hcn
/**
 * Mô hình 3 khối:
 * B1: cho người dùng nhập chiều dài và chiều rộng
 * B2: Lấy giá trị chiều dài và chiều rộng.
 *      + Tính chu vi: chiều dài cộng chiều rộng, tất cả nhân 2.
 *      + Tính diện tích: chiều dài nhân chiều rộng.
 * B3: Xuất kết quả chu vi và diện tính ra màn hình
 */
document.getElementById('btnTinhP,S').onclick=function(){
    var cD=document.getElementById('cD').value;
    cD=parseFloat(cD);
var cR=document.getElementById('cR').value;
cR=parseFloat(cR);
var chuVi=(cD+cR)*2;
var dienTich=cD*cR;

document.getElementById('footerP,S').innerHTML="";
   var result = document.createElement('p');
    result.innerHTML="Chu Vi: "+chuVi;
    console.log(result);
    document.getElementById('footerP,S').appendChild(result);

    var result = document.createElement('p');
    result.innerHTML="Diện tích: "+dienTich;
    console.log(result);
    document.getElementById('footerP,S').appendChild(result);
}
// Tính tổng 2 kí số
/**
 * Mô hình 3 khối:
 * B1: cho người dùng nhập số có 2 chữ số
 * B2: Lấy giá trị số và tách ra:
 *  + Số đơn vị = số %10
 *  + Số hàng chục = số /10
 * chuyển số hàng chục thành số nguyên.
 *  + tính tổng 2 số = số đơn vị công số hàng chục.
 * B3: Xuất kết quả ra màn hình
 */
document.getElementById('btnTinhTong').onclick=function(){
    var num=document.getElementById('num').value*1;
    var firstNum = num/10;
    firstNum=parseInt(firstNum);
    var secondNum=num%10;
    var tong=firstNum+secondNum;
    document.getElementById('footerTong').innerHTML="";
   var result = document.createElement('p');
    result.innerHTML="Tổng 2 số: "+tong;
    console.log(result);
    document.getElementById('footerTong').appendChild(result);
}