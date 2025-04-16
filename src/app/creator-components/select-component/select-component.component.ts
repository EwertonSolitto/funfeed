import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { SelectProps } from '../../../models/SelectProps';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './select-component.component.html',
  styleUrl: './select-component.component.css'
})
export class SelectComponent {
  @Input() props!: SelectProps 
  @Input({ required: true }) ngValue!: string

  @Output() changeValue = new EventEmitter<string>()

  onValueChange(): void {
    this.changeValue.emit(this.ngValue);
  } 
}
