function App() {
    const [parkData, setParkData] = useState();
    useEffect(() => {
        console.log("test")
        getHike()
    }, [])
    
    //api call function
    function getHike() {
        fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=94HrMZasixLsS8y0uUuB6DpcI8Dc6abmNlhnZXBR')
            .then(response => response.json())
            .then(results => {
                console.log(results)
                setParkData(results);
            })
