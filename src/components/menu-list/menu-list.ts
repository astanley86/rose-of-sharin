import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlantService } from '../../providers/plant-service'


@Component({
  selector: 'menu-list',
  templateUrl: 'menu-list.html'
})
export class MenuList {

  items = [];

  constructor(public navCtrl: NavController, private plantService: PlantService) {
    this.getPlants();
  }

  viewItem(item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  getPlants() {
    this.plantService.getPlants().subscribe(data => this.items = data )
  }

}
