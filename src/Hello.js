import React from 'react';



function Hello({color, name, isSpecial }){

    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem'
    }
    return (
        <>
            <div style={{color}}>{ isSpecial && <b>*</b>}안녕하세요 {name}</div>
            <div style={style}>{name}</div>
        </>
    )
}

Hello.defaultProps = {
    name : '이름없음'
}

export default Hello;