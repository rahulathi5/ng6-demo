import {  
  ReactiveFormsModule,  
  NG_VALIDATORS,  
  FormsModule,  
  FormGroup,  
  FormControl,  
  ValidatorFn,  
  Validator  
 } from '@angular/forms';  
 import { Directive,ElementRef,Input,Output,EventEmitter,HostListener,Inject } from '@angular/core';  

@Directive({  
  selector: '[uiForm]'
 })  
export class FormValidator {  

  private elementRef: ElementRef;
  _ngForm;

  // The ngForm name
  @Input('uiForm')
  set ngForm(form: Object) {
    this._ngForm =form;
  }
  
  // The form Submit Function
  @Output() submitFn = new EventEmitter();
  
  @HostListener('submit',["$event"]) 
  onSubmit(){
    if(this._ngForm.valid){
      this.submitFn.emit(true);
    }else{
      console.log('invalid');
      Object.keys(this._ngForm.controls).forEach(key =>{
        let errors = this._ngForm.controls[key].errors;
        console.log(errors);
        if(errors){
          this._ngForm.controls[key].markAsDirty();
        }
      });

    }
  } 

  constructor(elementRef: ElementRef) {}
}

@Directive({  
  selector: '[ui-email][ngModel]',  
  providers: [  
   {  
    provide: NG_VALIDATORS,  
    useExisting: EmailValidator,  
    multi: true  
   }  
  ]  
 })  
export class EmailValidator implements Validator {  
  validator: ValidatorFn;  
  constructor() {  
   this.validator = this.emailValidator();  
  }  
  validate(c: FormControl) {  
   return this.validator(c);  
  }  
 
 emailValidator(): ValidatorFn {  
   return (c: FormControl) => {  
    let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);  
    if (isValid) {  
     return null;  
    } else {  
     return {  
      uiEmail:{
        valid:false
      }
     };  
    }  
   }  
  }  
}


//  @Directive({  
//   selector: '[ui-number][ngModel]',  
//   providers: [  
//    {  
//     provide: NG_VALIDATORS,  
//     useExisting: NumberValidator,  
//     multi: true  
//    }  
//   ]  
//  })  
//  export class NumberValidator implements Validator {  
//   validator: ValidatorFn;  
//   inputElem;
//   constructor(elementRef: ElementRef) {  
//     this.inputElem = elementRef.nativeElement;
//     this.validator = this.numberValidator();  
//   }  
//   validate(c: FormControl) {  
//    return this.validator(c);  
//   }  
 
//  numberValidator(): ValidatorFn {  
//        this.inputElem.onkeydown = function(event){
//      switch (event.keyCode) {
//             case 48:
//             case 49:
//             case 50:
//             case 51:
//             case 52:
//             case 53:
//             case 54:
//             case 55:
//             case 56:
//             case 57:
//             case 96:
//             case 97:
//             case 98:
//             case 99:
//             case 100:
//             case 101:
//             case 102:
//             case 103:
//             case 104:
//             case 105:
//             case 8:
//             case 9:
//             case 13:
//               break;
//             case 190:              
//                 event.preventDefault();
//               break;
//             default:
//                 event.preventDefault();
//               break;
//           }
//    }
//    return (c: FormControl) => {  
//     let isValid = /^\d{1,}$/.test(c.value);  
//     if (isValid) {  
//      return null;  
//     } else {  
//      return {  
//       uiNumber:{
//         valid:false
//       }
//      };  
//     }  
//    }  
//   }  
//  }



//  @Directive({  
//   selector: '[ui-url][ngModel]',  
//   providers: [  
//    {  
//     provide: NG_VALIDATORS,  
//     useExisting: URLValidator,  
//     multi: true  
//    }  
//   ]  
//  })  
//  export class URLValidator implements Validator {  
//   validator: ValidatorFn;  

//   constructor(elementRef: ElementRef) {  
//     this.validator = this.urlValidator();  
//   }  
//   validate(c: FormControl) {  
//    return this.validator(c);  
//   }  
 
//  urlValidator(): ValidatorFn {  
       
//    return (c: FormControl) => {  
//     let isValid = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(c.value);  
//     if (isValid) {  
//      return null;  
//     } else {  
//      return {  
//       uiURL:{
//         valid:false
//       }
//      };  
//     }  
//    }  
//   }  
//  }


//  @Directive({  
//   selector: '[uiRange][ngModel]',  
//   providers: [  
//    {  
//     provide: NG_VALIDATORS,  
//     useExisting: RangeValidator,  
//     multi: true  
//    }  
//   ]  
//  })  
//  export class RangeValidator implements Validator {  
//   validator: ValidatorFn;  
//   _range :  Array<Number>;

//   @Input('uiRange') uiRange : Array<Number>

//   ngOnChanges(){
//     if(this.uiRange && Array.isArray(this.uiRange) && this.uiRange.length===2){
//       this.validator = this.rangeValidator(this.uiRange);  
//     }
//   }
//   validate(c: FormControl) {  
//    return this.validator(c);  
//   }  
 
