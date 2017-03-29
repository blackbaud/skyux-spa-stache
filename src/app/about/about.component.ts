import { Component } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  public aboutSections = [
    {
      sectionTitle: 'Menu component',
      sectionDescription: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed maximus molestie aliquam. Vestibulum scelerisque auctor efficitur. 
        Etiam pulvinar rutrum magna at rutrum.
        `
    },
    {
      sectionTitle: 'Getting started',
      sectionDescription: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed maximus molestie aliquam. Vestibulum scelerisque auctor efficitur. 
        Etiam pulvinar rutrum magna at rutrum.
        `
    },
    {
      sectionTitle: 'Installation instructions',
      sectionDescription: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed maximus molestie aliquam. Vestibulum scelerisque auctor efficitur. 
        Etiam pulvinar rutrum magna at rutrum.
        `
    }
  ];
  constructor() {}
}
