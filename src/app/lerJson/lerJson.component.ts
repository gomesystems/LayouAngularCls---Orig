import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Como ler um arquivo JSON no Angular 7 e mostrar o resultado na tela em formato JSON
@Component({
  selector: 'lerJson',
  templateUrl: './lerJson.component.html',
  styleUrls: ['./lerJson.component.css']
})
export class LerJsonComponent implements OnInit {
  result: any;
  urlToJson = 'assets/exemploJson.json';

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });
  }

  title = 'angular-json-file';
}