import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() inStock: number = 0;
  @Input() outofStock: number = 0;

  // 1) Basically this is custom event created and raised (selectedFilterRadioButtonChanged).
  // 2) Sending data from Child To parent we use @Output.
  // 3) Now We will use this (selectedFilterRadioButtonChanged) inside <filter tag> means (child tag used in parent html)
  @Output() selectedFilterRadioButtonChanged: EventEmitter<string> =
    new EventEmitter<string>();
  selectedFilterRadioButton: string = "all";
  onSelectedFilterRadioButtonChanged() {
    console.log(this.selectedFilterRadioButton);
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
