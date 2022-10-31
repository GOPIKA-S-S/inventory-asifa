import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { AdminComponent } from './admin/admin.component';

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





@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    AboutUsComponent,
    ServicesComponent,
    AdminComponent,
  
    AddComponent,
       ProductComponent,
       EditComponent,
       InvoiceComponent,
       CustomerComponent,
       OrderComponent,
       SignupsComponent,
       ContactusComponent,
       InvoicedesignComponent,
       UserdashComponent,
       MycartComponent,
       LaptopComponent,
       LoginComponent,
       UsbComponent,
       InvoiceuserComponent,
       MobileComponent,
       OvenComponent,
       TabComponent,
       TvComponent,
       WashingmachineComponent,
       SmartwearablesComponent,
    
    
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
