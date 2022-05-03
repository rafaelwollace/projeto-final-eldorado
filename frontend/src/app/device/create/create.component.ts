import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/service/device.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  form: any = {
    Color: null,
    PartNumber: null,
    Category_fk: 1
  };


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  public category: Category[] = [];

  constructor(
    private deviceService: DeviceService,
    private toastr: ToastrService,
    private categoryService: CategoryService
    ) { }

  ngOnInit(): void {
      this.categoryService.getAll().subscribe((data: Category[])=>{
        this.category = data;
      })
    }

  onSubmit(): void {
    const { Color, PartNumber, Category_fk } = this.form;

    this.deviceService.createDevice(Color, PartNumber, Category_fk).subscribe({
      next: data => {
        this.isSignUpFailed = false;
        this.toastr.success('Cadastro Efetuado Com Sucesso!!!');
        setTimeout(this.reloadPage, 600);
      },
      error: err => {
        this.toastr.error(err.error.message);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  reloadPage() {
    window.location.reload();
  }

}
