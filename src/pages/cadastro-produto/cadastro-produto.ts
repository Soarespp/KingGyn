import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomeAdministradorPage } from '../home-administrador/home-administrador';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ProdutoClass } from '../../classes/produto';
import { Camera, CameraOptions } from "@ionic-native/camera";

@Component({
  selector: 'page-cadastro-produto',
  templateUrl: 'cadastro-produto.html',
})
export class CadastroProdutoPage {
  Lista: FirebaseListObservable<any>;
  produto: ProdutoClass;
  currentPhoto;

  constructor(public navCtrl: NavController, public navParams: NavParams, public AfDb: AngularFireDatabase,
    public camera: Camera) {
    this.Lista = this.AfDb.list('/produtos');
    this.produto = new ProdutoClass();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProdutoPage');
  }

  goToHomeAdmin() {
    this.navCtrl.push(HomeAdministradorPage);
  }

  cadastrar() {
    this.Lista.push(this.produto).then(() => {
      this.produto = new ProdutoClass();
    })
    this.navCtrl.push(HomeAdministradorPage);
  }

  getPhoto(type){
    
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType:this.camera.MediaType.PICTURE,
          sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
          correctOrientation: true
        };
    
        this.camera.getPicture(options).then((imageData) => {
    
          this.produto.currentPhoto = 'data:image/jpeg;base64,' + imageData;
          this.currentPhoto = 'data:image/jpeg;base64,' + imageData;
    
        }, (err) => {
          // Handle error
        });
      }

}
