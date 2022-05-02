import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  form: any = {
    Name: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {}

  onSubmit(): void {
    const { Name } = this.form;

    this.categoryService.createCategory(Name).subscribe({
      next: data => {
        this.isSignUpFailed = false;
        this.toastr.success('Cadastro Efetuado Com Sucesso!!!');
        setTimeout(this.reloadPage, 600);
      },
      error: err => {
        this.toastr.error(err.error.message);
        // this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  reloadPage() {
    window.location.reload();
  }


}
