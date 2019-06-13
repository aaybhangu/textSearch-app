import { Component, OnInit } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store/store";
import { FilterItemsAction, DeleteItemsAction } from "../store/actions";
import namesList from "../../assets/names.json";

@Component({
  selector: "app-textarea",
  templateUrl: "./textarea.component.html",
  styleUrls: ["./textarea.component.css"]
})
export class TextareaComponent implements OnInit {
  textValue = "";

  constructor(private ngRedux: NgRedux<IAppState>) {}
  listItems: string[] = namesList;
  filteredItems: string[] = [];
  selectedItems: string[] = [];
  @select() selectedItemsArray$;

  ngOnInit() {
    this.selectedItemsArray$.subscribe(items => {
      this.selectedItems = items;
    });
  }
  filterItem() {
    if (this.textValue.search("@") >= 0) {
      const searchStr: string = this.textValue.replace("@", "");
      this.filteredItems = this.listItems.filter(
        item => item.toLowerCase().indexOf(searchStr.toLowerCase()) > -1
      );
    }
    this.ngRedux.dispatch(FilterItemsAction(this.filteredItems));
  }
  onKey(event: any) {
    if (!event.target.value && this.selectedItems.length) {
      this.ngRedux.dispatch(DeleteItemsAction(this.selectedItems.length - 1));
    }
  }
}
