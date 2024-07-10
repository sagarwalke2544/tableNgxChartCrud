import { NgModule } from "@angular/core";
import { TableRoutingModule } from "./table.routing.module";
import { TableModule } from 'primeng/table';
import { TableComponent } from "./tableComponent/table.component";
import {ButtonModule} from 'primeng/button';
import { EditDialogComponent } from "./dialogs/edit-dialog/edit-dialog.component";
import { DialogModule } from 'primeng/dialog';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
    imports: [
        TableRoutingModule,
        TableModule,
        ButtonModule,
        DialogModule,
        DynamicDialogModule,
        BrowserAnimationsModule,
        InputTextModule,
        ReactiveFormsModule,
        FormsModule,
        NgxChartsModule,
        DropdownModule
    ],
    exports: [
        TableModule,
        ButtonModule
    ],
    declarations: [
        TableComponent,
        EditDialogComponent
    ],
    providers: [DialogService]
})

export class CrudTableModule { }