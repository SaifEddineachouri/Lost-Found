import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    let token = localStorage.getItem('token');
    let headers = null;

    if(token){
      headers = new HttpHeaders({
        'Authorization' : `Bearer ${token}`,
      });
    }else{
      headers = new HttpHeaders({
    });
    }
    const requestChange = req.clone({headers});
    console.log(requestChange);
    return next.handle(requestChange);
  }
} 