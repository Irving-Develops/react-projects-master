import React, {useState } from 'react'
// import List from './List'
// import Alert from './Alert'

const App = () => {
  const [grocery, setGrocery] = useState('')
  const [groceryList, setGroceryList] = useState<string[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(isEditing && grocery) {
      setGroceryList(groceryList.map((item, index) => {
        if(editIndex === index) {
          return grocery
        }
        return item
      }))
      setIsEditing(false)
      setGrocery('')
    }else if(grocery) {
      setGroceryList([...groceryList, grocery])
      setGrocery('')
    }else {
      alert('Please enter a value')
    }
  }

  const handleEdit = (index: number) => {
    setGrocery(groceryList[index])
    setEditIndex(index);
    setIsEditing(true)
  }

  return (
<section className="section-center">
  <form action="post" className="grocery-form" onSubmit={handleSubmit}>
    <h3>grocery bud</h3>
    <div className="form-control">
      <input type="text" className="grocery" placeholder='e.g. eggs'value={grocery} onChange={(e) => setGrocery(e.target.value)}/>
      <button type="submit" className="submit-btn">submit</button>
    </div>
  </form>
  {groceryList ? 
  
  <div className="grocery-container">
    <div className="grocery-list">
    {groceryList.map((item, index) => (
      <article key={index} className="grocery-item">
        <p className="title">{item}</p>
        <div className="btn-container">
          <button className="edit-btn" onClick={() => handleEdit(index)}>edit</button>
          <button className="delete-btn">delete</button>
        </div>
      </article>

    ))}


    </div>
      <button className="clear-btn">clear items</button>
  </div>
  :
  null
  
}
</section>
  )
}

export default App
