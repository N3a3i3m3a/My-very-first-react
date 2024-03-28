import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [ {author: 'Jordan Moore',
title: 'Interesting Facts For Curious Minds',
img: './images/Dog man.jpg',
 id: 1},

{author: 'James Clear',
title: 'Atomic Habits',
img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
id: 2}
]

function BookList () {
  const someValue='shakeAndBake'
  return (
    <section className='booklist'>
      {books.map((book )=>
      { 
      return <Book{...book} />;
     })}
     <EventExamples/>
    </section>
  );
}
function EventExamples () {
const handleFormInput =(e)=> 
{console.log('handle form input')}

const handleButtonClick =()=> 
{alert('handle form input')}




 return (
    <section> 
    <form>
      <h2>Typical form</h2>
      <input type='text' name='example' onChange={handleFormInput } style={{margin:'1em'}}/>
    </form>
    <button onClick= {()=> console.log('form submitted')}type='button'>Submit</button>
    <div>
    <button onClick={handleButtonClick} type='button'>click me</button>
    </div>
    </section> 
  )
}

const Book = (props) => {
  const{img, title, author}=props;
  console.log(props);
 
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button >Click me</button>
      <h4>{author} </h4> 
    </article>
  );
};

ReactDOM.render(<BookList/>, document.getElementById('root'));
