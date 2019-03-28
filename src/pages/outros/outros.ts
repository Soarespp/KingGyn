import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ComercialPage } from '../comercial/comercial';

/**
 * Generated class for the OutrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-outros',
  templateUrl: 'outros.html',
})
export class OutrosPage {
  ListaCamiseta: FirebaseListObservable <any>;
  
    constructor(public navCtrl: NavController, public navParams: NavParams,public AfDb: AngularFireDatabase,
      public modal: ModalController) {
      this.ListaCamiseta = this.AfDb.list('/produtos',{query:{
        orderByChild: 'tipo',
        equalTo: 'outros'
      }});
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutrosPage');
  }

  Vender(id){
    this.modal.create(ComercialPage, {id: id}).present();
  }

}
