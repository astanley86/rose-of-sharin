import { NgModule } from '@angular/core';
import { MenuList } from './menu-list/menu-list';
import { IonicModule } from 'ionic-angular/module';

@NgModule({
	declarations: [MenuList],
	imports: [
		IonicModule
	],
	exports: [MenuList]
})
export class ComponentsModule { }
