import { Component, OnInit, Input } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "../store/store";
import { DeleteItemsAction } from "../store/actions";

@Component({
  selector: "selected-items",
  templateUrl: "./selected-items.component.html",
  styleUrls: ["./selected-items.component.css"]
})
export class SelectedItemsComponent implements OnInit {
  @Input() selectedItemName;
  @Input() itemIndex;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {}

  onclosebtn() {
    this.ngRedux.dispatch(DeleteItemsAction(this.itemIndex));
  }
}
