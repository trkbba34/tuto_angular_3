import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    console.log('ON INIT');
  }
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  @ViewChild('form') form?: ElementRef<HTMLFormElement>; // Decorator
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // Signal

  //@Output() add = new EventEmitter<{ title: string; text: string }>();    // Decorator
  add = output<{ title: string; text: string }>(); // Signal

  entredTitle = '';
  entredText = '';

  onSubmit() {
    this.add.emit({ title: this.entredTitle, text: this.entredText });

    //this.form?.nativeElement.reset();
    //this.form().nativeElement.reset();

    this.entredTitle = '';
    this.entredText = '';
  }
}
