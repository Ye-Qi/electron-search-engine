import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDialogModule } from '@angular/material/dialog'

import { AppComponent } from './app.component'
import { WebviewDirective } from './webview.directive'
import { HomeHeaderComponent } from './common/home-header/home-header.component'
import { HomeSidebarComponent } from './common/home-sidebar/home-sidebar.component'
import { HomeAddEngineComponent } from './common/home-add-engine/home-add-engine.component'
import { AddEngineDialogComponent } from './common/home-add-engine/add-engine-dialog/add-engine-dialog.component'

import { SearchService } from './service/search/search.service'
import { WebsitesService } from './service/websites/websites.service'

@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective,
    HomeHeaderComponent,
    HomeSidebarComponent,
    HomeAddEngineComponent,
    AddEngineDialogComponent
  ],
  entryComponents: [
    AddEngineDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [{
    provide: SearchService,
    useClass: SearchService
  }, {
    provide: WebsitesService,
    useClass: WebsitesService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
