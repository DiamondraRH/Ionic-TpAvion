import { IonButton, IonButtons, IonList, IonCard, IonCardHeader, IonItem, IonCardTitle, IonCardSubtitle } from "@ionic/react";
import { useState } from "react";
import { Assurance } from "../models/Assurance";

const AssuranceList: React.FC = () => {
    const [assurances, setAssurances] = useState<Assurance[]>([])

    const getAssurances1 = async() =>{
        try {
            const response = await fetch('http://localhost:8080/assurance/mois/1');
            if (!response.ok) {
                throw Error(response.statusText)
            }
            const json = await response.json()
            setAssurances(json.data)
            console.log(json)
        } catch (error) {
            console.error(error)
        } 
    }
    const getAssurances3 = async() =>{
        try {
            const response = await fetch('https://api-tp-avion-production-6715.up.railway.app/assurance/mois/3');
            if (!response.ok) {
                throw Error(response.statusText)
            }
            const json = await response.json()
            setAssurances(json.data)
        } catch (error) {
            console.error(error)
        } 
    }

    return (
        <div>
            <IonButtons>
                <IonButton onClick={getAssurances1}>Expiré dans 1 mois</IonButton>
                <IonButton onClick={getAssurances3}>Expiré dans 3 mois</IonButton>
            </IonButtons>
            <IonList lines="none">
                {assurances.map((assurance) => 
                <IonItem routerLink={`/avions/${assurance.avion.id}`}>
                    <IonCard>
                        <IonCardHeader>
                        <IonCardTitle>{assurance.avion.immatriculation}</IonCardTitle>
                        <IonCardSubtitle color={"danger"}>{assurance.dateExpiration.toString()}</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                </IonItem>
            )}    
            </IonList>
        </div>
    );
};

export default AssuranceList;