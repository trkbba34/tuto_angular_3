import {
  Component,
  inject,
  OnInit,
  DestroyRef,
  signal,
  effect,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect((onCleanup) => {
      /*
      const tasks = getTasks();
      const timer = setTimeout(() => {
        console.log(`Current number of tasks: ${tasks().length}`);
      }, 1000);
      onCleanup(() => {
        clearTimeout(timer);
      });
    */
    });
  }

  ngOnInit() {
    console.log('ON INIT');

    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99;

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }
  /*
  ngOnDestroy() {
    clearTimeout(this.interval);
  }
    */
}
