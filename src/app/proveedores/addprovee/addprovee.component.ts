import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService} from '../../servicios/proveedores.service';
@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})

export class AddproveeComponent implements OnInit {
  formpro : FormGroup;
  proveedor :any;
  provincias: string[] = [
    'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona',
    'Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
    'La Coruña','Cuenca','Gerona','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','IslasBaleares','Jaén','León','Lérida','Lugo',
    'Madrid', 'Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas',
    'Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
    'Zamora','Zaragoza' ]

  constructor(private pf: FormBuilder, private proveedorService: ProveedoresService) {
   }
   onSubmit(){
this.proveedor = this.saveProveedor();
this.proveedorService.AddProv(this.proveedor);
    this.formpro.reset();
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
        email: ['',Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        contacto: ['',Validators.required]
    });
  }
  saveProveedor(){
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