//  rangeValidator(range): ValidatorFn {
//    this._range = range;
//    let min = this._range[0] < this._range[1] ? this._range[0] : this._range[1];
//    let max = this._range[0] > this._range[1] ? this._range[0] : this._range[1];
//    return (c: FormControl) => { 
//      let temp = Number(c.value); 
//     let isValid = (temp >= min) && (temp <= max) ? true : false; /*false*/
//     if (isValid) {  
//      return null;  
//     } else {  
//      return {  
//       uiRange:{
//         valid:false
//       }
//      };  
//     }  
//    }  
//   }  
//  }


//  @Directive({  
//   selector: '[uiAllowedUpto][ngModel]',  
//   providers: [  
//    {  
//     provide: NG_VALIDATORS,  
//     useExisting: AllowedUptoValidator,  
//     multi: true  
//    }  
//   ]  
//  })  
//  export class AllowedUptoValidator implements Validator {  
//   validator: ValidatorFn;  
//   _uiAllowedUpto :  Array<Number>;
//   inputElem;

//   @Input('uiAllowedUpto') uiAllowedUpto : Array<Number>

//   constructor(elementRef: ElementRef) {  
//     console.log(elementRef);
//     this.inputElem = elementRef.nativeElement;
//   }
//   ngOnChanges(){
//     if(!isNaN(Number(this.uiAllowedUpto))){
//       this.validator = this.allowedUptoValidator(this.uiAllowedUpto);  
//     }
//   }
//   validate(c: FormControl) {  
//    return this.validator(c);  
//   }  
 
//  allowedUptoValidator(allowedUpto): ValidatorFn {
//    // console.log(allowedUpto);
//    this._uiAllowedUpto = allowedUpto;
//    // console.log(this.inputElem.value.length);
//    // let me = this;
//    this.inputElem.onkeypress = event=>{
//      switch (event.keyCode) {
//               case 8:
//               case 9:
//               case 13:
//                 break;
//               default:
//                 if (this.inputElem.value.length >= allowedUpto) {
//                   event.preventDefault();
//                 }
//                 break;
//             }
//    }
//    return (c: FormControl) => { 
//     let isValid = c.value ? c.value.length <= allowedUpto : false;
//     if (isValid) {  
//      return null;  
//     } else {  
//      return {  
//       uiAllowedUpto:{
//         valid:false
//       }
//      };  
//     }  
//    }  
//   }  
//  }



// /*
// File Format Validation
//  */
//  @Directive({  
//   selector: '[uiFile]'
//  })  
//  export class FileValidator {  
//    _fileFormats :  Array<String>;
//   file;

//   @Input('uiFile') uiFile : Array<String>

//    // The form Submit Function
//   @Output() onFileSelect = new EventEmitter();
  
//   @HostListener('change',["$event"]) 
//   onFileChange($event){
//     var files = $event.srcElement.files;
//     this.file = files[0];
//     console.log('file',this.file,this._fileFormats);
//     if(this._fileFormats.indexOf(this.file.type)>-1){
//       this.onFileSelect.emit({ valid:true,file:this.file});
//     }else{
//       this.onFileSelect.emit({ valid:false,file:this.file});      
//     }
//   } 

//   constructor(elementRef: ElementRef) {  
//   }

//   ngOnChanges(){
//     console.log(this.uiFile);
//     if(Array.isArray(this.uiFile) && this.uiFile.length){
//       this._fileFormats = this.uiFile;      
//     }
//   }
//  }


// /*

//  */
// @Directive({  
//   selector: '[uiEqualto][ngModel]',  
//   providers: [  
//    {  
//     provide: NG_VALIDATORS,  
//     useExisting: UiEqualtoValidator,  
//     multi: true  
//    }  
//   ]  
//  })  
//  export class UiEqualtoValidator implements Validator {  
//   validator: ValidatorFn;  
//   _uiEqualto :  any;

//   @Input('uiEqualto') uiEqualto : any

//   constructor(elementRef: ElementRef) {   
//   this.validator = this.uiEqualtoValidator();   
//   }
//   ngOnChanges(){
//     console.log('on change');
//     this._uiEqualto = this.uiEqualto;
//     this.uiEqualtoValidator();
//       // this.validator = this.uiEqualtoValidator(this._uiEqualto);  
//   }
//   validate(c: FormControl) {  
//    return this.validator(c);  
//   }  
 
//  uiEqualtoValidator(): ValidatorFn {   
//    // this._uiEqualto = uiEqualto;
//    return (c: FormControl) => { 
//    console.log(c.value, this._uiEqualto);
//     let isValid = c.value ? c.value === this._uiEqualto : false;
//     if (isValid) {  
//      return null;  
//     } else {  
//      return {  
//       uiEqualto:{
//         valid:false
//       }
//      };  
//     }  
//    }  
//   }  
//  }


//  @Directive({  
//   selector: '[showPassword][ngModel]',  
  
//  })  
//  export class ShowPassword  {  
//    inputElem;
//   constructor(elementRef: ElementRef) {  
//     this.inputElem = elementRef.nativeElement;
//     console.log(this.inputElem.type);
//   }  
//   @Input('showPassword') showPassword :boolean;
 
//   ngOnChanges(){
//     console.log(this.showPassword);
//     if(this.showPassword){
//       this.inputElem.type = 'text'
//     }else{
//       this.inputElem.type = 'password';
//     }
//   }
//  }