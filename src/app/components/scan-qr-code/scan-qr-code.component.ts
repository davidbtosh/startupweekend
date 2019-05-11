import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-qr-code',
  templateUrl: './scan-qr-code.component.html',
  styleUrls: ['./scan-qr-code.component.scss']
})
export class ScanQrCodeComponent implements OnInit {

  //elementType : 'url' | 'canvas' | 'img' = 'url';
  elementType : 'canvas';
  value : string = 'CafeX';

  constructor() { }

  ngOnInit() {
  }

}
