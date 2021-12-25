import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StateModule } from './state/state.module';

@NgModule({
	declarations: [AppComponent],
	imports: [CoreModule,AppRoutingModule,StateModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
