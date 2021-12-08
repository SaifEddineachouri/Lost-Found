import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Announce } from 'src/app/Models/Announce';
import { AnnounceServiceService } from './announce-service.service';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css'],
})
export class AnnounceComponent implements OnInit {
  AnnounceForm: FormGroup;
  Announces: Announce[] = [];
  filedata: any;
  closeModal: string;
  formData: FormData;
  preview: string;
  errors = null;
  fileData : any ;

  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder,
    private AnnounceService: AnnounceServiceService,
    private router: Router,
    private Http: HttpClient
  ) {
    this.AnnounceForm = this.fb.group({
      Title: [''],
      Subject: [''],
      Image: [null],
      Content: [''],
      PlaceOfLost: [''],
    });
  }

  ngOnInit(): void {
    this.AnnounceForm = new FormGroup({
      Title: new FormControl(null, [Validators.required]),
      Subject: new FormControl(null, [Validators.required]),
      Image: new FormControl(null, [Validators.required]),
      Content: new FormControl(null, [Validators.required]),
      PlaceOfLost: new FormControl(null, [Validators.required]),
      DateOfLost :  new FormControl(null, [Validators.required])
    });

    this.AnnounceService.getAllAnnounces().subscribe((data: Announce[]) => {
      this.Announces = data;
      console.log(this.Announces);
    });
  }

  triggerModal(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (res) => {
          this.closeModal = `Closed with: ${res}`;
        },
        (res) => {
          this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  uploadFile(event: any) {
    this.filedata = event.target.files[0]
    let reader= new FileReader()

    reader.readAsDataURL(this.filedata)
    reader.onload=(event:any)=>{
      this.preview=event.target.result
    }
    console.log(this.filedata)

    let image= this.filedata;

  }

  onSubmit() {  
  this.AnnounceService.addAnnounce(this.AnnounceForm.value,this.fileData).subscribe(
    (result) => {
      console.log(result);
    },
    (error) => {
      this.errors = error.error;
    },
    () => {
      this.AnnounceForm.reset();
    }
  );
}

  // deleteAnnounce(id: String) {
  //   this.AnnounceService.deleteAnnounce(id).subscribe((res) => {
  //     this.Announces = this.Announces.filter((item) => item.Id !== id);
  //     console.log('Announce deleted successfully!');
  //   });
  // }
}
