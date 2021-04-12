import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassEtudiantComponent } from './class-etudiant.component';

describe('ClassEtudiantComponent', () => {
  let component: ClassEtudiantComponent;
  let fixture: ComponentFixture<ClassEtudiantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
