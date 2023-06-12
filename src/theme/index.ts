import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

import radii from './foundations/borderRadius';
import breakpoints from './foundations/breakpoints';
import colors from './foundations/colors';
import config from './foundations/config';
import fontSizes from './foundations/fontSizes';
import fontWeights from './foundations/fontWeights';
import fonts from './foundations/fonts';
import shadows from './foundations/shadows';
import sizes from './foundations/sizes';
import space from './foundations/space';
import zIndices from './foundations/zIndices';

import Accordion from './components/accordion';
import Button from './components/button';
import Card from './components/card';
import Form from './components/form';
import Input from './components/input';
import Modal from './components/modal';
import NumberInput from './components/numberInput';
import PinInput from './components/pinInput';
import Radio from './components/radio';
import Select from './components/select';
import Tabs from './components/tab';
import Table from './components/table';
import Text from './components/text';
import Textarea from './components/textarea';

const customTheme = {
  colors,
  styles,
  fonts,
  config,
  shadows,
  breakpoints,
  zIndices,
  fontWeights,
  fontSizes,
  space,
  sizes,
  radii,
  components: {
    Button,
    Input,
    Textarea,
    NumberInput,
    Tabs,
    Modal,
    PinInput,
    Accordion,
    Radio,
    Card,
    Text,
    Table,
    Select,
    Form,
  },
};

export default extendTheme(customTheme);
