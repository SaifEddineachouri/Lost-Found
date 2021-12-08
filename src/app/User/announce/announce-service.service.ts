import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announce } from 'src/app/Models/Announce';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AnnounceServiceService {
  fileDate: any;
  private apiURL = 'http://localhost:8000/api/Announces/';

  HttpUploadOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
  };
  constructor(private HttpClient: HttpClient) {}

  getAllAnnounces(): Observable<Announce[]> {
    return this.HttpClient.get<Announce[]>(this.apiURL).pipe(
      catchError(this.errorHandler)
    );
  }

  findAnnounceById(id: string): Observable<Announce> {
    return this.HttpClient.get<Announce>(this.apiURL + id).pipe(
      catchError(this.errorHandler)
    );
  }

  addAnnounce(form: FormGroup, file: any) {
    let announce = new Announce(
      form.value.Title,
      form.value.Subject,
      form.value.Image,
      form.value.Content,
      form.value.date,
      form.value.Lieu
    );
    const formData = new FormData();
    formData.append('Announce', JSON.stringify(announce));
    formData.append('Type', JSON.stringify('Lost'));
    formData.append('image', file);

    return this.HttpClient.post('', formData, this.HttpUploadOptions);
  }

  updateAnnounce(id: string, Announce: Announce): Observable<Announce> {
    return this.HttpClient.put<Announce>(
      this.apiURL + id,
      JSON.stringify(Announce),
      this.HttpUploadOptions
    ).pipe(catchError(this.errorHandler));
  }

  deleteAnnounce(id: String) {
    return this.HttpClient.delete<Announce>(
      this.apiURL + id,
      this.HttpUploadOptions
    ).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
