import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {

  constructor(private spinnerService: SpinnerService) {}

  loading$:Subject<boolean> = this.spinnerService.isLoading$;

  ngOnInit(): void {}
}
