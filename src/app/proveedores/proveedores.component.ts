import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';





@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  proveedores: any[] = [];
  id: string;
  $key: any;
  proveedor : any;
  constructor(private proveedoresService: ProveedoresService) {
    
    
  }


  ngOnInit() {
    this.proveedoresService.GetProvList()
      .snapshotChanges().subscribe(proveedores => {
        proveedores.forEach(item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
          this.proveedores.push(a as ProveedoresComponent)
        })
      })
  }
  deleteProveedor($key: string) {
    if (confirm('¿Estas seguro que deseas eliminarlo?')) {
      this.proveedoresService.deleteProv($key);
      this.proveedores = [];
      this.proveedoresService.GetProvList()
      .snapshotChanges().subscribe(proveedores => {
        proveedores.forEach(item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
          this.proveedores.push(a as ProveedoresComponent)
        })
      });
    }
  }
  onEdit(proveedor: ProveedoresComponent) {
    this.proveedoresService.selectedProvee = Object.assign({}, proveedor);
  }

}

