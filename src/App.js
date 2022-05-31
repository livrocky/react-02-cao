import './App.css';
import HeaderSubtitle from './components/header/HeaderPar';
import HeaderTitle from './components/header/HeaderText';
import Portfolio from './components/mainTitle/PortfolioText';
import HeaderBtn from './components/UI/Btn';
import AvatarImg from './assets/avatar.jpg';
import AvatarImg2 from './assets/card2.png';
import Card from './components/Cards/Card1';




function App() {
  return (
    <div className='App'>
        <header className='App-header'>
          <HeaderTitle title='Title' />
          <HeaderSubtitle subtitle='Somethnig about text' subtitle1='In two lines' />
          <HeaderBtn text='Button' />
        </header>

      <main>
        <Portfolio title='Portfilio' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repudiandae, ab aperiam accusamus in perspiciatis atque recusandae dolorum repellat iure placeat libero ratione totam possimus praesentium blanditiis corrupti, numquam officia.' />
     <div className="portfolio-cards">
    <Card image={AvatarImg} text='Avatar name'/>
    <Card image={AvatarImg} text='Avatar name'/>
    <Card image={AvatarImg} text='Avatar name'/>
    <Card image={AvatarImg2} text='Second Avatar'/>
    <Card image={AvatarImg2} text='Second Avatar'/>
    <Card image={AvatarImg2} text='Second Avatar'/>
     </div>
     </main>
    </div>
  );
}

export default App;


