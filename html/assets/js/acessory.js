'use strict'

let Acessory = {
    light: {
        property: 'Intensidade',
        icon: '<i class="fa fa-8x fa-lightbulb"></i>'
    },
    sound: {
        property: 'Volume',
        icon: '<i class="fa fa-8x fa-music"></i>'
    },
    air: {
        property: 'Temperatura',
        icon: '<i class="fa fa-8x fa-temperature-low"></i>'
    },
    sensor: {
        property: 'Distância',
        icon: '<i class="fa fa-8x fa-wave-square"></i>',
    },

    /**
     * @brief
     * @param id
     * @param type
     * @param name
     */ 
    get: (id, type, name) => {
        var acessory 

        switch (type) {
        case 1:
            acessory = Acessory.light
            break
        case 2:
            acessory = Acessory.sound
            break
        case 3:
            acessory = Acessory.sensor
            break
        case 4:
            acessory = Acessory.air
            break
        }

        var a = '<div class="column is-2"> <div class="card animate">' +
            '<a href="/acessory/'+ id +'" class="has-text-centered">' +
                '<div class="p-3 has-text-grey" id="object-name">' +
                    name +
                '</div>' +
                '<div class="card-content is-warning" id="object-icon">' +
                    acessory.icon +
                '</div>' +
            '</a>' +
            '<div class="has-text-centered p-3">' +
                '<h6 class="has-text-grey">'+ acessory.property +'</h6>' +
                '<input type="range" min="0" max="100" value="50" class="is-fullwidth" step="1">' +
            '</div></div></div>'
        
        return a
    },

    /**
     * @brief Returns only the icon text necessary
     * @param type
     */ 
    icon: (type) => {
        var icon 

        switch (type) {
        case 1:
            icon = Acessory.light
            break
        case 2:
            icon = Acessory.sound
            break
        case 3:
            icon = Acessory.sensor
            break
        case 4:
            icon = Acessory.air
            break
        }

        return icon
    }
}