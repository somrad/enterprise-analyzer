import  {useEffect, useState, useRef} from "react";
import Keycloak from 'keycloak-js'

const useAuth = (): [boolean, string] => {

    const isRun = useRef(false);

    const[isLogin, setLogin] = useState<boolean>(false);
    const firstNameContext = useRef('First Name')
    
    useEffect(()=>{
        if(isRun.current) return;

        isRun.current = true;
        
        const client = new Keycloak({
            url: import.meta.env.VITE_KEYCLOAK_URL,
            realm: import.meta.env.VITE_KEYCLOAK_REALM,
            clientId: import.meta.env.VITE_KEYCLOAK_CLIENTID 
        });
        client.init({onLoad: 'login-required'}).then((res)=>
            {
                setLogin(res)
                firstNameContext.current = client.tokenParsed.given_name
                console.log(client.tokenParsed.given_name || 'first name');
            }
        )
    }, [])

    console.log("hook invoked", isLogin);

    return [isLogin,firstNameContext.current];

};

export default useAuth;