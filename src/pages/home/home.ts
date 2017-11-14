import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import locations from '../../assets/common/ts/locations';
import shops from '../../assets/common/ts/shops';
import { HelloIonicPage } from '../hello-ionic/hello-ionic'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private listOfLocations = [];
  private listOfShops = [];
  private selectedShopId = null;
  private selectedLocationId = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listOfLocations = locations;
    this.listOfShops = shops;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
  }

  handleShopChangeHandler(shopId) {
    this.selectedShopId = shopId;
    this.listOfLocations = locations.filter((location)=> {
      return location.sid === shopId;
    });
  }

  handleLocationChangeHandler(locationId) {
    this.selectedLocationId = locationId;
  }

  handleShopNowOnClick() {
    console.log(this.selectedShopId);
    console.log(this.selectedLocationId);
    if(this.selectedLocationId !== null && this.selectedShopId !== null) {
      this.navCtrl.push(HelloIonicPage);
    }
  }

}
