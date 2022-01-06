import React from 'react'

import FacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login"

interface Props {
    
}

const Facebook = (props: Props) => {
    
    const onResponse = (response: ReactFacebookLoginInfo) => {
        console.log(response);
    };
    
    // https://graph.facebook.com/me?access_token=%3CTOKEN%3E

    return (
        <div>
            <FacebookLogin
                appId="1306662893146104"
                fields="name,email,picture"
                // onClick={componentClicked}
                callback={onResponse} 
            />
        </div>
    )
}

export default Facebook
