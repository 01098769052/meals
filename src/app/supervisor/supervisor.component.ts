import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-supervisor',
  imports: [],
  templateUrl: './supervisor.component.html',
  styleUrl: './supervisor.component.css'
})
export class SupervisorComponent {

  @Output() childValue : EventEmitter<boolean> = new EventEmitter();

  takeAction()
  {
    this.childValue.emit(false)
  }

}
