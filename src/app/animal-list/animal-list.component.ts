import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals:Array<Object>;

  constructor() { 
   
    this.animals = [ 
     
        new Animal('Badi','pas','4.05.2005.'),
      
         new Animal('Sarac','konj','14.09.2015.'),
        
      
        new Animal('Mili','macka','3.12.2016.'),
        
      
        new Animal('Cile','hrcak','25.10.2017.'),
      
     
        new Animal('Poli','papagaj',''),
      
 ];
 }
 removeAnimal(animal){
  let index = this.animals.indexOf(animal);
  this.animals.splice(index,1);
 
}

  ngOnInit() {
  }

}
