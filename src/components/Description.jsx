import React from 'react'
import './Description.css'
const Description = () => {
  return (
    <div className="description">
      <h1 className="baslik">Acı Pizza </h1>
      <div className="fiyat">
        <h1>85.50TL</h1>
      </div>
      <div>
        <p className='paragraf'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
      </div>
    </div>
  )
}

export default Description

