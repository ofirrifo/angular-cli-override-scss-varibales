import { NgModule } from '@angular/core';
import { SolLibComponent } from './sol-lib.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
  ],
  declarations: [SolLibComponent, TestComponent],
  exports: [SolLibComponent, TestComponent]
})
export class SolLibModule { }
