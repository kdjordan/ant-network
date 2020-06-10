export const state = () => ({
    index: 0,
    sponsers: [
        {
            id: 0,
            name: 'Iowa Wine Growers',
            url: require('assets/sponsers/Iowa-Wine-RGB-2C-Primary.png')
        },
        {
            id: 2,
            name: 'Dixie Belle',
            url: require('assets/sponsers/dixie-belle.jpg')
        },
        {
            id: 3,
            name: 'Creations',
            url: require('assets/sponsers/creations.png')
        },
        {
            id: 4,
            name: 'Collectors Journal',
            url: require('assets/sponsers/collectors.png')
        }
    ]
});

export const getters = {    
    getSponsers(state) {
        return state.sponsers
    }
};

export const mutations = {
   
};

export const actions = {

};