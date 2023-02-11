import { Stage } from "./stage.js";

let container = document.querySelector('#stage');
let stage     = new Stage(container, container.clientWidth, container.clientHeight);
let layer     = new Konva.Layer({id: 'rootLayer'});
let dragLayer = new Konva.Layer({id: 'dragLayer'});

stage.add(layer);
stage.add(dragLayer);