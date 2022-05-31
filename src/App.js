import './App.css';
import HeaderSubtitle from './components/header/HeaderPar';
import HeaderTitle from './components/header/HeaderText';
import Portfolio from './components/mainTitle/PortfolioText';
import HeaderBtn from './components/UI/Btn';




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
     </main>
    </div>
  );
}

export default App;


