import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCreatorComponent } from './feed-creator.component';

describe('FeedCreatorComponent', () => {
  let component: FeedCreatorComponent;
  let fixture: ComponentFixture<FeedCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
