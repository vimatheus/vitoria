import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
  providers:[
    LoginProvider
  ]
})
export class ContatoPage {

  txtNome:string;
  txtEmail:string;
  txtDuvidas:string;

  login = [];

  constructor(public navCtrl: NavController, public navParams: NavParams , private cProvider: LoginProvider) {
  }

  ionViewDidLoad() {
   
  }


  goToListaDuvida(){
    if((this.txtNome) && (this.txtEmail) && (this.txtDuvidas)){
      this.cProvider.localizarDuvida(this.txtNome, this.txtEmail, this.txtDuvidas).subscribe(
        data=>{
          let resultado = (data as any)._body;
          let resultadojson = JSON.parse(resultado);
          this.login = resultadojson; 
        },
        error=>{
          console.log(error);
        }
      );
    }
  }

}
