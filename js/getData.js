const getData = async(url) => {
    const response = await fetch(url);
    if(response.ok) {
        return response.json();
    } else {
        throw `Error dude, ${response.status}`;
    }
};

export default getData;