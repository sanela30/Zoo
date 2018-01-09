import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals:Array<Object>;

  constructor() { 
   
    this.animals = [     
      {
     ime: 'Badi',
     vrsta:  'pas',
     datum_rodjenja:'4.05.2005.'
   },
   {
    ime: 'Sarac',
    vrsta:  'konj',
    datum_rodjenja:'14.09.2015.'
   },
   {
    ime: 'Mili',
    vrsta:  'macka',
    datum_rodjenja:'3.12.2016.'
   },
   {
    ime: 'Cile',
     vrsta:  'hrcak',
     datum_rodjenja:'25.10.2017.'
   },
   {
    ime: 'Poli',
    vrsta:  'papagaj',
    // datum_rodjenja:'13.01.2014.'
   }
 ];
 }
 removeAnimal(animal){
  let index = this.animals.indexOf(animal);
  this.animals.splice(index,1);
 
}

  ngOnInit() {
  }

}
