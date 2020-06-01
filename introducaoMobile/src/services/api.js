import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});


/**
 * iOS com Emulador: localhost
 * iOS com físico: IP da máquina e deve estar com o celular e pc na mesma rede wi-fi
 * Android com Emulador: localhost (run cmd => adb reverse tcp:3000 tcp:3000)
 *                                                       (porta da api)
 * 
 */

