/* resource.js
 *
 * Copyright (c) 2019, University of Minnesota
 *
 * Author: Bridger Herman
 *
 * Main file
 */

import { importWasm } from './loadWasm.js';
import { WreScript } from './wre-js/wreScript.js'
import { initShader } from './wre-js/shader.js'
import * as wre from './pkg/wre_wasm.js';

function init() {
    initShader('unlit');
    // let e = wre.create_entity();
    // let s = new WreScript(e);
    // wre.add_script(e, s);
}

window.onload = () => importWasm().then(init);
