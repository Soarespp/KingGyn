import { Component } from '@angular/core';
import {ModalController, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { EditarProdutoPage } from '../editar-produto/editar-produto';

@Component({
  selector: 'page-lista-produto',
  templateUrl: 'lista-produto.html',
})
export class ListaProdutoPage {
  Lista: FirebaseListObservable <any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public AfDb: AngularFireDatabase,
              public modal: ModalController) {
    this.Lista = this.AfDb.list('/produtos');
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad ListaProdutoPage');
  }
  goToEditarProduto(id){
    this.modal.create(EditarProdutoPage, {id: id}).present();
  }
}
