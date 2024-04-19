import { useState } from "react"
import { gql, useMutation } from '@apollo/client'

const SET_DOB = gql`
    mutation($name: String!, $born: Int!) {
    setBirthYear(name: $name, born: $born) {
      name
      born
    }
  }
`

const UpdateBirthYear = (props) => {
    const [setDob] = useMutation(SET_DOB)
    const [authorName, setAuthorName] = useState()
    const [birthYear, setBirthYear] = useState()

    const onChangeSelctedAuthor = (e) => {
        const index = Number(e.target.value)
        setAuthorName(props.data[index].name)
        setBirthYear(props.data[index].born)
    }

    const onChangeBirthYear = (e) => {
        const year = Number(e.target.value)
        setBirthYear(year)
    }

    const onUpdateBirthYear = (e) => {
        setDob({variables: {name: authorName, born: birthYear}})
    }

    if (!props)
        return null
    
    return (
        <main>
            <h2>Set birthdate</h2>
            <div>
                <label>name</label>
                <select onChange={e => onChangeSelctedAuthor(e)}>
                {
                    props.data.map((a,i) => (
                        <option key={i} value={i} readOnly>{a.name}</option>
                    ))
                }
                </select>
            </div>
            <div>
                <label>born</label>
                <input type='number' defaultValue={birthYear} onChange={e => onChangeBirthYear(e)}></input>
            </div>
            <button onClick={e => onUpdateBirthYear(e)}>update author</button>
        </main>        
    )
}

export default UpdateBirthYear