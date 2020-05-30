import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { ProfessionalService } from 'src/app/services/professional.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  editProForm: Professional;
  id: number;

  constructor(private professionalService: ProfessionalService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.editProForm = new Professional();
    this.id = this.route.snapshot.params.id;
    return this.professionalService.getProfessionalById(this.id).subscribe((data: Professional) => {
      this.editProForm = data;
    });
  }

  onSubmit() {
    this.professionalService.editPro(this.editProForm, this.id).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }
}
