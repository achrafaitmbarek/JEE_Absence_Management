import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjouterEtudiantComponent } from './ajouter-etudiant.component';

describe('AjouterEtudiantComponent', () => {
  let component: AjouterEtudiantComponent;
  let fixture: ComponentFixture<AjouterEtudiantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
