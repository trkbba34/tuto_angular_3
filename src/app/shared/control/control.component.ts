import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control', // like @HostBinding()
    '(click)': 'onClick()', // like @HostListener()
  },
})
export class ControlComponent implements AfterContentInit {
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  label = input.required<string>();
  private el = inject(ElementRef);

  //@ContentChild('input') private control?: ElementRef<
  //  HTMLInputElement | HTMLTextAreaElement
  //>;

  constructor() {
    afterRender(() => {
      console.log('AFTER RENDER');
    });

    afterNextRender(() => {
      console.log('AFTER NEXT RENDER');
    });
  }

  ngAfterContentInit() {}

  onClick() {
    console.log('clicked');
    console.log(this.el);
    console.log(this.control());
  }
}
