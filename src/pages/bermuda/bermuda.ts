import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ComercialPage } from '../comercial/comercial';

/**
 * Generated class for the BermudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bermuda',
  templateUrl: 'bermuda.html',
})
export class BermudaPage {
  ListaCamiseta: FirebaseListObservable <any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public AfDb: AngularFireDatabase,
    public modal: ModalController) {
    this.ListaCamiseta = this.AfDb.list('/produtos',{query:{
      orderByChild: 'descricao',
      equalTo: 'Bermuda'
    }});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BermudaPage');
  }

  Vender(id){
    this.modal.create(ComercialPage, {id: id}).present();
  }

}
