import { useEffect, useState } from "react"
import styled from "styled-components"
import ActivityItem from "./ActivityItem"
import axios from "axios"

const Container=styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
flex-wrap: wrap;

`

const Activities = () => {
    const [activities,setActivities]=useState([])
    useEffect(()=>{
axios.get("http://localhost:5000/api/activities")
.then(response=>{
    setActivities(response.data)
})
    },[])
    return (
        <Container>
            {
                activities.map(item=>(
                    <ActivityItem item={item} key={item._id}/>
                ))
            }
        </Container>
    )
}

export default Activities
