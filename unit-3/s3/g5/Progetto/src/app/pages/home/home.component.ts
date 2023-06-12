import { Component } from '@angular/core';
import { Photo } from './models/photos';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
    photos: Photo[] | undefined;
    constructor(private photoSrv: PhotosService) {}
  
    ngOnInit(): void {
      this.photoSrv.get().subscribe((photos) => {
        this.photos = photos;
        console.log(photos);
      },(err)=>{
        alert(err)
      });
    }
  
    onDeletePhoto(id:number,index:number){
      this.photoSrv.delete(id).subscribe((ris)=>{
        console.log(ris)
        this.photos?.splice(index,1)
      },err=>{
        alert(err)
      })
  
    }
  
    onFavorite(){
      this.photoSrv.addFavorite()
    }
}

