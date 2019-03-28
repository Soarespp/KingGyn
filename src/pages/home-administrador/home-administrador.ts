import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { CadastroProdutoPage } from '../cadastro-produto/cadastro-produto';
import { ListaProdutoPage } from '../lista-produto/lista-produto';
import { VendasPage } from '../vendas/vendas';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { UsuarioClass } from '../../classes/usuario';

@Component({
  selector: 'page-home-administrador',
  templateUrl: 'home-administrador.html',
})
export class HomeAdministradorPage {
  usuario: string;
  pass:string;
  ref: FirebaseObjectObservable<UsuarioClass>;
  user = {} as UsuarioClass;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public af: AngularFireDatabase) {

    // alert(this.navParams.get('pUser'));

    this.usuario = this.navParams.get('pUser');
    this.ref = this.af.object('/usuarios/' + this.usuario);
    this.ref.subscribe(user => this.user = user);

    // alert(this.user.senha);

    // if (this.user.senha != this.navParams.get('pSenha')){
    //   this.navCtrl.push(HomePage);
    // }

  }

  goToProduto() {
    this.navCtrl.push(CadastroProdutoPage);
  }
  goToListaProduto() {
    this.navCtrl.push(ListaProdutoPage);
  }
  goToVendas() {
    this.navCtrl.push(VendasPage);
  }
}
