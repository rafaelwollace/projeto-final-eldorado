import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Device } from 'src/app/interface/device';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/service/device.service';
import { Category } from 'src/app/interface/category';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  public category: Category[] = [];


  form!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private deviceService: DeviceService,
    private router: Router,
    private categoryService: CategoryService

    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Category_fk:[''],
      Color:[''],
      PartNumber:['']
    });
  }

  listCategory(){
    this.categoryService.getAll().subscribe((data: Category[])=>{
      this.category = data;
      console.log(this.category);
    })
  }

  cadastrar(){
    const novoDevice = this.form.getRawValue() as Device;
    this.deviceService.createDevice(novoDevice).subscribe(
    ()=>{
      alert("Cadastro Relizado com Sucesso!");
      window.location.reload();
      // this.router.navigate(['device']);
      },
      (error) => {
        console.log('error');
      }
    )
  }
}
