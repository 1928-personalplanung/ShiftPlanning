import { Component, OnInit } from '@angular/core';
import { AppModalCtrlService } from '../../app-modal-ctrl.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagTypes } from '../../dto/tag/tag-types.enum';

@Component({
  selector: 'sp-offtime-modal',
  templateUrl: './offtime-modal.component.html',
  styleUrls: ['./offtime-modal.component.scss']
})
export class OfftimeModalComponent implements OnInit {

  reasons = [
    {
      label: 'Urlaub',
      value: TagTypes.VACATION
    },
    {
      label: 'Krankheit',
      value: TagTypes.SICK
    }
  ]

  offtimeForm: FormGroup;

  constructor(public modal: AppModalCtrlService,
              private fb: FormBuilder) {


    this.offtimeForm = this.fb.group({
      start: [new Date(), Validators.required],
      end: [new Date(), Validators.required],
      reason: ['vacation', Validators.required],
      corona: [false],
      note: []
    });

  }

  ngOnInit(): void {
  }

}
