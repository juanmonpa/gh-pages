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
  //updateProv(proveedor: EditproveeComponent)
  //{
    //this.provsRef.update(proveedor.id, {
      //nombre: proveedor.nombre,
      //cif: proveedor.cif,
      //direccion: proveedor.direccion,
      //cp: proveedor.cp,
      //localidad: proveedor.localidad,
      //provincia: proveedor.provincia,
      //telefono: proveedor.telefono,
      //email: proveedor.email,
      //contacto: proveedor.contacto
    //});
  //}

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
  }

  private errorMgmt(error) {
    console.log(error)
  }

  createProveedor(proveedor: AddproveeComponent) {
    return this.db.list('proveedores').push(proveedor);
  }

  







}

