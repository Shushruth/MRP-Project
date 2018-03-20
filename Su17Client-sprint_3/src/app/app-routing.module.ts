import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturersComponent }      from './manufacturers.component';
import { ManufacturerDetailComponent }  from './manufacturer-detail.component';
import { ManufacturerAddComponent }  from './manufacturer-add.component';
import { ProductsComponent }      from './products.component';
import { ProductDetailComponent }  from './product-detail.component';
import { ProductAddComponent }  from './product-add.component';
import { PartsComponent } from './parts.component';
import { PartAddComponent } from './part-add.component';
import { PartDetailComponent } from './part-detail.component';
import { PrunComponent } from './prun.component';
import { PrunAddComponent } from './prun-add.component';
import { PrunDetailComponent } from './prun-detail.component';
import { BOMComponent }      from './bom.component';
import { BOMDetailComponent }  from './bom-detail.component';
import { BOMAddComponent }  from './bom-add.component';
import { LineitemsComponent }      from './lineitems.component';
import { LineItemDetailComponent }  from './lineitem-detail.component';
import { LineitemAddComponent }  from './lineitem-add.component';

const routes: Routes = [
  { path: 'mfr-detail/:id',  component: ManufacturerDetailComponent },
  { path: 'mfr-add',         component: ManufacturerAddComponent },
  { path: 'manufacturers',   component: ManufacturersComponent },
  { path: 'product-detail/:id',  component: ProductDetailComponent },
  { path: 'product-add',         component: ProductAddComponent },
  { path: 'products',   component: ProductsComponent },
  { path: 'productionruns',    component: PrunComponent},
  { path: 'prun-add',          component: PrunAddComponent},
  { path: 'prun-detail/:id',   component: PrunDetailComponent},
  { path: 'bom_id_all/:bom_id', component: BOMDetailComponent },
  { path: 'Billofmaterials', component: BOMComponent },
  { path: 'insert_product', component: BOMAddComponent },
  { path: 'lineitem_all/:id',  component: LineItemDetailComponent },
  { path: 'bom_part_quantity',         component: LineitemAddComponent },
  { path: 'lineitems/:bom_id',   component: LineitemsComponent },
  { path: 'parts', component: PartsComponent},
  { path: 'part-description/:id', component: PartDetailComponent},
  { path: 'part-add', component: PartAddComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
