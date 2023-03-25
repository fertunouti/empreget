import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-finalizar-os',
  templateUrl: './finalizar-os.page.html',
  styleUrls: ['./finalizar-os.page.scss'],

})
export class FinalizarOsPage implements OnInit {

 
  ngOnInit() {
  }


  constructor(private router: Router, private alertController: AlertController) { }

  async finalizar() {
    const alert = await this.alertController.create({
      header: 'Serviço finalizado!',
      message: 'Obrigado!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }

}
