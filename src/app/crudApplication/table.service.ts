import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class CrudTableService {


    productsList: any = [
        {
            code: 1,
            name: "water",
            category: "Drinks",
            quantity: 20,
            price: 450
        },
        {
            code: 2,
            name: "SmartWatch",
            category: "Electronics",
            quantity: 30,
            price: 980
        },
        {
            code: 3,
            name: "table",
            category: "Furniture",
            quantity: 25,
            price: 730
        }
    ];

    categoryOptions: any = [
        { label: 'Drinks', value: 'Drinks' },
        { label: 'Electronics', value: 'Electronics' },
        { label: 'Furniture', value: 'Furniture' }
    ];

    private apiurl = '../assets/productData.json';
    constructor(private http: HttpClient) {
    }

    getProductData():Observable<any> {
        return this.http.get<any>(this.apiurl);
    }

    saveFormData(data: any):Observable<any> {
        return this.http.put<any>(this.apiurl,data);
    }

    updateFormData(formGroupData:any) {
        const index = this.productsList.findIndex((product:any) => product.code === formGroupData.code);

        if (index != -1) {
            this.productsList[index] = JSON.parse(JSON.stringify(formGroupData));
        } else {
            let productListLength = this.productsList.length;
            formGroupData.code = productListLength + 1;
            this.productsList.push(formGroupData);
        }
    }

    deleteProduct(productRowData: any) {
        const index = this.productsList.findIndex((product: any) => product.code === productRowData.code);
        if(index != -1) {
            this.productsList.splice(index,1);
        }
    }
}