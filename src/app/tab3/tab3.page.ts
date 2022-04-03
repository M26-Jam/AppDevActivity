import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  contactlist  = [
    {id: 1, name: 'Jamelle Cleofe Cuna', email: 'jamellecleofe.cuna@evsu.edu.ph',number: '09123456789'},
    {id: 1, name: 'Zyra Cruz', email: 'zyra0908@gmail.com',number: '09631852032'},
    {id: 1, name: 'Tatum Kulit', email: 'tatum34@gmail.com',number: '09062026630'},
  ]

}
