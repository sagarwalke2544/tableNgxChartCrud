import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { CrudTableService } from "../../table.service";

@Component({
    selector: 'app-edit-dialog',
    templateUrl: './edit-dialog.component.html'
})
export class EditDialogComponent implements OnInit {
    productData: any;
    productFormGroup: any = FormGroup;
    categoryOptions: any = [];

    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private tableService: CrudTableService,
        private fb: FormBuilder,
    ) {
        this.createForm();
    }
    ngOnInit(): void {
        this.productData = this.config.data?.product;
        this.categoryOptions = this.tableService.categoryOptions;
        if (this.productData) {
            this.productFormGroup.patchValue(this.productData);
            this.productFormGroup.get('category').patchValue(this.categoryOptions.find((item: any) => (item.value == this.productData.category)));
        }
    }

    createForm() {
        this.productFormGroup = this.fb.group({
            code: [''],
            name: ['', [Validators.required]],
            category: ['', [Validators.required]],
            quantity: ['', [Validators.required]],
            price: ['', [Validators.required]],
        })
    }

    saveProduct(event: Event) {
        let formGroupData = this.productFormGroup.getRawValue();
        formGroupData.category = formGroupData.category.value;
        this.tableService.updateFormData(formGroupData);
        this.ref.close();
    }
}