const version = '2019.2.15';

const modes = {
  PW: 'password',
  PP: 'passphrase'
};

const initParams = {
  [modes.PW]: {
    length: 16,
    upper: true,
    lower: true,
    numbers: true,
    symbols: false
  },
  [modes.PP]: {
    length: 5,
    delimiter: 'hyphen'
  }
};

const localStorageKeys = {
  params: `pwgen-tgws-dev-params-${version}`,
  mode: `pwgen-tgws-dev-mode-${version}`
};

const strengthsEnum = {
  OK: 'weak',
  GOOD: 'pretty decent',
  STRONG: 'really super strong'
};

export default {
  version,
  modes,
  initParams,
  localStorageKeys,
  strengthsEnum,
  GAPropertyId: 'UA-27496454-1'
};
