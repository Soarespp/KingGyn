import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the VendasPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendas',
  templateUrl: 'vendas.html'
})
export class VendasPage {

  camisetaRoot = 'CamisetaPage'
  camisaRoot = 'CamisaPage'
  bermudaRoot = 'BermudaPage'
  cuecaRoot = 'CuecaPage'
  outrosRoot = 'OutrosPage'

  constructor(public navCtrl: NavController ) {
  }

}
