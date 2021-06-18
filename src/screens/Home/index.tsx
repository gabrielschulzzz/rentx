import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars
} from './styles';

import { Car } from '../../components/Car'

export function Home() {
  const carData = {
    brand: 'Audi',
    name: 'RS5 Coupé',
    rent: {
        period: 'Ao dia',
        price: 120,
    },
    thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9cf8f78-c5bd-4a56-943c-9f3d36d2d2fd/dajzhrp-bf1bfc2c-36c4-4517-9884-88400806a6e9.png/v1/fill/w_1024,h_683,strp/audi_tt_rs_coupe_png_by_mrfatback_dajzhrp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvZDljZjhmNzgtYzViZC00YTU2LTk0M2MtOWYzZDM2ZDJkMmZkXC9kYWp6aHJwLWJmMWJmYzJjLTM2YzQtNDUxNy05ODg0LTg4NDAwODA2YTZlOS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Kx6Ac5FppAq2rjTotB-405xFa3p3FOG8Bu5aaKeyWAA'
  }

  return (
      <Container>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
          <Header>
            <HeaderContent>
              <Logo 
                width={RFValue(108)}
                height={RFValue(12)}
              />
              <TotalCars>
                Total de 12 carros
              </TotalCars>
            </HeaderContent>
          </Header>

          <Car data={carData}/>
      </Container>
  );
}