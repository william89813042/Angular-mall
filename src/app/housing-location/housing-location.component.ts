import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  /*您必須添加 ！，因為 input 需要傳遞值。在這種情況下，沒有預設值。
  在我們的範例應用程式案例中，我們知道將傳入該值 - 這是設計使然。感嘆號稱為非 null 斷言運算符，
  它告訴 TypeScript 編譯器此屬性的值不會為 null 或 undefined。*/
  @Input() housingLocation!: HousingLocation;
}
