import { Routes } from '@angular/router';
import { TropicalesComponent } from './tropicales/tropicales.component';
import { CitricasComponent } from './citricas/citricas.component';
import { BerriesComponent } from './berries/berries.component';

import { MangoComponent } from './tropicales/mango/mango.component';
import { PapayaComponent } from './tropicales/papaya/papaya.component';

import { FrambuesaComponent } from './berries/frambuesa/frambuesa.component';
import { MoraComponent } from './berries/mora/mora.component';

import { LimaComponent } from './citricas/lima/lima.component';
import { LimonComponent } from './citricas/limon/limon.component';

export const routes: Routes = [
    {
        path: 'tropicales',
        component: TropicalesComponent,
        children: [
            {
                path:'mango',component:MangoComponent
            },
            {
                path:'papaya',component:PapayaComponent
            },
            
        ]
    },
    {
        path: 'citricas',
        component: CitricasComponent,
        children: [
            {
                path:'lima',component:LimaComponent
            },
            {
                path:'limon',component:LimonComponent
            },
            
        ]
    },
    {
        path: 'berries',
        component: BerriesComponent,
        children: [
            {
                path:'frambuesa',component:FrambuesaComponent
            },
            {
                path:'mora',component:MoraComponent
            },
            
        ]
    },
];
