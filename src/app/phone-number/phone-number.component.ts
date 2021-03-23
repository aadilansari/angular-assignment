import { Component, OnInit } from '@angular/core';
import { Omit } from 'src/utils/omit';

interface PhoneNumberType {
  [key: string]: string;
}

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css'],
})
export class PhoneNumberComponent implements OnInit {
  constructor() {}
  objectKeys = Object.keys;
  phoneNums: PhoneNumberType = { phoneNumber1: '' };
  patt = new RegExp('^[0-9]+$');

  handleInput(event: any) {
    if (event.key !== 'Backspace') {
      if (this.patt.test(event.key)) {
        this.phoneNums[event.target.name]+=event.key
      } else {
        event.preventDefault();
      }
    }
    console.log(this.phoneNums)
  }
  addMoreInp() {
    let totalNumbers = Object.keys(this.phoneNums).length+1;
    this.phoneNums[`phoneNumber${totalNumbers + 1}`] = '';
  }
  handleDelete(ind:string){
    this.phoneNums = Omit(this.phoneNums,ind)
  }
  ngOnInit(): void {}
}
