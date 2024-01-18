import './Banner.css'

function Banner() {
    //JSX Como o react trabalha com a parte visual
    // parece HTML mas nao é
    // é a forma que react trabalha com add no DOM
    // é como se tivessemos fazendo o document.createElement('img');

    return ( // parenteses permite o retorno de multiplas linhas
            //class é uma palavra reservada do javascript, entao no JSX vamos usa className
        <header className='banner'> 
            <img src="/images/enem-banner.png" alt="Banner principal da página do Nativos do Enem" /> 
        </header>
    )

    
}

export default Banner