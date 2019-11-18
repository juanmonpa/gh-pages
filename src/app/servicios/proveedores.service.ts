import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ProveedoresComponent } from '../proveedores/proveedores.component';
import { EditproveeComponent } from '../proveedores/editprovee/editprovee.component';
import { AddproveeComponent } from '../proveedores/addprovee/addprovee.component';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  selectedProvee: ProveedoresComponent;

  provsRef: AngularFireList<any>;
  provRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
  }

  AddProv(proveedor: AddproveeComponent) {
    this.provsRef.push(proveedor)
  }

  // Read Proveedor
  GetProv(id: string) {
    this.provRef = this.db.object('proveedores/' + id);
    return this.provRef;
  }

  // Read Proveedor List
  GetProvList() {
    this.provsRef = this.db.list('proveedores');
    return this.provsRef;
  }
  deleteProv($key: string) {
    this.provsRef.remove($key);
    this.GetProvList();
  }

  createProveedor(proveedor: AddproveeComponent) {
    return this.db.list('proveedores').push(proveedor);
  }

  







}

