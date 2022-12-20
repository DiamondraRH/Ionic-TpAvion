import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonIcon  } from '@ionic/react';
import VehiculeList from '../components/AvionList';
import { person } from 'ionicons/icons';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <IonPage>     
      <IonHeader>
        <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton/>
            </IonButtons>
            <IonTitle>Avions</IonTitle>
            <IonButtons slot='end'>
              <Link to="/login">
                <IonButton>
                  <IonIcon slot='icon-only' icon={person}></IonIcon>
                </IonButton>
              </Link>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Avions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <VehiculeList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
