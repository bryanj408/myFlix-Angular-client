import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss'],
})


export class DirectorComponent implements OnInit {
  /**
 * Pulls the director info from the API MovieCard component using MAT_DIALOG_DATA
 * This will populate the moviecard view
 * @params data
 */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Bio: string;
      Birth: string;
    }
  ) {}

  ngOnInit(): void {}
}