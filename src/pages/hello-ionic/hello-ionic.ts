import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';

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
  constructor(private barcodeScanner: BarcodeScanner, private storage: Storage) {
    this.storage.get('productList').then((productList) => {
      if(productList) {
        this.itemList = productList;
      } else {
        this.itemList.push.apply(this.itemList, ['Item 1','Item 2','Item 3','Item 4']);
      }
    });

  }
  public startScanning() {
    
  this.barcodeScanner.scan().then((barcodeData) => {
    this.itemList.push(barcodeData.text);
    this.storage.set('productList', this.itemList); 
    
	}, (err) => {
	 alert('Scanning Barcode fail');
  });
  }

  public remove(item) {
    this.remove
  }
}
