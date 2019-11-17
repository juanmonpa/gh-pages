import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { ProveedoresComponent } from '../proveedores.component';



@Component({
  selector: 'app-editprovee',
  templateUrl: './editprovee.component.html',
  styleUrls: ['./editprovee.component.css']
})
export class EditproveeComponent implements OnInit {
  proveedor: any;
  formpro: FormGroup;
  id: string;
  $key: any;
  provincias: any [] = [
    'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona',
    'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba',
    'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
    'Guipúzcoa', 'Huelva', 'Huesca', 'IslasBaleares', 'Jaén', 'León', 'Lérida', 'Lugo',
    'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas',
    'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
    'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
    'Zamora', 'Zaragoza']

  constructor(private pf: FormBuilder,
    private proveedorService: ProveedoresService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params
      .subscribe(parametros => {
        this.id = parametros['id'];
        console.log(this.id)
        this.proveedorService.GetProv(this.id).valueChanges()
          .subscribe(proveedor => {
            this.proveedor = proveedor;
            console.log(this.proveedor);
          })
      });

  }

  ngOnInit() {
    this.formpro = this.pf.group({
      nombre: ['',Validators.required],
      cif: ['',Validators.required],
      direccion: ['',Validators.required],
      cp: ['',Validators.required],
      localidad: ['',Validators.required],
      provincia: ['',Validators.required],
      telefono: ['',Validators.required],
      email: ['',Validators.required],
      contacto: ['',Validators.required]
  });
  }

    onSubmit() {
      this.proveedor = this.saveProveedor();
      this.proveedorService.AddProv(this.proveedor);
      this.router.navigate(['/proveedores']);
    }
    saveProveedor() {
      const saveProveedor = {
        nombre: this.formpro.get('nombre').value,
        cif: this.formpro.get('cif').value,
        direccion: this.formpro.get('direccion').value,
        cp: this.formpro.get('cp').value,
        localidad: this.formpro.get('localidad').value,
        provincia: this.formpro.get('provincia').value,
        telefono: this.formpro.get('telefono').value,
        email: this.formpro.get('email').value,
        contacto: this.formpro.get('contacto').value
      };
      return saveProveedor;
  
    }



}


