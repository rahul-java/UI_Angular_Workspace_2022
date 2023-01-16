export interface IProduct{
    ProductName:string;
    ProductPrice:number;
    ProductQuantity:number;
    TotalCost():number;
    Display():void;
}