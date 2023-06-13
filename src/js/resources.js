import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import attackerImage from '../images/cat.png'
import { TiledMapResource } from '@excaliburjs/plugin-tiled';
import towerImage from '../images/dog.png'
import puppypenImage from '../images/puppypen.webp'


const Resources = {
    Attacker: new ImageSource(attackerImage),
    Tower: new ImageSource(towerImage),
    Puppypen: new ImageSource(puppypenImage),
    Range: new ImageSource(puppypenImage),
    TiledMap: new TiledMapResource("./src/map/Tower_defense_map.tmx"),
}
const ResourceLoader = new Loader([Resources.Attacker, Resources.TiledMap, Resources.Tower, Resources.Puppypen, Resources.Range])

export { Resources, ResourceLoader }

