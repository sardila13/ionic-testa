import { Directive ,ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[layout-switcher]' // Attribute selector
})
export class LayoutSwitcherDirective {
    public currentState:any;
    public layouticon:any;
  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('Hello LayoutSwitcherDirective Directive');
  }
  ngOnInit(){
    //  this.element.nativeElement.addEventListener('click', () => {
    //     //  (this.element.nativeElement.firstElementChild)
    //   },false);
  }
}
