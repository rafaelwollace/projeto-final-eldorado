import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  category: Category[] = [];

 constructor(
   private categoryService: CategoryService,
   private toastr: ToastrService
   ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data: Category[])=>{
      this.category = data;
    })
  }


  deleteCategory(id:number){
    this.categoryService.delete(id).subscribe(res => {
         this.category = this.category.filter(item => item.id !== id);
         this.toastr.error('Categoria Deletada Com Sucesso!!!');
    })
  }



}
