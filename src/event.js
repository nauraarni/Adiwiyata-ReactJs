import React, { Component } from 'react'
import './event.css'
import pohon from './image/1juta-pohon.png'
import lahan from './image/lahan-basah.png'
import sampah from './image/peduli-sampah.jpeg'
import konservasi from './image/konservasi.jpeg'
import rimbawan from './image/rimbawan.jpeg'
import kehutanan from './image/hutan-sedunia.jpeg'
import hutan from './image/hutan-internasional.jpeg'
import air from './image/air.jpeg'
import meteorologi from './image/meteorologi.jpeg'
import bumi from './image/bumi.jpeg'
import hayati from './image/hayati.jpeg'
import lingkungan from './image/lingkungan-hidup.jpeg'
import degradasi from './image/degradasi.jpeg'
import alam from './image/konservasi-alam.jpeg'
import ozon from './image/ozon.jpeg'
import habitat from './image/habitat.jpeg'
import pangan from './image/pangan.jpeg'
import satwa from './image/satwa.jpeg'
import hmpi from './image/hmpi.jpeg'
import kenliar from './image/kenliar.jpeg'

class event extends Component {
    render() {
        return (
            <div>
                <h2>Hari Besar Kementrian Lingkungan dan Kehutanan</h2> 
                <p>Berikut adalah Agenda Hari Besar Kementrian Lingkungan dan Kehutanan:</p>
                <div>
                <img src={pohon} width='300px' height = '200px' />
                <p>Hari Perencanaan Gerakan 1 Juta Pohon: 10 Januari</p>

                <img src={lahan} width='300px' height = '200px' />
                <p>Hari Lahan Basah Sedunia: 2 Februari</p>

                <img src={sampah} width='300px' height = '200px' />
                <p>Hari Peduli Sampah Nasional: 21 Februari</p>

                <img src={konservasi} width='300px' height = '200px' />
                <p>Hari Strategi Konservasi Sedunia: 6 Maret</p>

                <img src={rimbawan} width='300px' height = '200px' />
                <p>Hari Bhakti Rimbawan: 16 Maret</p>

                <img src={kehutanan} width='300px' height = '200px' />
                <p>Hari Kehutanan Sedunia: 20 Maret</p>

                <img src={hutan} width='300px' height = '200px' />
                <p>Hari Hutan Internasional: 21 Maret</p>

                <img src={air} width='300px' height = '200px' />
                <p>Hari Air Sedunia: 22 Maret</p>

                <img src={meteorologi} width='300px' height = '200px' />
                <p>Hari Meteorologi: 23 Maret</p>

                <img src={bumi} width='300px' height = '200px' />
                <p>Hari Bumi: 22 April</p>

                <img src={hayati} width='300px' height = '200px' />
                <p>Hari Keanekaragaman Hayati: 21 Mei</p>

                <img src={lingkungan} width='300px' height = '200px' />
                <p>Hari Lingkungan Hidup Sedunia: 5 Juni</p>

                <img src={degradasi} width='300px' height = '200px' />
                <p>Hari Penanggulangan Degradasi Lahan dan Kekeringan Sedunia: 17 Juni</p>

                <img src={alam} width='300px' height = '200px' />
                <p>Hari Konservasi Alam Nasional: 10 Agustus</p>

                <img src={ozon} width='300px' height = '200px' />
                <p>Hari Ozon Internasional: 16 September</p>

                <img src={habitat} width='300px' height = '200px' />
                <p>Hari Habitat Sedunia: 6 Oktober</p>

                <img src={pangan} width='300px' height = '200px' />
                <p>Hari Pangan Sedunia: 16 Oktober</p>

                <img src={satwa} width='300px' height = '200px' />
                <p>Hari Cinta Puspa dan Satwa Nasional: 5 November</p>

                <img src={hmpi} width='300px' height = '200px' />
                <p>HMPI dan BMN: 28 November</p>
                
                <img src={kenliar} width='300px' height = '200px' />
                <p>Hari Konservasi Ken Liar Sedunia: 4 Desember</p>
                </div>
            </div>
        )
    }
}

export default event;