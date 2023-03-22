import React, { useState } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

export default function Main() {

    const [newRepo, setNewRepo] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleinputChange(e) {
        setNewRepo(e.target.value);
    }

    return(
        <Container>
            
            <h1>
                <FaGithub size={25} />
                Meus Repositorios
            </h1>

            <Form OnSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Adicionar Repositorios" 
                value={newRepo}
                onChange={handleinputChange}
                />

                <SubmitButton>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>
            </Form>

        </Container>
    )
}




