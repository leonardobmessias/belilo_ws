import Image from 'next/image'
import React from 'react'
import style from './datainfo.style.module.scss'
import img1 from '../../../../public/img1.jpg'
import img2 from '../../../../public/img2.jpg'
import img3 from '../../../../public/img3.jpg'




function DataInfo() {
  return (
    <>
    <div className={style.container}>
      <h2>Bons motivos para você estar no digital:</h2>
      <div className={style.content}>
        
        <div className={style.box}>
          <div className={style.imageBox}>
            <Image src={img1}  alt='img1' layout='intrinsic'  width={400} height={300}>
            </Image>
          </div>
          <h1> 87,3%</h1>
          <p>De aumento de  novos usarios pela internet</p>
          <a href="#">Saiba mais →</a>
          
        </div>

        <div className={style.box}>
        <div className={style.imageBox}>
            <Image src={img2}  alt='img1' layout='intrinsic'  width={400} height={300}>
            </Image>
        </div>
          <h1>R$ 304 bilhões </h1>
          <p> Em faturamento  do E-commerce no Brasil em 2021</p>
          <a href="#">Saiba mais →</a>
        </div>

        <div className={style.box}>
        <div className={style.imageBox}>
            <Image src={img3}  alt='img1' layout='intrinsic'  width={400} height={300}>
            </Image>
        </div>
        <h1 > 97% </h1>
        <p>Dos idosos acessam a internet, aponta pesquisa da CNDL/SPC Brasil</p>
        <a href="#">Saiba mais →</a>

        </div>
      </div>
    </div>
    
    </>
  )
}

export default DataInfo