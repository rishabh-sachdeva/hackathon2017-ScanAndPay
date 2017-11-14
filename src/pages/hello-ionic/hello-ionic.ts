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
