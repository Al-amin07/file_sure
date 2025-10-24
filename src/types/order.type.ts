export interface IOrder {
  _id: string;
  fullName: string;
  email: string;
  paymentMethod: "credit" | "paypal" | "crypto";
  cardNumber: string;
  expiry: string;
  cvc: string;
  price: number;
  courseId: string;
  orderBy: string;
}
