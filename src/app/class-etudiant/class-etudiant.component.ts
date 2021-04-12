import { Component, OnInit } from '@angular/core';
import { List_Class } from './Class-module';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-class-etudiant',
  templateUrl: './class-etudiant.component.html',
  styleUrls: ['./class-etudiant.component.css']
})
export class ClassEtudiantComponent implements OnInit {
  classe : List_Class[]=[
    new List_Class(122,'JEE','Boukil')
  ]
  constructor() { }

  ngOnInit() {}
}
