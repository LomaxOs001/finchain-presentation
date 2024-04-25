import { Component } from '@angular/core';
import { DataManagementService } from '../services/data/data.management.service';
import { SessionStorage } from '../services/data/session.storage';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [],
  templateUrl: './data.management.component.html',
  styleUrl: './data.management.component.css'
})
export class DataManagementComponent {

  file?: File;
  isUploadSuccessful = false;
  isUploadFailed = false;
  errorMessage = '';

  constructor(private dms: DataManagementService, private session: SessionStorage) { }

  selectFile(event: any): void {
    this.file = event.target.files.item(0);
  }

  onUpload(): void {
    if (this.file) {

      this.isUploadSuccessful = false;
      this.isUploadFailed = false;
      //this.errorMessage = ''; 

      this.dms.uploadDocuments(this.file, this.session.getToken() || '').subscribe({
        next: data => {
          console.log(data);


          this.isUploadSuccessful = true;
          this.isUploadFailed = false;
          window.alert('Upload successful');
        },
        error: err => {

          //this.errorMessage = err.error;
          this.isUploadFailed = true;
          console.log('Upload failed: No Access');
        }
      });
    } else {

      //this.errorMessage = 'No file selected';
      this.isUploadFailed = true;
      window.alert('No file selected');
    }

  }

}
