import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastrosPage } from '../cadastros/cadastros';
import { AngularFireModule } from 'angularfire2';
import { HomeAdministradorPage } from '../home-administrador/home-administrador';
import { AngularFireAuthModule ,AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  senha: string;


  constructor(public navCtrl: NavController, private fire:AngularFireAuth, public navParams: NavParams) {
  }

  goToCadastros() {
    this.navCtrl.push(CadastrosPage);
  }

  login() {
    this.fire.auth.signInWithEmailAndPassword(this.email,this.senha).then(
      data => {
        this.navCtrl.push(HomeAdministradorPage, { pUser:  this.email, pSenha: this.senha });    
      }
    ).catch( Error => {
      // console.log('got an error', error);
      alert('Usuário negado');
    })

    // this.navCtrl.push(HomeAdministradorPage, { pUser:  this.email, pSenha: this.senha });
 }

  goToHomeUser(pUser, pSenha) {
      this.navCtrl.push(HomeAdministradorPage, { pUser: pUser, pSenha: pSenha });
  }
}
