import { Component, signal, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, RouterLink } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('Tech Solutions');
  isFading = false;
  mobileMenuOpen = false;

  constructor(
    private router: Router,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Reset fade animation after navigation completes
        // Only change if it's currently fading
        if (this.isFading) {
          setTimeout(() => {
            this.isFading = false;
            this.cdr.markForCheck();
          }, 50);
        }
        this.mobileMenuOpen = false;
      });
  }

  ngAfterViewInit() {
  }

  navigate(path: string, event: Event) {
    event.preventDefault();
    const currentPath = this.location.path();
    const targetPath = path === '' ? '/' : '/' + path;

    if (currentPath === targetPath) {
      return;
    }

    this.isFading = true;
    this.cdr.markForCheck();

    setTimeout(() => {
      this.router.navigate([path]).then(() => {
        // Fade in will be handled by NavigationEnd event
      });
    }, 200);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  isActive(path: string): boolean {
    const currentPath = this.location.path();
    if (path === '') {
      return currentPath === '';
    }
    return currentPath === '/' + path;
  }
}
