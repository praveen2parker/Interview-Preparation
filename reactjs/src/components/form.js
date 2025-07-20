import react, { use, useState } from 'react'


const Form = ()=>{

const init =  {
  name:"",
  email:"",
  number:"",
  gender:"",
  country:"",
  password:"",
}
const [formData, setFormData] = useState(init);
const [entireData, setEntireData] = useState([]);
const [editIndex, setEditIndex] = useState(null);

const handleChange = (val)=>{
  if(val){
    const {name, value} = val.target
    setFormData((prev)=>({
      ...prev,
      [name] : value
    }
    ))
  // console.log(formData)
  }
}

const submitFun = (e)=>{
  e.preventDefault();

  if(editIndex !== null){
    const updatedData = [...entireData]
    updatedData[editIndex] = formData
    setEntireData(updatedData)
    setEditIndex(null);
  }else{
    setEntireData((prev)=> [...prev, formData])
  }

  // console.log(entireData)
  setFormData(init)
}

const editFun = (i)=>{
  setEditIndex(i)
  setFormData(entireData[i])
}

const deleteFun = (i) =>{
  const newData =  entireData.filter((a,b) => b !== i)
  setEntireData(newData)
}

  return(
    <>
    <form onSubmit={submitFun}>
      <label>Name:
        <input type='text' name='name' onChange={handleChange} value={formData.name}/>
      </label>
      <br/>
      <label>
        Email:
      <input type='email' name="email"onChange={handleChange} value={formData.email}/>
      </label>
      <br/>
      <label>
        Number:
      <input type='number' name="number"onChange={handleChange} value={formData.number}/>
      </label>
      <br/>
      <label>
        Male
      <input type='radio' name="gender"  checked={formData.gender === 'male'} onChange={handleChange} value={'male'}/>
      </label>
      <label>
        Female
      <input type='radio' name="gender"  checked={formData.gender === 'female'} onChange={handleChange} value={'female'}/>
      </label>
      <br/>
      <label>
        Country
        <select value={formData.country} name='country' onChange={handleChange}>
          <option>Select Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
        </select>
      </label>
      <br/>
      <label>
        Password
      <input type='password' onChange={handleChange} name='password' value={formData.password}/>
      </label>
      <br/>
      <button type='submit'>Submit</button>
    </form>

    {entireData.length > 0 ? entireData.map((a,b)=> <ul>
      <li>{a.name}</li>
      <li>{a.email}</li>
      <li>{a.number}</li>
      <li>{a.gender}</li>
      <li>{a.country}</li>
      <li>{a.password}</li>
      <button onClick={()=> editFun(b)}>Edit</button>
      <button onClick={()=> deleteFun(b)}>Delete</button>
    </ul>) : <p>Nothing</p>}
    
    </>
  )
}
export default Form



















// const Form = () => {

//   const [formData, setFormData] = useState([])
//   const [editIndex, setEditIndex] = useState(null);

//     const formSubmit =(e)=>{
//       e.preventDefault();
//       const data = new FormData(e.target)
//       const newEntry = Object.fromEntries(data.entries());
//       if (editIndex !== null) {
//         // Edit existing entry
//         const updated = [...formData];
//         updated[editIndex] = newEntry;
//         setFormData(updated);
//         setEditIndex(null);
//       } else {
//         // Add new entry
//         setFormData([...formData, newEntry]);
//       }
//       e.target.reset();
//     }

//     const deleteFunction = (i)=>{
//       const newData = formData.filter((a,b)=> b !== i)
//       setFormData(newData)
//     }
//     const editFunction = (i)=>{
//       const entry = formData[i];
//       const form = document.forms[0];
//       for (let key in entry) {
//         if (form[key]) form[key].value = entry[key];
//       }
//       setEditIndex(i);

//     }


//   return (
//     <>
//       <h1>Form</h1>
//       <form onSubmit={formSubmit}>
//         <label>
//           Name: 
//           <input name="name" type="text" />
//         </label>
//         <br/>
//         <label>
//           Email:
//           <input name="email" type="email" />
//         </label>
//         <br/>
//         <label>
//           Number:
//           <input name="number" type="number" />
//         </label>
//         <br/>
//         <label>
//           Male:
//           <input name="gender"type="radio" />
//         </label>
//         <label>
//           Female:
//           <input name="gender" type="radio" />
//         </label>
//         <br/>
//         <label>
//           Country:
//           <select name="country">
//             <option>Select</option>
//             <option>India</option>
//             <option>USA</option>
//             <option>Russia</option>
//           </select>
//         </label>
//         <br/>
//         <label>
//           Password:
//           <input  name="password"type="password" />
//         </label>
//         <br/>
//         <button type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
//       </form>
//       {formData.length === 0 ? <p>nothing</p>: formData.map((a,b)=> (
//         <ul>
//           <li>{a.name}</li>
//           <li>{a.email}</li>
//           <button onClick={()=> editFunction(b)}>Edit</button>
//           <button onClick={()=> deleteFunction(b)}>Delete</button>
//         </ul>
//       ))}
//     </>
//   );
// };

// export default Form;
