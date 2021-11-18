import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Kyri'}
          fotoUsuario={'https://scontent.fcgh29-1.fna.fbcdn.net/v/t1.6435-9/68884760_103058294399614_4061692993495629824_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF6HWdgLy2ieuLH82VRE39RGRWWlV1FGKUZFZaVXUUYpZ1Mk2LtXZ_qTR-5XbQAwCf-K46qeKLbCUJDCdOgMedd&_nc_ohc=eDwWInsIoHcAX_XKosC&_nc_ht=scontent.fcgh29-1.fna&oh=3233a67a0ca4539f030ba306399841b9&oe=61BAF8D3'}
          fotoPost={'https://scontent.fcgh29-1.fna.fbcdn.net/v/t39.30808-6/250606494_3088089968080332_8592140185532014372_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFfMUHNat5VKq1jYaW3LYgxzounX9hxgofOi6df2HGCh0ZrmdSSOyTvM7jFZGTdUb3Wneszav6qTtAVy0Z6vkEd&_nc_ohc=7tPw6WCkmhIAX9ZcpuS&_nc_ht=scontent.fcgh29-1.fna&oh=fbb16867797db1cd2e2467c19422bb67&oe=619AD819'}
        />

        <Post
          nomeUsuario={'Nanda'}
          fotoUsuario={'https://scontent.fcgh29-1.fna.fbcdn.net/v/t1.6435-9/97450958_876792396128057_6275685751967449088_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGhT7VRPRNLcS0b5c2MQ7IiiyQGIZGzmW-LJAYhkbOZbwS2IUyJX94OYq8VXwbOw4dAcpURaelXuX0jiYsX17l4&_nc_ohc=dfuRpfUMLDEAX88HBKY&_nc_ht=scontent.fcgh29-1.fna&oh=5a1779445ad72a08aa7622ecc9ca2000&oe=61BD269C'}
          fotoPost={'https://scontent.fcgh29-1.fna.fbcdn.net/v/t1.6435-9/75534870_738851986588766_1787629409377714176_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=84a396&_nc_eui2=AeFEsytmDY3MB9CZEzRBU61kpPw3waVJeo-k_DfBpUl6j6NItvNKVlygYbKJjQT3S5L2UD9CklZtA5YHv-3S2sK-&_nc_ohc=nSnlkx294BAAX9I4lwo&_nc_ht=scontent.fcgh29-1.fna&oh=e1f033fd20f2e9e58542e85a626f5b9c&oe=61B9840D'}
        /> 
      </MainContainer>
      
    );
  }
}

export default App;
