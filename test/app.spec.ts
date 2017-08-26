import * as request from 'request-promise';

describe('Testeando un endpoint', () => {


  it('deberia mostrar exito', () => {
    
    request('localhost:8000/data')
    .then(data=>{
      expect(data).toBe('exitoo');
    });
  });


});