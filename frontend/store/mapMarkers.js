export const state = () => ({
    markers: [
        {
            id: "1",
            position: { lat: 43.286620, lng: -93.202380 },
            info : {
                name: "Barn Boy Grill",
                type: "food",
                address: "125 W 4th St, Grand Island, NE 68801",
                directions: "https://www.google.com/maps/dir/125+W+4th+St,+Grand+Island,+NE+68801",
                hours: "Open Monthly"
            }
        },
        {
            id: "2",
            position: { lat: 42.583190, lng: -87.820270 },
            info: {
                name: "Lulu Birds",
                type: "shop",
                address: "720-58th St , Kenosha, WI 53140",
                directions: "https://www.google.com/maps?saddr=+720-58th+St+,Kenosha,WI,53140",
                hours: "TH: 1 to 5pm, F: 10 to 5pm, SAT: 10 to 4pm, SUN: 11 to 3pm"
            }
        },
        {
            id: "3",
            position: { lat: 42.164730, lng: -94.254640 },
            info: {
                name: "Rachel\'s Wines",
                type: "winery",
                address: "720-58th St , Kenosha, WI 53140",
                directions: "https://www.google.com/maps?saddr=+720-58th+St+,Kenosha,WI,53140",
                hours: "TH: 1 to 5pm, F: 10 to 5pm, SAT: 10 to 4pm, SUN: 11 to 3pm"
            }
        },
        {
            id: "4",
            position: { lat: 42.645350, lng: -95.200880 },
            info: {
                name: "Ninkasi Brewery",
                type: "brewery",
                address: "720-58th St , Kenosha, WI 53140",
                directions: "https://www.google.com/maps?saddr=+720-58th+St+,Kenosha,WI,53140",
                hours: "TH: 1 to 5pm, F: 10 to 5pm, SAT: 10 to 4pm, SUN: 11 to 3pm"
            }
        },
        {
            id: "5",
            position: { lat: 41.016990, lng: -92.411050 },
            info: {
                name: "Best Place Inn",
                type: "lodging",
                address: "720-58th St , Kenosha, WI 53140",
                directions: "https://www.google.com/maps?saddr=+720-58th+St+,Kenosha,WI,53140",
                hours: "TH: 1 to 5pm, F: 10 to 5pm, SAT: 10 to 4pm, SUN: 11 to 3pm"
            }
        },
        {
            id: "6",
            position: { lat: 41.153380, lng: -93.736470 },
            info: {
                name: "Iowa Tourism Board",
                type: "other",
                address: "720-58th St , Kenosha, WI 53140",
                directions: "https://www.google.com/maps?saddr=+720-58th+St+,Kenosha,WI,53140",
                hours: "TH: 1 to 5pm, F: 10 to 5pm, SAT: 10 to 4pm, SUN: 11 to 3pm"
            }
        },
    ]
});

export const getters = {
    getMarkers (state) {
        return state.markers;
    }
};

export const mutations = {

};

export const actions = {

};