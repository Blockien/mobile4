import React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Container = styled.View`
  flex: 1;
  background-color: #121214;
  padding: 24px;
  justify-content: space-between;
`;

const HeaderContainer = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: #e1e1e6;
`;

const TurmasContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TurmaItem = styled.TouchableOpacity`
  background-color: #202024;
  padding: 20px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
`;

const TurmaName = styled.Text`
  font-size: 16px;
  color: #ffffff;
  margin-left: 12px;
`;

const NewTurmaButton = styled(Link)`
  background-color: #00875f;
  padding: 20px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
`;

export default function Index() {
  return (
    <Container>
      <TurmasContainer>
        <HeaderContainer>
          <HeaderTitle>Turmas</HeaderTitle>
          <Subtitle>Jogue com a sua turma</Subtitle>
        </HeaderContainer>

        <Link href="/times" style={{ width: '100%' }}>
          <TurmaItem>
            <AntDesign name="team" size={55} color="#00875F" style={{ marginRight: 10 }} />
            <TurmaName>Nome da turma</TurmaName>
          </TurmaItem>
        </Link>
        <Link href="/times" style={{ width: '100%' }}>
          <TurmaItem>
            <AntDesign name="team" size={55} color="#00875F" style={{ marginRight: 10 }} />
            <TurmaName>Nome da turma</TurmaName>
          </TurmaItem>
        </Link>
      </TurmasContainer>

      <NewTurmaButton href="/novaturma">Criar nova turma</NewTurmaButton>
    </Container>
  );
}
