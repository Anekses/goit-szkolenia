import { useEffect, useState } from "react"

export const Home = () => {
  const [universityList, setUniversityList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState('Poland')

  const baseUrl = 'http://universities.hipolabs.com/search?'

  const getUni = async () => {
    // const countryValue = value ?? 'Poland'

    const a = ''; // 0, false, {}
    const b = a ?? 'something';
    const c = a || 'something';

    const firstCallUrl = `${baseUrl}country=${country}`
    const uni = await fetch(firstCallUrl);
    const data = await uni.json()
    setUniversityList(data);
    setIsLoading(false);

    // const firstCallUrl = `${baseUrl}country=${country}`
    // await fetch(firstCallUrl).then( (uni) => {
    //   const data =  uni.json()
    //    data.then((dataJsoned) => {
      //   setUniversityList(data);
      //   setIsLoading(false);
    // })
    // })
  }

  const sum = (a, b) => {
    return a + b
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true);
    setUniversityList([])

    getUni();

  }
  
  const handleChange = (event) => {
    event.preventDefault()
    const value = event.target.value;
    setCountry(value);
  }

  useEffect(() => {
    // setTimeout(() => {
        getUni();
    // }, 4000)
  }, [])


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="country" value={country} onChange={handleChange} />
        <button type="submit">Szukaj</button>
      </form>
      {
        isLoading ? 
        <div>Something is loading, please wait!</div> :
        <div>
          {universityList.map((uni, index) => {
            return (
              <div key={index}>
                <p>Kraj: {uni.country}</p>
                <div>Nazwa: {uni.name}</div>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}