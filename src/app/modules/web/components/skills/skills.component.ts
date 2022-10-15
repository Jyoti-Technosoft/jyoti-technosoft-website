import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

import data from '../../../../../assets/data/JT-website-json-data.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  // public progressValues: any = [
  //   { title: 'HTML & CSS', value: 90, bufferValue: 90 },
  //   { title: 'Javascript', value: 70, bufferValue: 70 },
  //   { title: 'React JS', value: 65, bufferValue: 65 },
  //   { title: 'Angular Js', value: 85, bufferValue: 85 },
  //   { title: 'Java', value: 80, bufferValue: 80 },
  // ]

  content: any = data.Skills[0].content;
  skill1: any = data.Skills[0].skillReport.skill1;
  skill2: any = data.Skills[0].skillReport.skill2;
  skill3: any = data.Skills[0].skillReport.skill3;
  skill4: any = data.Skills[0].skillReport.skill4;
  skill5: any = data.Skills[0].skillReport.skill5;


  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';

  constructor() { }

  ngOnInit(): void {
  }

}
