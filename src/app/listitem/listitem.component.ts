import { IAppState } from "../store/store";
import { Component, OnInit, Input } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { SelectedItemsAction } from "../store/actions";

@Component({
  selector: "listitem",
  templateUrl: "./listitem.component.html",
  styleUrls: ["./listitem.component.css"]
})
export class ListitemComponent implements OnInit {
  @select() selectedItemsArray$;
  @Input() itemName;
  filterList = [];

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {}
  itemsSelected() {
    this.ngRedux.dispatch(SelectedItemsAction(this.itemName));
  }
}
