import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  constructor(private http: HttpClient) { }

  uploadDocuments(file: File, token: string): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);

    const headers = this.setRequestToken(token);

    const req = new HttpRequest('POST', `${environment.URL_API}datamanager`, formData, {
      headers: headers,
      //reportProgress: true  // Enable progress tracking for file uploads
    });

    return this.http.request(req);
  }
  getAllDocuments(token: string): Observable<any> {

    const headers = this.setRequestToken(token);

    return this.http.get(`${environment.URL_API}datamanager`, { headers: headers, responseType: 'json' });
  }

  private setRequestToken(token: string): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}