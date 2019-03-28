import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CadastrosPage } from '../pages/cadastros/cadastros';
import { HomeAdministradorPage } from '../pages/home-administrador/home-administrador';
import { CadastroProdutoPage } from '../pages/cadastro-produto/cadastro-produto';
import { ListaProdutoPage } from '../pages/lista-produto/lista-produto';
import { EditarProdutoPage } from '../pages/editar-produto/editar-produto';
import { VendasPage } from '../pages/vendas/vendas';
import { ComercialPage } from '../pages/comercial/comercial';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import {Camera} from "@ionic-native/camera";



export const firebaseConfig = {
  apiKey: "AIzaSyC4qzEs0hzLgKaXp8klbsjLjqxI4G8yn2Q",
  authDomain: "kinggynoutlet.firebaseapp.com",
  databaseURL: "https://kinggynoutlet.firebaseio.com",
  projectId: "kinggynoutlet",
  storageBucket: "kinggynoutlet.appspot.com",
  messagingSenderId: "158967510576"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastrosPage,
    HomeAdministradorPage,
    CadastroProdutoPage,
    ListaProdutoPage,
    EditarProdutoPage,
    VendasPage,
    ComercialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastrosPage,
    HomeAdministradorPage,
    CadastroProdutoPage,
    ListaProdutoPage,
    EditarProdutoPage,
    VendasPage,
    ComercialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}  
  ]
  
})
export class AppModule {}
