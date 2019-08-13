import { Component, OnInit } from '@angular/core';
import { Organisation } from './organisation';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-organisationdisplay',
  templateUrl: './organisationdisplay.component.html',
  styleUrls: ['./organisationdisplay.component.css']
})
export class OrganisationdisplayComponent implements OnInit {
  closeResult: string;
  updatedItem;

  org_name='';
  org_desc='';
  org_add1='';
  org_add2='';
  org_city='';
  org_state='';
  org_zip;
  org_country='';
  org_phone1;
  org_phone2;
  org_website='';
  org_fax='';
  arr:Organisation[]=[
    new Organisation('Sky cliff IT','Software products and services','gandhi nagar','shetter colony','dharwad','Karnataka',565425,'India',9875434345,8765432143,'www.skycliff.com','233'),
    new Organisation('Tata cunsultancy services','Top It company in india','J P nagar','2nd cross','bangalore','Karnataka',565425,'India',9875434345,8765432143,'www.tata.com','233'),
    new Organisation('Wipro PVT LTD','IT Company','hebbal','beside SBI bank','bangalore','Karnataka',565425,'India',9875434345,8765432143,'www.wipro.com','789'),
    new Organisation('Infosys','IT company','Electronic city','Konnappana agrahara','bangalore','Karnataka',565425,'India',9875434345,8765432143,'www.infosys.com','546')

    ];



  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  onOrganisationDelete(item:Organisation){

        var userPreference;
        if (confirm("Do you want to delete?") == true){
          this.arr.splice(this.arr.indexOf(item),1);
           alert('deleted successfully');
      }
      else {
        userPreference = "Save Cancelled!";
    }
  }


  onSearch(value){
  if (value != "")
  {
    this.arr = this.arr.filter(x => x.org_name.indexOf(value) != -1);
  }

  }
// pop-up for add organisation
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'},).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


/// get dismiss function
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

// Add Method
  onAddOrg(f) {
      this.arr.push(new Organisation(this.org_name,this.org_desc,this.org_add1, this.org_add2,this.org_city,this.org_state,this.org_zip,this.org_country,this.org_phone1,this.org_phone2,this.org_website,this.org_fax));
    alert("Added Successfully");

  }


  //  Edit method

  openEdit(content1, i) {
    console.log(i);
    this.org_name = this.arr[i].org_name;
    this.org_desc=  this.arr[i].org_desc;
    this.org_add1=  this.arr[i].org_add1;
    this.org_add2=  this.arr[i].org_add2;
    this.org_city=  this.arr[i].org_city;
    this.org_state=  this.arr[i].org_state;

    this.org_zip=  this.arr[i].org_zip;
    this.org_country=  this.arr[i].org_country;
    this.org_phone1=  this.arr[i].org_phone1;
    this.org_phone2=  this.arr[i].org_phone2;
    this.org_website=  this.arr[i].org_website;
    this.org_fax=  this.arr[i].org_fax;

    this.updatedItem = i;
    console.log(this.org_name);
    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  //Update method
    UpdateItem() {
      //console.log(f.value);
      let data = this.updatedItem;
      // console.log(data);
      for (let i = 0; i < this.arr.length; i++) {
        if (i == data) {
          this.arr[i].org_name= this.org_name;
          this.arr[i].org_desc = this.org_desc;
          this.arr[i].org_add1 = this.org_add1;
          this.arr[i].org_add2 = this.org_add2;
          this.arr[i].org_city = this.org_city;
          this.arr[i].org_state = this.org_state;
          this.arr[i].org_zip = this.org_zip;
          this.arr[i].org_country = this.org_country;

          this.arr[i].org_website = this.org_website;
          this.arr[i].org_phone1 = this.org_phone1;
          this.arr[i].org_phone2 = this.org_phone2;
          this.arr[i].org_fax = this.org_fax;
          console.log(this.arr);

          this.org_name='';
          this.org_desc='';

          this. org_add1='';
          this.org_add2='';
          this.org_city='';
          this.org_state='';
          this.org_zip;
          this.org_country='';
          this.org_phone1;
          this.org_phone2;
          this.org_website='';
          this.org_fax='';
          alert('Updated Successfully');
        }
      }

    }


}


