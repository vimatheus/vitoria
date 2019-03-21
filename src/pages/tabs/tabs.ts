import { Component } from '@angular/core';

import { ProdutosPage } from '../produtos/produtos';
import { HomePage } from '../home/home';
import { ContatoPage } from '../contato/contato';




@Component({
  
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  produtosRoot = ProdutosPage;
  contatoRoot = ContatoPage;


  constructor() {}

}
