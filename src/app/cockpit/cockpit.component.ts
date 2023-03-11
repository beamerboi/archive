import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName = '';
  // newServerContent = '';
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent:string}>();
  @ViewChild('serverContentInput', {static:true}) serverContent: ElementRef;

  onAddServer(serverInputName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverInputName.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(serverInputName: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: serverInputName.value,
      blueprintContent: this.serverContent.nativeElement.value
    });
  }
}
