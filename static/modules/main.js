/* kach
 *
 * /static/modules/main.js - Main entry file
 *
 * coded by quentin
 * started at 09/12/2016
 */

import Vue from "vue";

import "./cats-list";

import "./components/secret";


let oApp = new Vue( {
    "template": `
        <div class="box">
            <p>{{ message }}</p>
            <cats-list v-bind:elements="cats"></cats-list>
        </div>
    `,
    "data": {
        "message": "Hey from Vue!",
        "secret": "Cat taste like chicken!",
        "cats": [
            { "name": "Skitty", "age": 6 },
            { "name": "Pixel", "age": 4 },
        ],
    },
} );

oApp.$mount( "#app" );
