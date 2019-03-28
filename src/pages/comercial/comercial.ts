import { Component } from '@angular/core';
import { ViewController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { ProdutoClass } from '../../classes/produto';

/**
 * Generated class for the ComercialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comercial',
  templateUrl: 'comercial.html',
})
export class ComercialPage {
  id: string;
  ref: FirebaseObjectObservable<ProdutoClass>;
  produto = {} as ProdutoClass;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public af: AngularFireDatabase) {

    this.id = this.navParams.get('id');
    this.ref = this.af.object('/produtos/' + this.id);
    this.ref.subscribe(produto => this.produto = produto);
    
  }

  salvar() {
    this.produto.qt -= 1;
    this.ref.update(this.produto).then(() => {
      this.viewCtrl.dismiss();
    })
  }
  fechar() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComercialPage');
  }

}
