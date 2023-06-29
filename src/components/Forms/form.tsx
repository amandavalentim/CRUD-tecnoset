'use client'
import styled from '@emotion/styled';

const FormComponent = styled.div`

    .box-container {
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0A53B5 100%);
        width: 528px;
        height: 490px;
        display: flex;
        justify-content: center;
        margin-left: 430px;
        margin-top: -200px;
        form {
            #title {
                color: #FFFF;
                text-align: center;
                margin: 30px;
            }
            .login {
                margin: 50px;
                display: flex;
                input {
                    border: none;
                    border-bottom: 1px solid #FFFF;
                    background-color: rgba(7, 179, 253, 0);
                    justify-content: center;
                    align-items: center;
                    
                }
            }
            #enter {
                display: flex;
                justify-content: center;
                background-color: #93B413;
                .button {
                    border: none;
                    background-color: #0A53B5;
                    border-radius: 20px;
                }

            }  
            .forget {
                color: #F47216;
            } 
            .create_account {
                color: #F47216;
            } 
        }
    }
`;

const Form = function(){

    return(
        <FormComponent>

            <div className='box-container'>
                <form>
                    <h1 id='title'>Login</h1>
                    <div className='login'>

                        <input type="email" name="e-mail" id="e-mail"/>

                    </div>

                    <div className='login'>

                        <input type="password" name="password" id="password"/>

                    </div>

                    <div className='forget'>
                        <h4><span className='orange'>Esqueceu a senha?</span></h4>
                    </div>

                    <div className='create_account'>
                        <h4>Não tem uma conta? <span className='orange'>Crie uma</span></h4>
                    </div>

                    <div id='enter'>

                        <button className='button'>

                            <input type="submit" value="Entrar"/>

                        </button>

                    </div>

                </form>

            </div>

        </FormComponent>
    )

}

export default Form 