import { Footer } from './components/footer/footer';
import { Routes } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Header } from './components/header/header';
import { Services } from './components/services/services';
import { PricePlans } from './components/price-plans/price-plans';
import { Component } from '@angular/core';

export const routes: Routes = [
    { path: '', component: Nav },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

