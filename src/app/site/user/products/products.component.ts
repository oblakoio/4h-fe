import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../../../auth/Auth';

@Component({
  selector:'h4fe-products-component',
  templateUrl:'products.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./products.component.scss')[0][1]]
})
export class ProductsComponent implements OnInit {

  public productList:any[] = [
    {
      name:'Ferox demolitiones ducunt ad amor.',
      price:134.99,
      selected:false
    },
    {
      name:'Vae, bromium!',
      price:343.11,
      selected:false
    },
    {
      name:'Seculas manducare!',
      price:441.22,
      selected:false
    }
  ];

  public totalPrice:number;

  constructor(private router:Router,
              private auth:Auth) {
  }

  public onSubmit():void {
    this.router.navigate(['user/payment']);
  }

  public ngOnInit():void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['user/signin']);
    }
  }

}
