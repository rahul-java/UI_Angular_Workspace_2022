import {ProductTemplate} from '../Templates/ProductTemplate';
export class ProductComponent extends ProductTemplate{

    public ProductName: string = "";
    public ProductPrice: number = 0;
    public ProductQuantity: number = 0;
    public TotalCost(): number {
        return this.ProductPrice * this.ProductQuantity;
    }

    public ShowProduct():void{

        super.Display();
    }
}