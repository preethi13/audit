import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AuditHttpService } from '../utility/auditHttpService';
import { FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})

export class AdddepartmentComponent implements OnInit {
  selecthead: SelectItem[];
  items: MenuItem[];
  item: SelectItem[];
  selectlocation: SelectItem[];
  values: string[];
  classification: SelectItem[];
  openaudit: boolean;
  showdialog: boolean;
  memData: any;
  memCols: { field: string; header: string; }[];
  mem1Cols: { field: string; header: string; }[];
  mem2Cols: { field: string; header: string; }[];
  mem3Cols: { field: string; header: string; }[];
  mem1Data: any;
  mem2Data: any;
  mem3Data: any;
  results: string[];
  countries: any[];
  brands: string[] = ['Urban Local Bodies', 'Department of Education', 'Department of Transportation', 'Public Health And Family Welfare', 'Bengaluru Development Authority'];
  brand: string;
  filteredBrands = [];
  selectedDept = {};
  addForm: FormGroup;
  rows: FormArray;
  itemForm: FormGroup;

  constructor(private auditHttpService: AuditHttpService, ) { }

  ngOnInit() {

    this.auditHttpService.getService('./assets/jsons/memdata.json').subscribe(data => {
      this.memData = data;
    });
    this.auditHttpService.getService('./assets/jsons/mem1data.json').subscribe(data => {
      this.mem1Data = data;
    });
    
    this.auditHttpService.getService('./assets/jsons/mem3data.json').subscribe(data => {
      this.mem3Data = data;
    });
    this.mem1Cols = [{ field: 'post', header: 'Post' },
    { field: 'description', header: 'Description' },
    { field: 'email', header: 'Email' }];
   

    this.mem3Cols = [{ field: 'phone', header: 'Phone' },


    { field: 'postalcode', header: 'Postal Code' },
    { field: 'address', header: 'Address' }];


    this.memCols = [{ field: 'unitName', header: ' Unit Name' },
    { field: 'unitId', header: 'Unit ID' },
    { field: 'additional', header: 'Additional Unit Name' },
    { field: 'location', header: ' Location' },
    { field: 'email', header: 'Email' }
    ]


  }
  openAudit() {
    console.log('in open audit');
    this.openaudit = this.openaudit === true ? false : true;
  }
  showDialog() {

    console.log('in open info');
    this.showdialog = this.showdialog === true ? false : true;
  }
  // filterBrands(event) {
  //   this.filteredBrands = [];
  //   for (let i = 0; i < this.brands.length; i++) {
  //       let brand = this.brands[i];
  //       if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
  //           this.filteredBrands.push(brand);
  //       }
  //   }


  //}
  filterCountrySingle(event) {
    let query = event.query;
    this.filteredBrands = this.filterCountry(query, this.brands);
  }
  filterCountry(query, countries: any[]): any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    for (let i = 0; i < this.brands.length; i++) {
      let country = countries[i];
      if (country.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(country);
      }
    }
    return filtered;
  }
  selectDepartment(dept) {
    console.log('in seldept' + this.filteredBrands);
    if (dept === 'Urban Local Bodies') {
      this.selectedDept = {
        name: dept, id: 'AD4680', altname: dept, loc: 'Bengaluru', url: ' http://www.phwkar.gov.in', phone: '08044894483', mail: 'publichealth@karnata.in',
        pincode: '505516', address: 'MS Building, Kalyana Suraksha Bhavan, Ambedkar Nagar'
      };
    } else if (dept === 'Bengaluru Development Authority') {
      this.selectedDept = {
        name: dept, id: 'AD46123', altname: dept, loc: 'Bengaluru', url: ' ', phone: '', mail: 'bda@karnataka.in',
        pincode: '', address: ''
      };
    }
  }

  addDepartment(dept) {
    if (dept === 'Labour Department') {
      confirm(dept + " does not exits. Do you want to create new?");
      this.selectedDept={};
    }
  }
  addRow() {
    this.mem1Data.push({post:'' ,
                       description :'' ,
                       email :' '      });
  }
  addUnitdetails(){
    this.memData.push({unitName:'',
                         unitId:'',
                        additional:'',
                        location:'',
                          email:''

    });
  }
}






