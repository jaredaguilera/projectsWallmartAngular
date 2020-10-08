import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { stringify } from 'querystring';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let id :string;
    let product :
      {
        "_id": {
            "timestamp": 1601689289,
            "machineIdentifier": 13533348,
            "processIdentifier": -20233,
            "counter": 6005007,
            "date": "2020-10-03T01:41:29.000+0000",
            "time": 1601689289000,
            "timeSecond": 1601689289
        },
        "id": 1,
        "brand": "ooy eqrceli",
        "description": "rlñlw brhrka",
        "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
        "price": 498724.0,
        "priceLowered": 249362.0
    }
    id='1';
    component.buscar(id)
    expect(component.buscar(id)).toEqual(product);
  });

  it('should create', () => {
    let id :string;
    let product :
      {
        "_id": {
            "timestamp": 1601689289,
            "machineIdentifier": 13533348,
            "processIdentifier": -20233,
            "counter": 6005007,
            "date": "2020-10-03T01:41:29.000+0000",
            "time": 1601689289000,
            "timeSecond": 1601689289
        },
        "id": 1,
        "brand": "ooy eqrceli",
        "description": "rlñlw brhrka",
        "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
        "price": 498724.0,
        "priceLowered": 249362.0
    }
    id='1';
    component.buscar(id)
    expect(component.buscar(id)).toEqual(product);
  });
  
});
