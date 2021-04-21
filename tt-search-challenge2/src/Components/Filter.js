import React,{useState,useEffect} from 'react'
import Button from './Button'
import axios from 'axios'
import styles from '../Styles/Filter.module.css'

function Filter({handleFieldChange}) {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlYXJjaC1jaGFsbGVuZ2VAdHQuZ2UiLCJzdWIiOiJlOGE3N2E4OS00MzM2LTQyYzYtOWZiYS1hZDY4ODU2YzkzMmEiLCJpYXQiOjE2MTA4NzQzNTgsImV4cCI6MTYxMzQ2NjM1OH0.CEa_eMgGrkzlULWt76D8-E-QzH45tlM99c7_IVk4dd0"
    const [fields, setFields] = useState([])
    const [isActive, setIsActive] = useState("1")
    const handleIsActiveChange = (newValue) => setIsActive(newValue)

    var nullObj = {
      id: "null",
      name: "all"
  }


    useEffect(() => {
        axios.get("https://api-staging.tt.ge/fields",{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => {
          setFields(res.data.items)
          // console.log(res.data.items)
        }).catch(err => 
            {console.log(err)}
        )
      }, [])

      var fieldNames = []
      fields.map(field => fieldNames.push(field.name))


    return (
        <div>
          {/* {console.log(fields[0].id)} */}
          {/* {console.log(one)} */}
            <div className = {styles["flex-button-container"]}>
                <Button classsName = {styles["btn"]} text = "All" id = "1" fld = {nullObj} handleFieldChange = {handleFieldChange} isActive = {isActive} handleIsActiveChange = {handleIsActiveChange} />
                <Button classsName = {styles["btn"]} text = {fieldNames[0]} id = "2" fld = {fields[0]} handleFieldChange = {handleFieldChange} isActive = {isActive} handleIsActiveChange = {handleIsActiveChange} />
                <Button classsName = {styles["btn"]} text = {fieldNames[1]} id = "3" fld = {fields[1]} handleFieldChange = {handleFieldChange} isActive = {isActive} handleIsActiveChange = {handleIsActiveChange} />
                <Button classsName = {styles["btn"]} text = {fieldNames[2]} id = "4" fld = {fields[2]} handleFieldChange = {handleFieldChange} isActive = {isActive} handleIsActiveChange = {handleIsActiveChange} />
                <Button classsName = {styles["btn"]} text = {fieldNames[3]} id = "5" fld = {fields[3]} handleFieldChange = {handleFieldChange} isActive = {isActive} handleIsActiveChange = {handleIsActiveChange} />
                <Button classsName = {styles["btn"]} text = {fieldNames[4]} id = "6" fld = {fields[4]} handleFieldChange = {handleFieldChange} isActive = {isActive} handleIsActiveChange = {handleIsActiveChange} />
                <Button classsName = {styles["btn"]} text = {fieldNames[5]} id = "7" fld = {fields[5]} handleFieldChange = {handleFieldChange} isActive = {isActive} handleIsActiveChange = {handleIsActiveChange} />
                <Button classsName = {styles["btn"]} text = {fieldNames[6]}id = "8" fld = {fields[6]} handleFieldChange = {handleFieldChange} isActive = {isActive} handleIsActiveChange = {handleIsActiveChange} />
            </div>
        </div>
    )
}

export default Filter
