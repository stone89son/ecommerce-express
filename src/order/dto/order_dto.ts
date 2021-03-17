export type inforOrder = {
    id: string;
    email: string;
    phoneNumber: string;
    address: string;
    note: string;
    idProduct: string;
    status: 
    | "Đang chờ xử lý" 
    | "đang đóng gói" 
    | "Đã đóng gói xong" 
    | "Đang chờ giao hàng" 
    | "Đã giao hàng";
}