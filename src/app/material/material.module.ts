import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatFormFieldModule, MatRadioModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatNavList, MatMenuModule, MatMenu, MatInputModule, MatTooltipModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  exports : [
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  declarations: []
})
export class MaterialModule { }
