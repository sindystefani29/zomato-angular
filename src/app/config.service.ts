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
  }) {
    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt(password, 'password').toString();

    // Decrypt
    // var bytes = CryptoJS.AES.decrypt(ciphertext, 'password');
    // var originalText = bytes.toString(CryptoJS.enc.Utf8);

    return this.http.post('/api/login', {
      "last_login_device": "",
      "password": ciphertext,
      "username": username
    });
  }
}
