import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartService } from '../services/part.service';

import { Part } from '../model/part';

@Component({
  selector: 'parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})

export class PartsComponent implements OnInit {
  parts: Part[];
  selectedPart: Part;

  constructor(private router: Router, private PartService: PartService) { }

  ngOnInit(): void {
    this.getParts();
  }

  getParts(): void {
    this.PartService.getParts()
      .then((parts) => {
        console.log(parts);
        this.parts = parts;
        console.log(JSON.stringify(this.parts));
      });

  }
}