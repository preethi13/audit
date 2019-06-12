import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-geographic',
  templateUrl: './geographic.component.html',
  styleUrls: ['./geographic.component.css']
})
export class GeographicComponent implements OnInit {
  districts : SelectItem[];
  constructor() { }

  ngOnInit() {
    this.districts =[
    {label : 'Bangalore', value: 'Bangalore' },
    { label: 'Belgaum', value: 'Belgaum' },
   // { label: 'Mysore', value: 'Mysore' },
    
    { label: 'Tumkur', value: 'Tumkur' },
    { label: 'Gulbarga', value: 'Gulbarga' },    
    { label: 'Bellary', value: 'Bellary' },
    { label: 'Bijapur', value: 'Bijapur' },
    { label: 'Dakshina Kannada', value: 'Dakshina Kannada' },
    { label: 'Davanagere', value: 'Davanagere' },
    { label: 'Raichur', value: 'Raichur' },
    { label: 'Bagalkot', value: 'Bagalkot' },
    { label: 'Dharwad', value: 'Dharwad' },
    { label: 'Shimoga', value: 'Shimoga' },
    { label: 'Bidar', value: 'Bidar' },
    { label: 'Chitradurga', value: 'Chitradurga' },
    { label: 'Haveri', value: 'Haveri' },
  ]
    

}

}