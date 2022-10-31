import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { FrontComponent } from './front/front.component';
import { ServicesComponent } from './services/services.component';
import { AddComponent } from './add/add.component';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './edit/edit.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { SignupsComponent } from './signups/signups.component';
import { ContactusComponent } from './contactus/contactus.component';
import { InvoicedesignComponent } from './invoicedesign/invoicedesign.component';
import { UserdashComponent } from './userdash/userdash.component';
import { MycartComponent } from './mycart/mycart.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { UsbComponent } from './usb/usb.component';
import { InvoiceuserComponent } from './invoiceuser/invoiceuser.component';
import { MobileComponent } from './mobile/mobile.component';
import { OvenComponent } from './oven/oven.component';
import { TabComponent } from './tab/tab.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { SmartwearablesComponent } from './smartwearables/smartwearables.component';

const routes: Routes = [
  {path:'',component:FrontComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'admin',component:AdminComponent},
 {path:'add',component:AddComponent},
 {path:'product',component:ProductComponent},
 {path:'edit',component:EditComponent},
 {path:'invoice',component:InvoiceComponent},
 {path:'customer',component:CustomerComponent},
 {path:'order',component:OrderComponent},
 {path:'signups',component:SignupsComponent},
 {path:'contactus',component:ContactusComponent},
 {path:'invoicedesign',component:InvoicedesignComponent},
 {path:'userdash',component:UserdashComponent},
 {path:'mycart',component:MycartComponent},
 {path:'laptop',component:LaptopComponent},
 {path:'login',component:LoginComponent},
 {path:'usb',component:UsbComponent},
 {path:'invoiceuser',component:InvoiceuserComponent},
 {path:'mobile',component:MobileComponent},
 {path:'oven',component:OvenComponent},
 {path:'tab',component:TabComponent},
 {path:'tv',component:TvComponent},
 {path:'washingmachine',component:WashingmachineComponent},
 {path:'smartwearables',component:SmartwearablesComponent}
 
 
  

  
  
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
