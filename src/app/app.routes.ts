import {Routes} from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {SearchComponent} from './components/search/search.component';

export const ROUTES: Routes = [
    { path: 'products', component: ProductsComponent},
    { path: 'search', component: SearchComponent},
    { path: '', pathMatch: 'full', redirectTo:'products'},
    { path: '**', pathMatch: 'full', redirectTo:'products'}
];

