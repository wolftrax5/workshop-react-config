import { configure } from 'enzyme';
// unoficial enzyme adapter to react 17 
// TODO implement de ofcial
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });