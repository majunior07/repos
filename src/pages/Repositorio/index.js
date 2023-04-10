import React, { useState, useEffect } from "react";
import { Container } from './styles';
import api from '../../services/api';

export default function Repositorio({match}) {

    useEffect(() => {

        async function load(){
            const nomeRepo = decodeURIComponent(match.params.repositorio);

            // const response = 

        }

        load();

    }, []);

    return(
        <Container>
            
        </Container>
    )
}




