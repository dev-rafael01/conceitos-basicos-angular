import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { itemlist } from './itemlist';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, NgClass],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  item: string = "";
  lista: itemlist[] = [];

  adicionarItem(){
    let itemList  = new itemlist();
    itemList.nome = this.item;
    itemList.id = this.lista.length + 1;
    this.lista.push(itemList);

    this.item = "";
  }

  riscarItem(itemList: itemlist){
    itemList.comprado = !itemList.comprado;
  }

  limparLista(){
    this.lista = [];
  }

}
