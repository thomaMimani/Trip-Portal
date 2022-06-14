import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-our-team',
  templateUrl: './join-our-team.component.html',
  styleUrls: ['./join-our-team.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 0,

      })),

      state('hidden', style({
        opacity: 1,
      })),

      transition('show => hidden', animate('1000ms ease-out')),
      transition('hidden => show', animate('600ms ease-in'))

    ])
  ]
})
export class JoinOurTeamComponent implements OnInit {
  
  constructor() { }
  
 team =[{
   photo: 'img',
   name: 'Alban Halaj',
   position: 'Frontend Developer',
   description: 'Something'
 },
 {
  photo: 'img',
  name: 'Doris Rapi',
  position: 'Frontend Developer',
  description: 'Something'
},
{
  photo: 'img',
  name: 'Sanja Mulla',
  position: 'Frontend Developer',
  description: 'Something'
},
{
  photo: 'img',
  name: 'Thoma Mimani',
  position: 'Frontend Developer',
  description: 'Something'
},
{
  photo: 'img',
  name: 'Aulona Veshaj',
  position: 'Frontend Developer',
  description: 'Something'
},
{
  photo: 'img',
  name: 'Ermina Zeneli',
  position: 'Frontend Developer',
  description: 'Something'
},
{
  photo: 'img',
  name: 'Petraq Rezhdo',
  position: 'Frontend Developer',
  description: 'Something'
},
]
  hidden: boolean = false

  contact: boolean = false


  get stateName() {
    return this.hidden ? 'hidden' : 'show'
  }




  toggle() {
    return this.hidden = !this.hidden
  }
  

  ngOnInit(): void {
  }



}
