export const initialState = {
  vehicles: {
    bus: [
      {
        title: 'Tipos de Ônibus',
        types: [
          {
            name: 'Coletivo Urbano',
            code: 'coletivo urbano'
          },
          {
            name: 'Coletivo Intermunicipal',
            code: 'coletivo intermunicipal'
          },
          {
            name: '3C - Tribus',
            code: '3C-tribus'
          },
          {
            name: '4CB',
            code: '4CB'
          },
        ]
      }
    ],
    truck: [
      {
        title: 'Caminhões',
        types: [
          {
            name: '2C',
            code: '2C'
          },
          {
            name: '3C',
            code: '3C'
          },
          {
            name: '4CD',
            code: '4CD'
          },
        ]
      },
      {
        title: 'Reboques',
        types: [
          {
            name: '2C2',
            code: '2C2'
          },
          {
            name: '2C3',
            code: '2C3'
          },
          {
            name: '3C2',
            code: '3C2'
          },
          {
            name: '3C3',
            code: '3C3'
          },
        ]
      },
      {
        title: 'Semi-Reboques',
        types: [
          {
            name: '2S1',
            code: '2S1'
          },
          {
            name: '2S2',
            code: '2S2'
          },
          {
            name: '2S3',
            code: '2S3'
          },
          {
            name: '3S1',
            code: '3S1'
          },
          {
            name: '3S2',
            code: '3S2'
          },
          {
            name: '2I2',
            code: '2I2'
          },
          {
            name: '2I3',
            code: '2I3'
          },
          {
            name: '2J3',
            code: '2J3'
          },
          {
            name: '3I2',
            code: '3I2'
          },
          {
            name: '3I3',
            code: '3I3'
          },
          {
            name: '3J3',
            code: '3J3'
          },
        ]
      },
      {
        title: 'Veículos de Carga',
        types: [
          {
            name: 'Bitrem',
            code: '3S2S2'
          },
          {
            name: 'Rodotrem',
            code: '3S2C4'
          },
          {
            name: 'Tritrem',
            code: '3S2S2S2'
          },
          {
            name: '3M6',
            code: '3M6'
          },
        ]
      },
    ],
    car: [
      {
        title: 'Carros',
        types: [
          {
            name: 'Passeio',
            code: 'passeio',
          },
          {
            name: 'Utilitários',
            code: 'utilitarios',
          },
        ]
      }
    ],
    motorcycle: [
      {
        title: 'Moto',
        types: [
          {
            name: 'Moto',
            code: 'moto'
          }
        ]
      }
    ]
  },
  savedItems: []
}

export const SELECT_VEHICLE_TYPE = 'SELECT_VEHICLE_TYPE'
export const SAVE_REGISTER = 'SAVE_REGISTER'
export const DELETE_REGISTER = 'DELETE_REGISTER'