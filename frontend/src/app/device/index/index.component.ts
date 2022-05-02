import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/interface/device';
import { DeviceService } from 'src/app/service/device.service';
import { ToastrService } from 'ngx-toastr';
import { Category } from './../../interface/category';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  public device: Device[] = [];


  constructor(
      private deviceService: DeviceService,
      private toastr: ToastrService
      ) {};

      ngOnInit(): void {
        this.deviceService.getAll().subscribe((data: Device[])=>{
          this.device = data;
        })
      }


      deleteCategory(id:number){
        this.deviceService.delete(id).subscribe(res => {
             this.device = this.device.filter(item => item.id !== id);
             this.toastr.error('Device Deletado Com Sucesso!!!');
            })
      }
    }

