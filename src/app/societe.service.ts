import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders ,HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SocietesService {
  readonly PhotoUrl = "http://localhost:44356/Photos/";
   
  private baseURL = `https://localhost:44356`;
  private httpHeader ;
  constructor(private http: HttpClient) { 

    this.httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  
  }

  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}/api/v1/societes`)
 }

 
addSociete(name :string, addresse:string): Observable<any> {
  console.log("im here");
  return this.http.post<any>(`${this.baseURL}/api/v1/societes`,
     {
	
	"name": name, 
	"addresse": addresse

     },this.httpHeader
  ).pipe(catchError((error: HttpErrorResponse) => {
    console.warn(
      'the interceptor has caught an error, process it here',
      error
    );
    return throwError(() => error);
  })
);
} 

UploadPhoto(val:any){
  return this.http.post(this.baseURL+'/SaveFile',val);
}
 }
