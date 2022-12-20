import { IonRow,IonCol,IonLabel,IonInput,IonItem,IonContent,IonButton} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";

const Login : React.FC = () => {
    const email ="rakoto@gmail.com";
    const password= "rakoto1234";
    const history  = useHistory();
    const login = async() => { 
        const data = {email: email, mdp: password} 
        const url = "https://api-tp-avion-production-6715.up.railway.app/utilisateur/login";
        try {
            const response = await fetch(url,{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(data),
            });
            if(!response.ok){
                throw Error(response.statusText)
            }
            const json = await response.json();
            localStorage.setItem("token", json.data.token);
            history.push("/");
        } catch (error) {
            console.error(error)
        } 
    }
    return (
        <IonContent fullscreen>
        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="floating"> Email</IonLabel>
                    <IonInput
                    type="email"
                    value={email}
>
                    </IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating"> Password</IonLabel>
                        <IonInput
                        type="password"
                        name="password"
                        value={password}
                        >
                    </IonInput>
                </IonItem>
            </IonCol>
        </IonRow>
        <IonRow>
        <IonCol>
          <IonButton expand="block" onClick={login}>
            Login
          </IonButton>
        </IonCol>
      </IonRow>
      </IonContent>
    )
};

export default Login;
