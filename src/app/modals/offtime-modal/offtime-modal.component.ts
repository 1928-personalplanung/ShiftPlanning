import { Component, OnInit } from '@angular/core';
import { AppModalCtrlService } from '../../app-modal-ctrl.service';

@Component({
  selector: 'sp-offtime-modal',
  templateUrl: './offtime-modal.component.html',
  styleUrls: ['./offtime-modal.component.scss']
})
export class OfftimeModalComponent implements OnInit {

  constructor(public modal: AppModalCtrlService) { }

  ngOnInit(): void {
  }

}
