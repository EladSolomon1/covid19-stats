import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    imports:[MatToolbarModule,MatIconModule,MatButtonModule,MatCardModule,MatTableModule,MatInputModule,
        MatPaginatorModule,MatTabsModule,MatAutocompleteModule,MatFormFieldModule,MatSortModule,
        MatDialogModule,MatProgressSpinnerModule],
    exports:[MatToolbarModule,MatIconModule,MatButtonModule,MatCardModule,MatTableModule,MatInputModule,
        MatPaginatorModule,MatTabsModule,MatAutocompleteModule,MatFormFieldModule,MatSortModule,
        MatDialogModule,MatProgressSpinnerModule]
})
export class MaterialModule {}