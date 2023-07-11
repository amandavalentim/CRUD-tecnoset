//Desenvolvido por 
'use client';
import styled from '@emotion/styled';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare} from "react-icons/fa";
import Button from './Button/ButtonIcons';


const FooterComponent = styled.footer`
    background: rgba(7, 179, 253, 1);
    box-sizing: border-box;
    .container-center{
        padding: 10px;
        .box{
            margin: 20px;
            position: relative;
            h3{
                margin: 10px;
                padding: 15px;
                border-radius: 5px;
                border: 3px solid #93B413;
                background: #93B413;
                height: 70px;
                font-family: 'Poppins-Bold';
                font-size: 21px;
                color: #fff;
                cursor: default;
            }
            p{
                margin: 20px;
                width: auto;
                font-family: 'Poppins-Regular';
                color: #fff;
                cursor: default;
                span{
                    font-family: 'Poppins-Bold';
                    font-size: 15px;
                }

            }
            a{
                display: grid;
                margin: 20px;
                font-family: 'Poppins-Regular';
                color: #fff;
            }
            .container-icons{
                margin: 10px;
                display: flex;
                .facebook{
                    width: 50px;
                    height: 60px;
                    fill: #1877F2;
                    margin:5px;
                }
                .facebook:hover, .facebook:focus{
                transform: translateX(10px) scale(1.2);
                }
                .instagram{
                    width: 50px;
                    height: 60px;
                    fill: #C82D8E;
                    margin:5px;
                }
                .instagram:hover, .instagram:focus{
                transform: translateX(10px) scale(1.2);
                }
                .twitter{
                    width: 50px;
                    height: 60px;
                    fill: #098BEA;
                    margin:5px;
                }
                .twitter:hover, .twitter:focus{
                transform: translateX(10px) scale(1.2);
                }
                .github{
                    width: 50px;
                    height: 60px;
                    fill: #000;
                    margin:5px;
                }
                .github:hover, .github:focus{
                transform: translateX(10px) scale(1.2);
                }
            }
        }
    }
    //Desktop
    @media(min-width: 992px){
        .container-center{
            display: flex;
            justify-content: space-between;
            .box{
                h3{
                    background:none;
                    border: none;
                    width: 250px;
                    text-align: center;
                    font-size: 25px;
                }
                h3:hover, h3:focus{
                transform: translateX(10px) scale(1.2);
                }
                p{
                    margin: 10px;
                    width: 290px;
                }
                p:hover, p:focus{
                transform: translateX(10px) scale(1.2);
                }
                a{
                    margin: 17px;
                }
                a:hover, a:focus{
                transform: translateX(10px) scale(1.2);
                }
                .container-icons{
                    
                    .facebook:hover, .facebook:focus{
                        transform: translateX(10px) scale(1.2);
                    }
                    .instagram:hover, .instagram:focus{
                    transform: translateX(10px) scale(1.2);
                    }
                    .twitter:hover, .twitter:focus{
                        transform: translateX(10px) scale(1.2);
                    }
                    .github{
                        width: 50px;
                        height: 60px;
                        fill: #000;
                        margin:5px;
                    }
                    .github:hover, .github:focus{
                        transform: translateX(10px) scale(1.2);
                    }
                }
            }
        }
    }
    
    @media(min-width:1200px){
        .container-center{
            justify-content: space-between;
        }
    }
    

`;

const Footer = function (){
    return(
        <FooterComponent>
            <div className='container-center'>
                <div className='box'>
                    <h3>Contatos 
                        <Button></Button>
                    </h3>
                    <p><span>Endereço: </span>Rua Tamoios, 246, Jardim Aeroporto - São Paulo, SP.</p>
                    <p><span>Telefone: </span> (11) 99999-9999</p>
                    <p><span>Email: </span>foxsoluctions@gmail.com</p>
                </div>
                <div className='box'>
                    <h3>Nossa Empresa
                        <Button></Button>
                    </h3>
                    <a href="">Home</a>
                    <a href="">Documentos</a>
                    <a href="">Sobre Nós</a>
                </div>
                <div className='box'>
                    <h3>Redes Sociais
                        <Button></Button>
                    </h3>
                    <div className='container-icons'>
                        <FaFacebookSquare className='facebook'/>
                        <FaInstagram className='instagram'/>
                        <FaTwitterSquare className='twitter'/>
                        <FaGithubSquare className='github'/>
                    </div>
                    
                </div>
            </div>
        </FooterComponent>
    )
}

export default Footer;