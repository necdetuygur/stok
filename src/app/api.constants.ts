export const ENDPOINT =
  localStorage.getItem('Host') || 'https://stok-api.onrender.com';
export const KULLANICI_URL = ENDPOINT + '/kullanici';
export const KAYIT_URL = ENDPOINT + '/kullanici/kayit';
export const GIRIS_URL = ENDPOINT + '/kullanici/giris';
export const STOK_URL = ENDPOINT + '/stok';
export const STOK_LOG_URL = ENDPOINT + '/stok-log';
