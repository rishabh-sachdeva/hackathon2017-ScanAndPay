import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class Product {
  private id;
  private name;
  private expiry;
}
export class HelloIonicPage {
  private itemList = [];
  constructor(private barcodeScanner: BarcodeScanner, private storage: Storage) {
    this.storage.get('productList').then((productList) => {
      if(productList) {
        this.itemList = productList;
      }
    });

  }
  public startScanning() {
    let productIdFromBarcode;
  this.barcodeScanner.scan().then((barcodeData) => {
    productIdFromBarcode = barcodeData.text;
	}, (err) => {
	 alert('Scanning Barcode fail');
  });
  
  this.itemList.push(productIdFromBarcode);
  this.storage.set('productList', this.itemList); 
	
  }
}
