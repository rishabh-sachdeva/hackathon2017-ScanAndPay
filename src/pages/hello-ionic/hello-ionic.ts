import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';
import { Product } from '../../app/models/product-model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http,Headers } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
// export class Product {
//   private id;
//   private name;
//   private expiry;
// }
export class HelloIonicPage {
  private itemList = [];
  private total = 0;
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner, private storage: Storage, private httpClient: Http) {
    this.storage.get('productList').then((productList) => {
      if(productList) {
        this.itemList = productList;
      }
    });

  }
  public startScanning() {
    
  this.barcodeScanner.scan().then((barcodeData) => {
    this.httpClient.get('http://18.221.126.205:8080/'+barcodeData.text).map(res => res.json()).subscribe(data => {
      this.itemList.push(data);
      this.storage.set('productList', this.itemList); 
      this.total = this.total + data.price;
    });
    
	}, (err) => {
	 alert('Scanning Barcode fail');
  });
  }

  public remove(item) {
    this.total = this.total - item.price;
    this.itemList = this.itemList.filter(i => i !== item);
    this.storage.set('productList', this.itemList); 
  }
  public getTotal() {
    return this.total;
  }

  public checkout() {
    this.total = 0;
    this.itemList = null;
    this.storage.set('productList', this.itemList); 
    alert('Checkout Successful');
    this.navCtrl.setRoot(HomePage);
  }
}
