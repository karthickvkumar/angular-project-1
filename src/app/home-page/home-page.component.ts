import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ProductApiService} from '../product-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  productList : any = [];
  productInfo : any = {
    name : '',
    price : '',
    cover_image : '',
    category: '',
    description : ''
  }

  constructor(private modalService: NgbModal, private api : ProductApiService) { }

  ngOnInit(): void {
    this.listProduct();
  }

  listProduct(){
    this.api.listProduct().subscribe((response) => {
      console.log(response)
      this.productList = response;
    }, (error) => {
      console.log(error)
    })
  }

  open(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true}).result.then((result) => {
      console.log(result)
      this.api.addProduct(result).subscribe((response) => {
        console.log(response);
        this.listProduct();
      }, (error) => {
        console.log(error)
      })

    }, (reason) => {
      console.log('Close Model 2')
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
