import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const basebuyUrl = "http://localhost:8080/buy"
const createbuyUrl = "http://localhost:8080/buy/add"
const delbuyUrl = "http://localhost:8080/buy/del"
const putbuyUrl = "http://localhost:8080/buy/put"

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  constructor(private _http:HttpClient) { }
//get all 
getAllbuy():Observable<any>{
  const url = "http://localhost:8080/allbuy"
  return this._http.get<any>(url)
}

 // create
 createbuy(buy: any):Observable<any>{
  console.log(buy,'createapi=>');
  return this._http.post(createbuyUrl, buy)
}

//deleting 

deletebuy(id: any): Observable<any> {
  return this._http.delete(`${delbuyUrl}/${id}`);

}

//update 
updatebuy(id: any, buy: any): Observable<any> {
  return this._http.put(`${putbuyUrl}/${id}`, buy);

}

//get one 
getOnebuy(id:any):Observable<any>{
  return this._http.get(`${basebuyUrl}/${id}`);
}

}
