// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {createTestTweak} from 'src/app/testing/model-utils';

import { VoidComponent } from './void.component';

import {configureTestingModule} from '../../testing/testing-utils';

describe('VoidComponent', () => {
  let component: VoidComponent;
  let fixture: ComponentFixture<VoidComponent>;

  beforeEach(async () => {
    await configureTestingModule({
      declarations: [ VoidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidComponent);
    component = fixture.componentInstance;
    component.tweak = createTestTweak('void');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
