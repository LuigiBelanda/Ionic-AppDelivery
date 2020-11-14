import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalheprodPage } from './detalheprod.page';

describe('DetalheprodPage', () => {
  let component: DetalheprodPage;
  let fixture: ComponentFixture<DetalheprodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheprodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheprodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
