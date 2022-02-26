


    async function getHike() {
        
        const response = await fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=94HrMZasixLsS8y0uUuB6DpcI8Dc6abmNlhnZXBR');
        const results = await response.json();
        return results;
        }

    module.exports={getHike};