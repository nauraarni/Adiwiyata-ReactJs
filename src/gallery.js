import React, { Component } from 'react'
import './beranda.css'
import foto1 from './image/foto1.jpeg'
import foto2 from './image/foto2.jpeg'
import foto3 from './image/foto3.jpeg'
import foto4 from './image/foto4.jpeg'
import foto5 from './image/foto5.jpeg'
import foto6 from './image/foto6.jpeg'
import foto7 from './image/foto7.jpeg'
import foto8 from './image/foto8.jpeg'

class gallery extends Component {
    render() {
        return (
            <div>
                <h2>Dokumentasi Kegiatan Adiwiyata</h2>

                <img src={foto1} width='300px' height = '200px' />
                <img src={foto2} width='300px' height = '200px' />
                <img src={foto3} width='300px' height = '200px' />
                <img src={foto4} width='300px' height = '200px' />
                <img src={foto5} width='300px' height = '200px' />
                <img src={foto6} width='300px' height = '200px' />
                <img src={foto7} width='300px' height = '200px' />
                <img src={foto8} width='300px' height = '200px' />
            </div>
        )
    }
}

export default gallery;