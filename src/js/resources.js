import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import FishImage from '../images/Attackers1.jpg'

const Resources = {
    Fish: new ImageSource(FishImage)
}
const ResourceLoader = new Loader([Resources.Fish])

export { Resources, ResourceLoader }