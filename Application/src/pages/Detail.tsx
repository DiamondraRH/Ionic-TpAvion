import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonList, IonItem, IonLabel, IonText, useIonViewWillEnter} from "@ionic/react";
import React, {useState} from "react";
import { useHistory, useParams } from "react-router";
import { Avion } from "../models/Avion";

import './Detail.css';

const Detail : React.FC = () => {
    const history = useHistory();
    

    const [vehicule, setAvion] = useState<Avion>();
    const params = useParams<{ id: string }>();

    const getAvion = async (id:number) => {
        try {
            const response = await fetch(`https://api-tp-avion-production-6715.up.railway.app/avions/${id}`);
            if (!response.ok) {
                throw Error(response.statusText)
            }
            const json = await response.json();
            console.log(json);
            setAvion(json.data);
        } catch (error) {
            throw error;
        }
    }

    useIonViewWillEnter(()=> {
        if (localStorage.getItem("token")==null) {
            history.push("/login");
        } else {
            getAvion(parseInt(params.id, 10));
        }
    });

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/vehicules" />
                    </IonButtons>
                    <IonTitle>{vehicule?.immatriculation}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="ion-padding">
                    <h1>{vehicule?.immatriculation}</h1>
                    <IonText color="ion-color-food">{vehicule?.marque.intitule}</IonText>
                    <br />
                    <br />
                    <IonText color="medium">
                        Kilometrage : 200 km
                        <br />
                        Assurance expiré le : 12 Déc 2023
                    </IonText>
                </div>
                <IonList>
                    <IonItem>
                        <IonLabel>Places</IonLabel>
                        <IonLabel className="ion-text-end">{vehicule?.places}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Portes</IonLabel>
                        <IonLabel className="ion-text-end">{vehicule?.portes}</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};
export default Detail;