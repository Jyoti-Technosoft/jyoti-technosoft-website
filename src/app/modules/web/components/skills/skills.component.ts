import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public progressValues: any = [
    { title: 'HTML & CSS', value: 90, bufferValue: 90 },
    { title: 'Javascript', value: 70, bufferValue: 70 },
    { title: 'React JS', value: 65, bufferValue: 65 },
    { title: 'Angular Js', value: 85, bufferValue: 85 },
    { title: 'Java', value: 80, bufferValue: 80 },
  ]

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';

  constructor() { }

  ngOnInit(): void {
  }

}
