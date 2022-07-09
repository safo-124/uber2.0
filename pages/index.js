import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'



export default function Home() {
  
  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        {/*Header */}
        <Header> 
          <UberLogo src ="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
          <Profile>
            <Name>Safo Emmanuel</Name>
            <UserImage src = "https://scontent.facc1-1.fna.fbcdn.net/v/t1.6435-9/42505237_1048262565334002_8851456383309053952_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG-ZSo2kaa1hSaR5nhJqmp0PnKbdxpvPVY-cpt3Gm89Vt4IoSBozJYT8dR6vELCmLUaQKjeJtGmdkRStY51eHw7&_nc_ohc=ihGFK26hqbsAX-UWhXv&_nc_ht=scontent.facc1-1.fna&oh=00_AT8Z0P2p9NJ81nTIWmnQYtzJJ3mylzp09aDqaFRYv7anPw&oe=62D6D5BC"/>
          </Profile>
        </Header>
        {/*ActionButtons */}
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src = "https://i.ibb.co/cyvcpfF/uberx.png"/>{/*Self closing Tag */}
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src = "https://i.ibb.co/n776JLm/bike.png"/>Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src = "https://i.ibb.co/5RjchBg/uberschedule.png"/>Reserve
          </ActionButton>
        </ActionButtons>

        {/*Inputs Buttons */}
        <InputButton>
        Where to?
        
        </InputButton>





      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex  h-screen flex-col
`



const ActionItems = tw.div`
flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center`

const UberLogo = tw.img`
h-28`

const Profile = tw.div`
flex items-center`

const Name = tw.div`
mr-4 w-20 text-sm`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px`

const ActionButtons = tw.div`
flex`

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl`

const ActionButtonImage = tw.img`
h-3/5`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8`