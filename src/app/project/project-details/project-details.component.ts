import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ActivationStart, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  private theProject: Project;
  private id:number = 0;

  constructor(
    private route: ActivatedRoute,
    private service: ProjectService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log( params );
        this.id = params.id;
        this.theProject = this.service.getProjectById(this.id);
      }); 
  }

}
