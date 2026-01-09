import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './authentication.html',
  styleUrl: './authentication.css',
})
export class Authentication {



  protected signinforms!: UntypedFormGroup;


  //  protected signinformsExemplo!: UntypedFormGroup;


  constructor(private fb: UntypedFormBuilder) {
    this.signinforms = this.fb.nonNullable.group({
      email: [''],
      password: ['']
    });
  }

    onsubmit() {
      console.log("Meu Forms", this.signinforms.value);
    }


    /**Exemplo Didático */
    // this.signinformsExemplo = this.fb.nonNullable.group({
    //   email: ['Paula'],
    //   password: ['Vasco']
    // });

    //  console.log( "Zelito", this.signinformsExemplo.value)

    }

/**Exemplos clicks */
// exemploclick() {
// console.log("clicou");
// }

// exemploMouseOver() {
// console.log("passou o mouse sobre");
// }



