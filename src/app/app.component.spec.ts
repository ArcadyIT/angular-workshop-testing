import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { NotebookComponent } from './notebook/notebook.component';
import { PalindromePipe } from './pipe/palindrome.pipe';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { NoteService } from './notebook/note.service';
import { ProductsService } from './product-overview/products.service';
import { TickerComponent } from './ticker/ticker.component';
import { TickerMessageService } from './ticker/ticker-message.service';
import { CalculatorComponent } from './calculator/calculator.component';

import { FormsModule  } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessageComponent,
        NotebookComponent,
        PalindromePipe,
        ProductOverviewComponent,
        TickerComponent,
        CalculatorComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        NoteService,
        ProductsService,
        TickerMessageService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testableapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testableapp');
  });
});
