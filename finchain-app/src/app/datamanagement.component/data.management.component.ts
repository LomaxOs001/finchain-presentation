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

  currentFile?: File;
  isUploadSuccessful = false;
  isUploadFailed = false;
  errorMessage = '';

  constructor(private dms: DataManagementService, private session: SessionStorage) { }

  selectFile(event: any): void {
    this.currentFile = event.target.files.item(0);
  }

  onUpload(): void {
    if (this.currentFile) {
      this.dms.uploadDocuments(this.currentFile, this.session.getToken() || '').subscribe({
        next: data => {
          console.log(data);

          this.isUploadSuccessful = true;
          this.isUploadFailed = false;
        },
        error: err => {

          this.errorMessage = err.error.message;
          this.isUploadFailed = true;
          console.log('Upload failed: ' + err.error.message);
        }
      });
    }

  }

}
