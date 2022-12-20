import React from "react";
import { IonCard, IonCardHeader, IonItem, IonCardTitle, IonCardSubtitle } from "@ionic/react"
import { Avion } from "../models/Avion"

export interface AvionItemProps {
    avion : Avion
}

const AvionItem : React.FC<AvionItemProps> = (props) => {
    return (
        <IonItem routerLink={`/avions/${props.avion.id}`}>
            <IonCard>
                <IonCardHeader>
                <IonCardTitle>{props.avion.immatriculation}</IonCardTitle>
                <IonCardSubtitle>{props.avion.marque.intitule}</IonCardSubtitle>
                </IonCardHeader>
            </IonCard>
        </IonItem>
    )
};

export default AvionItem;