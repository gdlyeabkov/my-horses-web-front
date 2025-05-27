import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search)
    const redirect = urlParams.get('route')
    if (redirect?.length) this.router.navigate([redirect])
    else if (this.router.url === '/') this.router.navigate(['request-delete-account-form'])
  }
}


