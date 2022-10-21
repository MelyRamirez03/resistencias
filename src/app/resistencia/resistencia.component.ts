import{ThisReceiver} from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent implements OnInit {

  constructor() { }

  uno:string='';
  resis1:number=0;
  dos:string='';
  resis2:number=0;
  tres:string='';
  resis3:number=0;
  tol:string='';
  resultado:number=0;
  min:number=0;
  max:number=0;
  celda1:any;
  celda2:any;
  celda3:any;
  celda4:any;

  ngOnInit(): void {
  }


  Calculo(){

    this.celda1=document.getElementById("celda1");
    this.celda2=document.getElementById("celda2");
    this.celda3=document.getElementById("celda3");
    this.celda4=document.getElementById("celda4");

    switch (this.uno) {
      case "negro":
        this.resis1=0;
        this.celda1.style.backgroundColor="black";
        this.celda1.style.color="white";
  
        break;
        case "cafe":
          this.resis1=1;
          this.celda1.style.backgroundColor="rgb(85, 44, 10)"
          this.celda1.style.color="white"
        
        break;
        case "rojo":
          this.resis1=2;
          this.celda1.style.backgroundColor="red"
          this.celda1.style.color="white"
        
        break;
        case "naranja":
          this.resis1=3;
          this.celda1.style.backgroundColor="orange"
          this.celda1.style.color="white"
        
        break;
        case "amarillo":
          this.resis1=4;
          this.celda1.style.backgroundColor="yellow"
          this.celda1.style.color="white"
        
        break;
        case "verde":
          this.resis1=5;
          this.celda1.style.backgroundColor="green"
          this.celda1.style.color="white"
        
        break;
        case "azul":
          this.resis1=6;
          this.celda1.style.backgroundColor="blue"
          this.celda1.style.color="white"
        
        break;
        case "violeta":
          this.resis1=7;
          this.celda1.style.backgroundColor="purple"
          this.celda1.style.color="white"
        
        break;
        case "gris":
          this.resis1=8;
          this.celda1.style.backgroundColor="gray"
          this.celda1.style.color="white"
        
        break;
        case "blanco":
          this.resis1=9;
          this.celda1.style.backgroundColor="white"
          this.celda1.style.color="white"
        
        break;
    
      default:
        this.resis1=20;
        break;
    }
  
    switch (this.dos) {
      case "negro":
        this.resis2=0;
        this.celda2.style.backgroundColor="black"
        this.celda2.style.color="white"
  
        break;
        case "cafe":
          this.resis2=1;
          this.celda2.style.backgroundColor="rgb(85, 44, 10)"
          this.celda2.style.color="white"
        
        break;
        case "rojo":
          this.resis2=2;
          this.celda2.style.backgroundColor="red"
          this.celda2.style.color="white"
        
        break;
        case "naranja":
          this.resis2=3;
          this.celda2.style.backgroundColor="orange"
          this.celda2.style.color="white"
        
        break;
        case "amarillo":
          this.resis2=4;
          this.celda2.style.backgroundColor="yellow"
          this.celda2.style.color="white"
        
        break;
        case "verde":
          this.resis2=5;
          this.celda2.style.backgroundColor="green"
          this.celda2.style.color="white"
        
        break;
        case "azul":
          this.resis2=6;
          this.celda2.style.backgroundColor="blue"
          this.celda2.style.color="white"
        
        break;
        case "violeta":
          this.resis2=7;
          this.celda2.style.backgroundColor="purple"
          this.celda2.style.color="white"
        
        break;
        case "gris":
          this.resis2=8;
          this.celda2.style.backgroundColor="gray"
          this.celda2.style.color="white"
        
        break;
        case "blanco":
          this.resis2=9;
          this.celda2.style.backgroundColor="white"
          this.celda2.style.color="white"
        
        break;
    
      default:
        this.resis2=20;
        break;
    }
    switch (this.tres) {
      case "negro":
        this.resis3=1;
        this.celda3.style.backgroundColor="black"
        this.celda3.style.color="white"
  
        break;
        case "cafe":
          this.resis3=10;
          this.celda3.style.backgroundColor="rgb(85, 44, 10)"
          this.celda3.style.color="white"
        
        break;
        case "rojo":
          this.resis3=100;
          this.celda3.style.backgroundColor="red"
          this.celda3.style.color="white"
        
        break;
        case "naranja":
          this.resis3=1000;
          this.celda3.style.backgroundColor="orange"
          this.celda3.style.color="white"
        
        break;
        case "amarillo":
          this.resis3=10000;
          this.celda3.style.backgroundColor="yellow"
          this.celda3.style.color="white"
        
        break;
        case "verde":
          this.resis3=100000;
          this.celda3.style.backgroundColor="green"
          this.celda3.style.color="white"
        
        break;
        case "azul":
          this.resis3=1000000;
          this.celda3.style.backgroundColor="blue"
          this.celda3.style.color="white"
        
        break;
        case "violeta":
          this.resis3=10000000;
          this.celda3.style.backgroundColor="purple"
          this.celda3.style.color="white"
        
        break;
        case "gris":
          this.resis3=100000000;
          this.celda3.style.backgroundColor="gray"
          this.celda3.style.color="white"
        
        break;
        case "blanco":
          this.resis3=1000000000;
          this.celda3.style.backgroundColor="white"
          this.celda3.style.color="white"
        
        break;
    
      default:
        this.resis3=20;
        break;
    }
  
    this.resultado=(this.resis1*10+this.resis2)*this.resis3;
  
    if (this.tol=="oro") {
      this.max=this.resultado*1.05;
      this.min=this.resultado-(this.resultado*.05);
      this.celda4.style.backgroundColor="gold"
      this.celda4.style.color="white"
    }
    else{
      this.max=this.resultado+(this.resultado*0.10);
      this.min=this.resultado-(this.resultado*0.10);
      this.celda4.style.backgroundColor="silver"
      this.celda4.style.color="white"
    }

  }
}