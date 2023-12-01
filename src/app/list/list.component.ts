import { Component } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ViewChild, ElementRef, Renderer2 } from '@angular/core';


NgModule({
  declarations: [Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [Component],
})
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @ViewChild("nazwa") nazwa?: ElementRef;
  @ViewChild("lista") lista?: ElementRef;

  constructor(private render: Renderer2){}

  onSubmit(){
    let elementlist = this.render.createElement("li");
    this.render.addClass(elementlist, "list-group-item");
    let date = new Date().toLocaleString();
    elementlist.innerHTML = this.nazwa?.nativeElement.value + "<br>"+ "Dodano: " + date;





    this.render.appendChild(this.lista?.nativeElement, elementlist);
    
  }
  

}





