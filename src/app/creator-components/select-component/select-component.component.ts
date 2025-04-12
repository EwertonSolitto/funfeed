import { Component, Input } from '@angular/core';
import type { SelectProps } from '../../../models/SelectProps';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-component',
  imports: [CommonModule],
  templateUrl: './select-component.component.html',
  styleUrl: './select-component.component.css'
})
export class SelectComponent {
  @Input() props!: SelectProps 
}
