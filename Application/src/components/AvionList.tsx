import { IonList } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Avion } from "../models/Avion";
import AvionItem from "./AvionItem"
import './AvionList.css'

const AvionList: React.FC = () => {
    const[avions, setAvions] = useState<Avion[]>([])
    
    const getAvions = async() => {  
        try {
            const response = await fetch('https://api-tp-avion-production-6715.up.railway.app/avions');
            if (!response.ok) {
                throw Error(response.statusText)
            }
            const json = await response.json()
            setAvions(json)
        } catch (error) {
            console.error(error)
        } 
    }
    
    useEffect(() => {
        getAvions();
    });

    return (
        <IonList lines="none">
            {avions.map((avion) => 
                <AvionItem avion = {avion} />
            )}    
        </IonList>
    );
};
export default AvionList;
