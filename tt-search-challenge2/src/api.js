import axios from 'axios'

const BASE_URL = "https://api-staging.tt.ge"


const PUBLIC_BUCKET_URL = "https://s3.eu-central-1.amazonaws.com/public.tt.ge"
const is_Empty_Comp_url = company_url ? company_url : "/images/logos/redberry.png"
const Company_URL = `${PUBLIC_BUCKET_URL}${is_Empty_Comp_url}`


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlYXJjaC1jaGFsbGVuZ2VAdHQuZ2UiLCJzdWIiOiJlOGE3N2E4OS00MzM2LTQyYzYtOWZiYS1hZDY4ODU2YzkzMmEiLCJpYXQiOjE2MTA4NzQzNTgsImV4cCI6MTYxMzQ2NjM1OH0.CEa_eMgGrkzlULWt76D8-E-QzH45tlM99c7_IVk4dd0"





export function apiForJobs() {

    return axios.get(`${BASE_URL}/search/jobs?take=7`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })


}


export function apiForJobsUsingQuery(query, skip, take, field) {
    const URL = field === "null" ? `${BASE_URL}/search/jobs?query=${query}&skip=${skip}&take=${take}` : `${BASE_URL}/search/jobs?fieldId=${field}&query=${query}&skip=${skip}&take=${take}`
    return axios.get(URL,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}


export function apiForJobsUsingFields(field) {
    const URL_2 = field === "null" ? `${BASE_URL}/search/jobs?take=7` : `${BASE_URL}/search/jobs?fieldId=${field}&take=7`

    return axios.get(URL_2,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
}
