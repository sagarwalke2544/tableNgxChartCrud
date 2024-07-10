import { Component } from "@angular/core";
import { DialogService } from 'primeng/dynamicdialog';
import { EditDialogComponent } from "../dialogs/edit-dialog/edit-dialog.component";
import { CrudTableService } from "../table.service";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
})

export class TableComponent {
    products: any = [];

    single: any = [];
    multi: any = [];
    dataArr: any = [];

    view: any = [700, 400];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Category';
    showYAxisLabel = true;
    yAxisLabel = 'Quantity';

    constructor(
        private dialogService: DialogService,
        private crudTableService: CrudTableService
    ) { }

    ngOnInit() {
        this.products = this.crudTableService.productsList;
        this.setChartData();
    }

    addEditRowData(product?: any) {
        const ref = this.dialogService.open(EditDialogComponent, {
            width: '50%',
            data: { product }
        })
        ref.onClose.subscribe((data: any) => {
            this.setChartData();
        })
    }

    deleteRowData(product: any) {
        this.crudTableService.deleteProduct(product);
        this.setChartData();
    }

    setChartData() {
        this.dataArr = [];
        this.crudTableService.categoryOptions.forEach((category:any) => {
            const chartObj = {
                name: category.value, 
                value: 0
            };
            this.crudTableService.productsList.forEach((data: any) => {
                if (chartObj.name === data.category) {
                    chartObj.value += data.quantity;
                }
            });
            if (chartObj.value) {
                this.dataArr.push(chartObj);
            }
        });
    }
}