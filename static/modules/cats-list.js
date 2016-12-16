/* kach
 *
 * /static/modules/cats-list.js - Vue components about cats
 *
 * coded by quentin
 * started at 16/12/2016
 */

import Vue from "vue";

Vue.component( "cats-list", {
    "props": [ "elements" ],
    "template": `
        <ul>
            <li v-for="elt in elements">
                <strong>{{ elt.name }}</strong>
                <span>( {{ elt.age }} )</span>
            </li>
        </ul>
    `,
} );
