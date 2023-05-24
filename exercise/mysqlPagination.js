/* Buat Logical Pagination pada database mysql */
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
})

const getItemsPaginated = (page, pageSize) => {
    const offset = (page - 1) * pageSize
    const query = `SELECT * FROM items LIMIT ${pageSize} OFFSET ${offset}`

    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

const page = 2
const pageSize = 10
const paginated = getItemsPaginated(page, pageSize).then(results => console.log('Data', results)).catch(error => console.error('Error', error))
console.log(paginated)

/* 
  Expected Output 
  
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  // ...
  { id: 10, name: 'Item 10' }

  berarti kita akan mengambil data dari baris ke-11 hingga ke-20 dari tabel items. Jadi, output menampilkan array objek yang mewakili 10 data dari halaman tersebut.
*/