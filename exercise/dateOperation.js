/* Buat Logical Date, Hari ini Minus 1 minggu yang lalu contoh sekarang tgl "2020-08-07" menjadi "2020-08-01" */

const dateOperation = () => { 
    const options = { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    const today = new Date()
    today.setDate(today.getDate() - 7)
    
    return today.toLocaleDateString('en-us', options)
}

console.log(dateOperation()) // Thursday, May 18, 2023