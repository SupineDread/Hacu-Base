import { NgModule } from '@angular/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';

export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'L',
        monthYearA11yLabel: 'M YYYY',
    },
};

@NgModule({
    imports: [
        MatMomentDateModule,
        MatButtonModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatTooltipModule,
        MatDialogModule,
        MatTableModule,
        MatDatepickerModule,
    ],
    exports: [
        MatMomentDateModule,
        MatButtonModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatTooltipModule,
        MatDialogModule,
        MatTableModule,
        MatDatepickerModule,
    ],
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
        { provide: MAT_DATE_LOCALE, useValue: 'es-mx' }
    ]
})

export class MaterialModule { }