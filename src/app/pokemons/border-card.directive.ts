import { Directive, ElementRef, HostListener, Input } from '@angular/core';
  
@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#009';
    private defaultHeight: number = 180;

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
    }

    @Input('pkmnBorderCard') BorderColor: string; // alias
    @Input() pkmnBorderCard: string; // sans alias

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.BorderColor || '#009');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5');
    }
  
    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }
  
    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}