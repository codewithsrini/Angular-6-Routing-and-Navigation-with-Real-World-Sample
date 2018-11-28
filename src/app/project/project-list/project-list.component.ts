import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  private projects$: Observable<Project[]>

  constructor(
    private service: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.projects$ = this.route.paramMap.pipe(
      switchMap(() => {
        return this.service.getProjects();
      } )
    );
  }
}
