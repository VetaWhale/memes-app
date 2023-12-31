class API {
    constructor() {
        this.baseUrl = 'https://api.imgflip.com'
    }

    fetchMems() {
        return fetch(`${this.baseUrl}/get_memes`)
            .then(data => data.json());
    }
}