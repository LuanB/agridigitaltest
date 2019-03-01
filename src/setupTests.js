import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// setup file
configure({ adapter: new Adapter() });

const mockNoop = () => new Promise(() => {});

jest.mock('axios', () => ({
  default: mockNoop,
  get: mockNoop,
  post: mockNoop,
  put: mockNoop,
  delete: mockNoop,
  patch: mockNoop
}));
