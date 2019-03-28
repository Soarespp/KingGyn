import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ComercialPage } from '../comercial/comercial';

/**
 * Generated class for the CamisetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camiseta',
  templateUrl: 'camiseta.html',
})
export class CamisetaPage {
  ListaCamiseta: FirebaseListObservable <any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public AfDb: AngularFireDatabase,
              public modal: ModalController) {
    this.ListaCamiseta = this.AfDb.list('/produtos',{query:{
      orderByChild: 'tipo',
      equalTo: 'camiseta'
    }});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CamisetaPage');
  }

  Vender(id){
    this.modal.create(ComercialPage, {id: id}).present();
  }



}
