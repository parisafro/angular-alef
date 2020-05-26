import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
ordersData = [
{ id: 1, name: 'order 1' },
{ id: 2, name: 'order 2' },
{ id: 3, name: 'order 3' },
{ id: 4, name: 'order 4' }
];
public order1:string;
public order2:string;
public order3:string;
public order4:string;

OnClick(form){
    var order1 = form.order1;
    console.log(order1);
  
    var order2 = form.order2;
    console.log(order2);
  
    var order3= form.order3;
    console.log(order3);

    var order4= form.order4;
    console.log(order4);

}
}
