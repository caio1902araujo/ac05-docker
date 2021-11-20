import './App.css';
import Axios from 'axios'
import { useState, useEffect } from "react"

const App = () => {
 
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/topics").then((res) => setTopics(res.data))
  }, [])

  return <div className="container">
    <Form topics={topics} setTopics={setTopics} />
    <div className="topic-group">
      {topics.map((topic, index) => (
        <Topic key={index} title={topic.title} description={topic.description}/>
      ))}
    </div>
  </div>
}

const Form = ({topics, setTopics}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  const submit = async (e) => {
    e.preventDefault();
    const response = await Axios.post("http://localhost:8080/topic", { title, description})
    setTopics([response.data, ...topics])
    setTitle("")
    setDescription("")
  }
  
  return <form method="POST" action="#" onSubmit={submit}>
    <h1>Criando noticia</h1>
    <Input text={title} onValueChanged={setTitle} label="Título"/>
    <Input text={description} onValueChanged={setDescription} label="Paragrafo" isBox="true"/>
    <Button label="Enviar"/>
  </form>
}

const Input = ({text, label, isBox = false, onValueChanged}) => {
  const onChange = (e) => { onValueChanged(e.target.value) };
  
  return <div className="input-group">
    <label className="input-label">{label}</label>
    {isBox ?  <textarea className="input" onChange={onChange} value={text} /> : <input onChange={onChange} value={text} className="input"/>}
  </div>
}

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
