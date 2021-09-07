import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ComponentService } from 'src/app/shared/service/component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild('compHost', { read: ViewContainerRef })
  private components: any;
  private data: any;
  private meta: any


  constructor(
    private compHost: ViewContainerRef,
    private componentService: ComponentService,
    private resolver: ComponentFactoryResolver,
  ) {
    
  }

  ngOnInit() {
    this.components = this.componentService.getComponents();
    this.createComponent("NewBookComponent", []);
    this.createComponent("BookListComponent", []);
    this.createComponent("BookReviewComponent", []);
  }


  private createComponent(flag:String, data:any) {
    const test:String = flag
    // @ts-ignore: Object is possibly 'null'.
    const compItem = this.components[test];

    if (compItem) {
      const componentFactory = this.resolver.resolveComponentFactory(compItem.component);
      const componentRef = this.compHost.createComponent<any>(componentFactory);
      componentRef.instance.CompData = data;
    }
  }

  ngOnDestroy() {
    // this.unSubs.next();
    // this.unSubs.complete();
    // this.compHost.clear();
    // this.g.headerGlobal.next(false)
  }


}
