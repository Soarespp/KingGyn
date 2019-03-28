import { NgModule, Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { ProdutoClass } from '../../classes/produto';
import { Camera, CameraOptions } from "@ionic-native/camera";

@NgModule()

@Component({
  selector: 'page-editar-produto',
  templateUrl: 'editar-produto.html',
  providers: []
})

export class EditarProdutoPage {
  id: string;
  ref: FirebaseObjectObservable<ProdutoClass>;
  produto = {} as ProdutoClass;
  currentPhoto;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public af: AngularFireDatabase,
    public camera: Camera) {

    this.id = this.navParams.get('id');
    this.ref = this.af.object('/produtos/' + this.id);
    this.ref.subscribe(produto => this.produto = produto);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarProdutoPage');
  }

  salvar() {
    this.ref.update(this.produto).then(() => {
      this.viewCtrl.dismiss();
    })
  }
  fechar() {
    this.viewCtrl.dismiss();
  }

  excluir(id) {
    this.ref.remove();
    this.viewCtrl.dismiss();
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
          // this.produto.currentPhoto = currentPhoto;
    
        }, (err) => {
          // Handle error
        });
      }

}
