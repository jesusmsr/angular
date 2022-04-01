import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1;
  @Input('direction') parallaxDirection: string = '';
  initialTop: number = 0;
  initialBottom: number = 0;

  constructor(
    private eleRef: ElementRef
  ) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
    this.initialBottom = this.eleRef.nativeElement.getBoundingClientRect().bottom;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    switch (this.parallaxDirection) {
      case 'up':
        this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
        break;
      default:
        break;
    }

  }

}
