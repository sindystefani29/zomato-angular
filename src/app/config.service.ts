import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getPodcast() {
    return this.http.get('https://stag-roovcore.mncdigital.com/v2/podcasts');
  }

  login({
    username = '',
    password = ''
  }){
    // example for encrypt and decrypt
    // var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
    // var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    // var originalText = bytes.toString(CryptoJS.enc.Utf8);
    // console.log(ciphertext,originalText)
    const encPassword = CryptoJS.AES.encrypt(password, 'password').toString()
    return this.http.post('http://localhost:3000/login', {
      "last_login_device": "",
      "password": encPassword,
      "username": username
    });
  }
}
