import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input()title: string = "Track name";
  @Input() length: string = "03:00";

  constructor() { }

  ngOnInit(): void {
  }

}