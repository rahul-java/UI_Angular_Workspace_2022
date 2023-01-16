import {ProductComponent} from '../Components/ProductComponent';

let device=new ProductComponent();

device.DeviceId=101;
device.DeviceName="Laptop";
device.ProductName="HP";
device.ProductPrice=70000;
device.ProductQuantity=5;

device.ShowProduct();