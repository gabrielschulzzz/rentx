import React from 'react'
import { useTheme } from 'styled-components'

import { Feather } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider'
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button'

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import {
  Container,
  Header,
  CarImages,
  Content, 
  Details, 
  Description, 
  Brand, 
  Name, 
  Rent, 
  Period, 
  Price,
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export function SchedulingDetails() {
  const theme = useTheme();

  return (
      <Container>
          <Header>
            <BackButton onPress={() => {}}/>
          </Header>
          <CarImages>
            <ImageSlider imagesUrl={['https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9cf8f78-c5bd-4a56-943c-9f3d36d2d2fd/dajzhrp-bf1bfc2c-36c4-4517-9884-88400806a6e9.png/v1/fill/w_1024,h_683,strp/audi_tt_rs_coupe_png_by_mrfatback_dajzhrp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvZDljZjhmNzgtYzViZC00YTU2LTk0M2MtOWYzZDM2ZDJkMmZkXC9kYWp6aHJwLWJmMWJmYzJjLTM2YzQtNDUxNy05ODg0LTg4NDAwODA2YTZlOS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Kx6Ac5FppAq2rjTotB-405xFa3p3FOG8Bu5aaKeyWAA']} />
          </CarImages>

          <Content>
            <Details>
              <Description>
                <Brand>Lamborghini</Brand>
                <Name>Hurracan</Name>
              </Description>

              <Rent>
                <Period>Ao dia</Period>
                <Price>R$580</Price>
              </Rent>
            </Details>

            <Acessories>
              <Accessory 
                name="380km/h"
                icon={SpeedSvg}
              />
              <Accessory 
                name="3.2s"
                icon={AccelerationSvg}
              />
              <Accessory 
                name="800 HP"
                icon={ForceSvg}
              />
              <Accessory 
                name="Gasolina"
                icon={GasolineSvg}
              />
              <Accessory 
                name="Auto"
                icon={ExchangeSvg}
              />
              <Accessory 
                name="2 pessoas"
                icon={PeopleSvg}
              />
            </Acessories>

            <RentalPeriod>
              <CalendarIcon>
                <Feather 
                  name="calendar"
                  size={RFValue(24)}
                  color={theme.colors.shape}
                />
              </CalendarIcon>

              <DateInfo>
                <DateTitle>De</DateTitle>
                <DateValue>18/06/2021</DateValue>
              </DateInfo>

              <Feather 
                  name="chevron-right"
                  size={RFValue(10)}
                  color={theme.colors.text}
              />

              <DateInfo>
                <DateTitle>De</DateTitle>
                <DateValue>18/06/2021</DateValue>
              </DateInfo>

            </RentalPeriod>

            <RentalPrice>
              <RentalPriceLabel>TOTAL</RentalPriceLabel>
              <RentalPriceDetails>
                <RentalPriceQuota>R$580 x3 diárias</RentalPriceQuota>
                <RentalPriceTotal>R$2.900</RentalPriceTotal>
              </RentalPriceDetails>
            </RentalPrice>
          </Content>

          <Footer>
            <Button title="Escolher periodo do aluguel" />
          </Footer>
      </Container>
  );
}