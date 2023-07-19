import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'trade',
        loadChildren: () => import('../trade/trade.module').then(m => m.TradePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('../inventory/inventory.module').then(m => m.InventoryPageModule)
      },
      {
        path: 'avatar',
        loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/trade',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/trade',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
