const axios = require('axios');

async function fetchData() {
    const apiUrl = 'https://www.instagram.com/api/v1/discover/ayml/';
    const cookies = 'ig_did=REMOVED; ig_nrcb=1; csrftoken=REMOVED;'; // cookies from web browser ... 
    // visit https://www.instagram.com/explore/people/ >> F12 >> Network >> search for /api/v1/discover/ayml/ in file column >> Cookies >> request cookies

    const head = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': cookies,
        'User-Agent': 'REMOVED',
        // headers  from web browser 
        // from the url above and same file right click on it and 'copy value' then 'copy as fetch'
        // then past headers to here
        /// u need to manuy add  [ 'Cookies':cookies, ] to it, like the exam above    
    }
    try {
        const response = await axios.post(apiUrl, 'max_id=%5B%5D&max_number_to_display=30&module=discover_people&paginate=true', {
            headers: head
        });
 
        // Handle the response here
        console.log(response.data);
    } catch (error) {
        // Handle errors here
        console.error(error);
    }
}

// Call the function
fetchData();
