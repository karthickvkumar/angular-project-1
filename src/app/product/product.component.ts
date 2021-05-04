import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('item') product : any;
  @Output() messageEvent = new EventEmitter();

  constructor(private modalService: NgbModal, private api : ProductApiService) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {centered: true, size : 'xl'}).result.then((result) => {
        // OK
        console.log(result)
        if(result.type == "delete"){
          this.api.deleteProduct(result.value).subscribe((response : any) => {
            console.log(response)
            this.messageEvent.emit(response);
          }, (error) => {
            console.log(error)
          })
        }
        else if(result.type == "edit"){
          this.api.editProduct(result.value).subscribe((response : any) => {
            console.log(response)
          }, (error) => {
            console.log(error)
          })
        }
    }, (reason) => {
       // Cancel
    });
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

}
