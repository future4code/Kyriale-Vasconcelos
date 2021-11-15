import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fcgh29-1.fna.fbcdn.net/v/t1.6435-9/68884760_103058294399614_4061692993495629824_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF6HWdgLy2ieuLH82VRE39RGRWWlV1FGKUZFZaVXUUYpZ1Mk2LtXZ_qTR-5XbQAwCf-K46qeKLbCUJDCdOgMedd&_nc_ohc=XCi6ozBA3jQAX8Xx38B&_nc_ht=scontent.fcgh29-1.fna&oh=fa74e3f7f2c0cad0bbf40006e0c1f936&oe=61B70453" 
          nome="Kyriale Cavalcanti" 
          descricao="Oi, Sou Kyriale, mas pode me chamar de Kyri. Estou prendendo programação, e no momento apanhando um opuco para o react, mas tenho certeza que tudo vai sair bem!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
        imagem="https://image.flaticon.com/icons/png/512/1239/1239257.png" 
        nome="e-mail"
        descricao="emailkyri@email.com.gg"
        />
        <CardPequeno
        imagem="https://image.flaticon.com/icons/png/512/1201/1201643.png" 
        nome="Endereço"
        descricao="Rua dos Bobos, N. 0"
        />
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/512/1251/1251532.png" 
          nome="Engenharia Química" 
          descricao="Sou formada em engenharia química, de graduação (UNICAP) e mestrado (USP). Onde mais gosto de atuar é no laboratório, fazendo pesquisa ou controle de qualidade." 
        />
        
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/512/287/287221.png" 
          nome="Pokémon" 
          descricao="Também sou Professora Pokémon licenciada pela Pokámon Company. Posso fazer diversos eventos oficiais que ajudam os jogadores a somarem pontos para o torneio mundial :)" 
        />
      </div>


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
