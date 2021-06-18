import React from 'react'
import { StatusBar } from 'react-native'
import { useTheme} from 'styled-components'
import { BackButton } from '../../components/BackButton';

import { Button } from '../../components/Button'
import ArrowSvg from '../../assets/arrow.svg'

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';
import { Calendar } from '../../components/Calendar';

export function Scheduling() {
    const theme = useTheme()

    return (
        <Container>
            <StatusBar 
                barStyle="light-content" 
                translucent
                backgroundColor="transparent"
            />
            <Header>
                <BackButton color={theme.colors.shape} onPress={() => {}}/>
                <Title>
                    Escolha uma {'\n'}
                    data de inicio e {'\n'}
                    fim do aluguel {'\n'}
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>18/06/2021</DateValue>
                    </DateInfo>

                <ArrowSvg />

                    <DateInfo>
                        <DateTitle>Ate</DateTitle>
                        <DateValue selected={false}>18/06/2021</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar></Calendar>
            </Content>

            <Footer>
                <Button title="Confirmar" />
            </Footer>
        </Container>
    );
}