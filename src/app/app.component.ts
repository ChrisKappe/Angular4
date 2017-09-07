import { Component ,OnInit, ViewChild} from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
  <h1>
    Welcome to {{title}}!
  </h1>

  </div>
  <div class='panel panel-primary'>
    <div class='panel-heading'>
        {{pageTitle}}
    </div>
    <div #myMap style='width: 500px; height: 500px;'></div> 
  </div>
  <div *ngFor="let salesOrder of salesOrders">
  <h4>{{salesOrder.No}}</h4>
  </div>
  `
})

export class AppComponent {
  salesOrders:salesOrder[];
  
  constructor(private dataService:DataService) {

  }
  
  @ViewChild('myMap') myMap; // using ViewChild to reference the div instead of setting an id
  public pageTitle: string = "Map";
  
  ngOnInit(){  // after the view completes initializaion, create the map
    this.salesOrders = [];
    this.dataService.GetNAVStuff().subscribe((SalesOrder) => {

      SalesOrder.value.forEach((element, i) => {

        this.salesOrders.push();
        this.salesOrders[i] = new salesOrder;
        this.salesOrders[i].No = element.No;

        
      });
    });
    //console.log('Mark ' + this.salesOrders.length);
    
    //this.salesOrders.forEach((element, i) => {
    //  console.log('Foox ' + this.salesOrders[i].No);
    //});
    var map = new Microsoft.Maps.Map(this.myMap.nativeElement, {
      credentials: 'Bing Map Key - I removed it here'
  });
  var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
  var layer = new Microsoft.Maps.Layer();
  layer.add(pushpin);
  map.layers.insert(layer);

  }

  title = 'My App';
}

interface Post {
  id: number;
  title:string;
  body:string;
  userId: number;
}

class salesOrder {
  constructor () {};
    Document_Type: string;
    No: string;
    Sell_to_Customer_No: string;
    Sell_to_Customer_Name: string;
    Quote_No: string;
    Sell_to_Address: string;
    Sell_to_Address_2: string;
    Sell_to_Post_Code: string;
    Sell_to_City: string;
    Sell_to_Contact_No: string;
    Sell_to_Contact: string;
    No_of_Archived_Versions: number;
    Document_Date: string;
    Posting_Date: string;
    Order_Date: string;
    Due_Date: string;
    Requested_Delivery_Date: string;
    Promised_Delivery_Date: string;
    External_Document_No: string;
    Salesperson_Code: string;
    Campaign_No: string;
    Opportunity_No: string;
    Responsibility_Center: string;
    Assigned_User_ID: string;
    Job_Queue_Status: string;
    Status: string;
    Currency_Code: string;
    Prices_Including_VAT: boolean;
    VAT_Bus_Posting_Group: string;
    Payment_Terms_Code: string;
    Payment_Method_Code: string;
    EU_3_Party_Trade: boolean;
    SelectedPayments: string;
    Transaction_Type: string;
    Shortcut_Dimension_1_Code: string;
    Shortcut_Dimension_2_Code: string;
    Payment_Discount_Percent: number;
    Pmt_Discount_Date: string;
    Direct_Debit_Mandate_ID: string;
    ShippingOptions: string;
    Ship_to_Code: string;
    Ship_to_Name: string;
    Ship_to_Address: string;
    Ship_to_Address_2: string;
    Ship_to_Post_Code: string;
    Ship_to_City: string;
    Ship_to_Country_Region_Code: string;
    Ship_to_Contact: string;
    Shipment_Method_Code: string;
    Shipping_Agent_Code: string;
    Shipping_Agent_Service_Code: string;
    Package_Tracking_No: string;
    BillToOptions: string;
    Bill_to_Name: string;
    Bill_to_Address: string;
    Bill_to_Address_2: string;
    Bill_to_Post_Code: string;
    Bill_to_City: string;
    Bill_to_Contact_No: string;
    Bill_to_Contact: string;
    Location_Code: string;
    Shipment_Date: string;
    Shipping_Advice: string;
    Outbound_Whse_Handling_Time: string;
    Shipping_Time: string;
    Late_Order_Shipping: boolean;
    Transaction_Specification: string;
    Transport_Method: string;
    Exit_Point: string;
    Area: string;
    Prepayment_Percent: number;
    Compress_Prepayment: boolean;
    Prepmt_Payment_Terms_Code: string;
    Prepayment_Due_Date: string;
    Prepmt_Payment_Discount_Percent: number;
    Prepmt_Pmt_Discount_Date: string;
    Date_Filter: string;
}
  