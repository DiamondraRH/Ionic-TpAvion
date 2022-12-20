import { IonContent, IonHeader, IonPage, IonButtons, IonBackButton, IonTitle, IonToolbar } from '@ionic/react';
import Log  from "../components/Login";


const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
              <IonBackButton defaultHref="/vehicules" />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Log />
      </IonContent>
    </IonPage>
  );
};

export default Login;

