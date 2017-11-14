import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private barcodeScanner: BarcodeScanner) {

  }
  public startScanning() {
  this.barcodeScanner.scan().then((barcodeData) => {
	 alert('scanning succces');
	}, (err) => {
	    alert('scanning failed');
	});
	
  }
}
