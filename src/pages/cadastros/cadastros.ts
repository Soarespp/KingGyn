import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { UsuarioClass } from '../../classes/usuario';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastros',
  templateUrl: 'cadastros.html',
})
export class CadastrosPage {
  Lista: FirebaseListObservable<any>;
  user: UsuarioClass;

  constructor(public navCtrl: NavController, public navParams: NavParams, public AfDb: AngularFireDatabase) {
    this.Lista = this.AfDb.list('/usuarios');
    this.user = new UsuarioClass();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrosPage');
  }

  cadastrar(){
    this.Lista.push(this.user).then(() => {
      this.user = new UsuarioClass();
    })
    this.navCtrl.push(HomePage);
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }

}
