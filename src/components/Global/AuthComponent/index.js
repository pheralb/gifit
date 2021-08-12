import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "@chakra-ui/react";
const AuthComponent = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <Button variant="ghost" onclick={() => loginWithRedirect()}>Login</Button>
        </div>
    )
}

export default AuthComponent
