import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFadeOnScroll]'
})
export class FadeOnScrollDirective {

  @Input('ratio') fadeRatio: number = 1;
  initialTop: number = 0;

  constructor(
    private eleRef: ElementRef
  ) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    var value = 233 - (window.scrollY * this.fadeRatio);
    value <= 10 ? value = 10 : value = value;
    this.eleRef.nativeElement.style.backgroundColor = 'rgb(' + value + ',' + value + ',' + value + ')';
  }

}
