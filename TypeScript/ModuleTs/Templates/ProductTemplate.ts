import {IDevice} from '../Contracts/DeviceContract';
import {IProduct} from '../Contracts/ProductContract';

export abstract class ProductTemplate implements IDevice , IProduct{

    public DeviceId: number;
    public DeviceName: string;
    public ProductName: string;
    public ProductPrice: number;
    public ProductQuantity: number;
    public abstract TotalCost(): number;
    public Display(): void {
        console.log(`
          Device Id : ${this.DeviceId}\n
          Device Name : ${this.DeviceName}\n
          Product Name : ${this.ProductName}\n
          Product Price : ${this.ProductPrice}\n
          Product Quantity : ${this.ProductQuantity}\n
          Total Cost : ${this.TotalCost()}\n
          `);
    }
}