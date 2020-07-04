import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ingredient} from "../../shared/ingredient.model";
import {shoppingListService} from "../shopping-list.service";


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput',{static: false})nameInputRef: ElementRef;
  @ViewChild('amountInput',{static: false})amountInputRef: ElementRef;


  constructor(private shoppingListService:shoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingname = this.nameInputRef.nativeElement.value;
    const ingamount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredient(ingname,ingamount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
