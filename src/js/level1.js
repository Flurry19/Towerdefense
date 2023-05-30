import * as ex from "excalibur"
import { Resources, ResourceLoader } from "./resources"
import { Attacker } from './attacker'

// Export map
export class Level extends ex.Scene {

    onInitialize(Engine) {
        // Add tilemap to scene
        Resources.TiledMap.addTiledMapToScene(this)
    }

    onPreUpdate(Engine) {

    }
}