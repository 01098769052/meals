import { Component } from '@angular/core';
import { SupervisorComponent } from "../supervisor/supervisor.component";

@Component({
  selector: 'app-team',
  imports: [SupervisorComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  parentFlag:boolean =true;

}
