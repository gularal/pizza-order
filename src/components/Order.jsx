import React from 'react'
import './Order.css'
const Order = () => {
    return (
        <div className="order">
            <div className="radio-container">
                <div className="choose-size">
                    <h2 className='boyut'>Boyut Seç*</h2>
                    <label className="radio-option">
                        <input type="radio" name="size" value="small" />
                        <span className="radio-custom"></span>
                        Küçük
                    </label>

                    <label className="radio-option">
                        <input type="radio" name="size" value="medium" />
                        <span className="radio-custom"></span>
                        Orta
                    </label>

                    <label className="radio-option">
                        <input type="radio" name="size" value="large" />
                        <span className="radio-custom"></span>
                        Büyük
                    </label>
                </div>
                <div className="hamur-container">
                    <div>
                        <h2 className="hamur">Hamur Seç*</h2>
                        <select className="hamur-select" id="hamur-select">
                            <option value="ince">İnce</option>
                            <option value="orta">Orta</option>
                            <option value="kalin">Kalın</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='ek'>
                <h3 className='ek'>Ekstra Malzemeler</h3>
                <p className='ekstra'>En fazla 10 malzeme seçebilirsiniz. 5TL</p>
                <div className="checkbox-container">
                    <div className="checkbox1">
                        <div>
                            <input type='checkbox' id='pepperoni' />
                            <label htmlFor='pepperoni'>Pepperoni</label></div>
                        <div><input type='checkbox' id='tavuk' />
                            <label htmlFor='tavuk'>Tavuk Izgara</label></div>
                        <div><input type='checkbox' id='mısır' />
                            <label htmlFor='mısır'>Mısır</label></div>
                        <div><input type='checkbox' id='sarımsak' />
                            <label htmlFor='sarımsak'>Sarımsak</label></div>
                        <div><input type='checkbox' id='ananas' />
                            <label htmlFor='ananas'>Ananas</label></div>
                    </div>
                    <div className="checkbox2">
                        <input type='checkbox' id='sosis' />
                        <label htmlFor='sosis'>Sosis</label>
                        <input type='checkbox' id='sogan' />
                        <label htmlFor='sogan'>Soğan</label>
                        <input type='checkbox' id='sucuk' />
                        <label htmlFor='sucuk'>Sucuk</label>
                        <input type='checkbox' id='biber' />
                        <label htmlFor='biber'>Biber</label>
                        <input type='checkbox' id='kabak' />
                        <label htmlFor='kabak'>Kabak</label>
                    </div>
                    <div className="checkbox3">
                        <input type='checkbox' id='kanada' />
                        <label htmlFor='kanada'>Kanada Jambonu</label>
                        <input type='checkbox' id='domates' />
                        <label htmlFor='domates'>Domates</label>
                        <input type='checkbox' id='jalepeno' />
                        <label htmlFor='jalepeno'>Jalepeno</label>


                    </div>
                </div>
            </div>
            <div className="siparis">
                <div className='buttons'>
                <button className='eksi'>-</button>
                <button>1</button>
                <button className='arti'>+</button>
                </div>
                <div className='button-hesap'>
                    <label className='s1'>Sipariş Toplamı</label>
                    <label className='s2'>Seçimler</label>
                    <label className='stoplam'>Toplam</label>
                    <label className='s3'>   </label>
                </div>

            </div>
        </div>


    )
}


export default Order
