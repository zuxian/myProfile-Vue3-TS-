import { App } from "vue";
import Line from "./charts/Line.vue";
import Relation from "./charts/Relation.vue";
import FootPrint from "./charts/FootPrint.vue";

export const MyLine = Object.assign(Line, {
  install(app: App) {
    app.component(Line.name, Line);
  }
});

export const MyRelation = Object.assign(Relation, {
  install(app: App) {
    app.component(Relation.name, Relation);
  }
});

export const MyFootPrint = Object.assign(FootPrint, {
  install(app: App) {
    app.component(FootPrint.name, FootPrint);
  }
});
