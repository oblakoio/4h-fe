import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignInComponent} from './signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations:[
    SignInComponent
  ],
  exports:[
    SignInComponent
  ]
})
export class SignInModule {

}
