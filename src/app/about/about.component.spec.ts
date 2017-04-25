import { TestBed } from '@angular/core/testing';
import { expect, SkyAppTestModule } from '@blackbaud/skyux-builder/runtime/testing/browser';

// Component we're going to test
import { AboutComponent } from './about.component';

describe('About component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });

  it('should display a new section when one is added', () => {
    const title = 'Blackbaud';
    const description = 'Description Info';
    const fixture = TestBed.createComponent(AboutComponent);

    fixture.componentInstance.aboutSections.push({
      sectionTitle: 'Blackbaud',
      sectionDescription: 'Description Info'
    });

    fixture.detectChanges();

    const el = fixture.nativeElement;
    const sections = el.querySelectorAll('.about-section-component');
    const lastSection = sections[sections.length - 1];
    const titleEl = lastSection.querySelector('.stache-page-anchor-heading');
    const descriptionEl = lastSection.querySelector('.sections-description');

    // Using custom expect matchers
    expect(titleEl).toHaveText(title);
    expect(descriptionEl).toHaveText(description);
  });

});
