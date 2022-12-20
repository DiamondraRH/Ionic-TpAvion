import React from "react";
import {  useLocation } from "react-router";
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle } from '@ionic/react';
import { airplaneSharp, shieldCheckmark } from 'ionicons/icons';
import './Menu.css'

interface Pages {
    title: string,
    path: string,
    icon: string,
    routerDirection?: string
}

const routes = {
    appPages: [
        { title: 'Avions', path: '/avions', icon: airplaneSharp},
        { title: 'Assurances', path: '/assurances', icon: shieldCheckmark}
    ]
};

interface MenuProps {}
const Menu : React.FC<MenuProps> = () => {
    const location = useLocation();

    function MenuItems(list: Pages[]) {
        return list
            .filter(route => !!route.path)
            .map(p => (
                <IonMenuToggle key={p.title} auto-hide="false">
                <IonItem detail={false} routerLink={p.path} routerDirection="none" className={location.pathname.startsWith(p.path) ? 'selected' : undefined}>
                  <IonIcon slot="start" icon={p.icon} />
                  <IonLabel>{p.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>      
            ));
    };

    return (
        <IonMenu type="overlay" contentId="main">
            <IonContent forceOverscroll={false}>
            <IonList lines="none">
                <IonListHeader>Gestion</IonListHeader>
                {MenuItems(routes.appPages)}
            </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;