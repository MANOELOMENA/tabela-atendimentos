import React from 'react'
import { Table } from 'react-bootstrap';
import { TextH1I, Container } from "./Styled.js"

const  TableA = () => {


  return (
    <Container>
    <TextH1I>Tabela de<br/>Atendimentos</TextH1I>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sargento / Cabo</th>
          <th>Equipe</th>
          <th>Concluído</th>
          <th>Solucção Aplicada</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
    </Table>
    </Container>
  );
}

export default TableA