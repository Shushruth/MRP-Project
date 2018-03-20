//module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

//component imports
import { AppComponent } from './app.component';
import { PartsComponent} from './parts.component';
import { ManufacturersComponent } from './manufacturers.component';
import { ProductsComponent } from './products.component';
import { PartDetailComponent} from './part-detail.component';
import { ManufacturerDetailComponent } from './manufacturer-detail.component';
import { ProductDetailComponent} from './product-detail.component'
import { PartAddComponent} from './part-add.component';
import { ManufacturerAddComponent } from './manufacturer-add.component';

import { PrunComponent } from './prun.component';
import { PrunAddComponent } from './prun-add.component';
import { PrunDetailComponent } from './prun-detail.component';

import { BOMComponent }      from './bom.component';
import { BOMDetailComponent }  from './bom-detail.component';
import { BOMAddComponent }  from './bom-add.component';

import { LineitemsComponent} from './lineitems.component';
import { LineItemDetailComponent} from './lineitem-detail.component';
import { LineitemAddComponent} from './lineitem-add.component';
import { ProductAddComponent} from './product-add.component';

//services imports
import { ManufacturerService } from '../services/manufacturer.service';
import { PartService } from '../services/part.service';
import { ProductService } from '../services/product.service';
import { PrunService } from '../services/prun.service';
import { BOMService } from '../services/bom.service';
import { LineItemService } from '../services/lineitem.service';

@NgModule({
  declarations: [
    AppComponent,
    PartsComponent,
    PartDetailComponent,
    PartAddComponent,
    ManufacturersComponent,
    ManufacturerDetailComponent,
    ManufacturerAddComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductAddComponent,
    PrunComponent,
    PrunDetailComponent,
    PrunAddComponent,
    BOMComponent,
    BOMDetailComponent,
    BOMAddComponent,
	  LineitemsComponent,
    LineItemDetailComponent,
	  LineitemAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ManufacturerService,
    PartService,
    ProductService,
    PrunService,
    BOMService,
	  LineItemService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
