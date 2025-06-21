import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HuffmanComponent } from './huffman/huffman.component';
import { ShannonFanoComponent } from './shannon-fano/shannon-fano.component';
import { LzwComponent } from './lzw/lzw.component';
import { RleComponent } from './rle/rle.component';
export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'huffman' , component:HuffmanComponent},
    {path:'Shannon-Fano',component:ShannonFanoComponent},
    {path:'lzw',component:LzwComponent},
    {path:'rle',component:RleComponent},
];
