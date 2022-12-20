import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonIcon  } from '@ionic/react';
import { Link } from "react-router-dom";
import { person } from 'ionicons/icons';
import AssuranceList from '../components/AssuranceList';

const AssurancePage : React.FC = () => {
    return (
        <IonPage>     
          <IonHeader>
            <IonToolbar>
                <IonButtons slot='start'>
                  <IonMenuButton/>
                </IonButtons>
                <IonTitle>Assurances</IonTitle>
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
                <IonTitle size="large">Assurances</IonTitle>
              </IonToolbar>
            </IonHeader>
            <AssuranceList/>
          </IonContent>
        </IonPage>
      );
    };
    
export default AssurancePage;
    