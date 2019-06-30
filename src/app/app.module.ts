import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';

@NgModule({
  declarations: [AppComponent, SearchFilterComponent],
  imports: [BrowserModule, FormsModule, Ng2SearchPipeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
