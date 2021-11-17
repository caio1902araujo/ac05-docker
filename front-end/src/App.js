import './App.css';

const App = () => (
  <div className="container">
    <Form/>
    <div className="topic-group">
      <Topic title="Título 1" description="descrição"/>
    </div>
  </div>
)

const Form = () => (
  <form method="POST">
    <h1>Criando noticia</h1>
    <Input label = "Título"/>
    <Input label = "Paragrafo" isBox="true"/>
    <Button label="Enviar"/>
  </form>
)

const Input = ({label, isBox = false}) => (
  <div className="input-group">
    <label className="input-label">{label}</label>
    {isBox ?  <textarea className="input"/> : <input className="input"/>}
  </div>
)

const Button = ({label}) => (
  <button className="button">{label}</button>
)

// TODO add axios and consume endpoint 
const Topic = ({title, description}) => (
  <div className="topic">
    <span className="topic-title">{title}</span>
    <span className="topic-description">{description}</span>
  </div>
)

export default App;
