import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  searchText: string = "";

  @Output() SearchTextChange: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChange() {
    this.SearchTextChange.emit(this.searchText);
  }
  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }
  onClick() {
    alert(this.searchText);
  }
}
