const ModalCreateAd = ({ onClose }) => {


    return (
        <>
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                width: '100%',

                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '520px',
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    
                }}>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', marginLeft: '15px', flexDirection: 'row', gap: '320px', }}>
                        <p style={{
                            font: 'Lexend',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '16.94px'

                        }}>Criar anuncio</p>
                        <button onClick={onClose}>X</button>
                    </div>


                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{
                            font: 'Lexend',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '16.94px'

                        }}>Marca</label>
                        <select style={{
                            maxWidth: '466px',
                            width: '100%',
                            height: '48px',
                            borderRadius: '4px',
                            border: '2px solid #E9ECEF'

                        }}>
                            <option value="general-motors">General Motors</option>
                            <option value="fiat">Fiat</option>
                            <option value="ford">Ford</option>
                            <option value="honda">Honda</option>
                            <option value="porsche">Porsche</option>
                            <option value="volkswagen">Volkswagen</option>
                        </select>

                        <label style={{
                            font: 'Lexend',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '16.94px'

                        }}>Modelo</label>
                        <select style={{
                            maxWidth: '466px',
                            width: '100%',
                            height: '48px',
                            borderRadius: '4px',
                            border: '2px solid #E9ECEF'
                        }}>
                            <option value="civic">Civic</option>
                            <option value="corolla">Corolla</option>
                            <option value="cruze">Cruze</option>
                            <option value="fit">Fit</option>
                            <option value="gol">Gol</option>
                            <option value="ka">Ka</option>
                            <option value="onix">Onix</option>
                            <option value="porsche-718">Porsche 718</option>
                        </select>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <label style={{
                                font: 'Lexend',
                                fontWeight: '700',
                                fontSize: '16px',
                                lineHeight: '16.94px'

                            }}>Ano</label>
                            <input placeholder="2018" style={{
                                maxWidth: '466px',
                                width: '100%',
                                height: '48px',
                                borderRadius: '4px',
                                border: '2px solid #E9ECEF'
                            }}></input>

                            <label style={{
                                font: 'Lexend',
                                fontWeight: '700',
                                fontSize: '16px',
                                lineHeight: '16.94px'

                            }}>Combustível</label>
                            <input placeholder="Gasolina" style={{
                                maxWidth: '466px',
                                width: '100%',
                                height: '48px',
                                borderRadius: '4px',
                                border: '2px solid #E9ECEF'
                            }}></input>

                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <label style={{
                                font: 'Lexend',
                                fontWeight: '700',
                                fontSize: '16px',
                                lineHeight: '16.94px'

                            }}>Quilometragem</label>
                            <input placeholder="30.000" style={{
                                maxWidth: '466px',
                                width: '100%',
                                height: '48px',
                                borderRadius: '4px',
                                border: '2px solid #E9ECEF'
                            }}></input>


                            <label style={{
                                font: 'Lexend',
                                fontWeight: '700',
                                fontSize: '16px',
                                lineHeight: '16.94px'

                            }}>Cor</label>
                            <input placeholder="Branco" style={{
                                maxWidth: '466px',
                                width: '100%',
                                height: '48px',
                                borderRadius: '4px',
                                border: '2px solid #E9ECEF'
                            }}></input>
                        </div>


                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <label style={{
                                font: 'Lexend',
                                fontWeight: '700',
                                fontSize: '16px',
                                lineHeight: '16.94px'

                            }}>Preço tabela FIPE</label>
                            <input placeholder="$48.000,00" style={{
                                maxWidth: '466px',
                                width: '100%',
                                height: '48px',
                                borderRadius: '4px',
                                border: '2px solid #E9ECEF'
                            }}></input>


                            <label style={{
                                font: 'Lexend',
                                fontWeight: '700',
                                fontSize: '16px',
                                lineHeight: '16.94px'

                            }}>Preço</label>
                            <input placeholder="50.000,00" style={{
                                maxWidth: '466px',
                                width: '100%',
                                height: '48px',
                                borderRadius: '4px',
                                border: '2px solid #E9ECEF'
                            }}></input>
                        </div>


                        <label style={{
                            font: 'Lexend',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '16.94px'

                        }}>Descrição</label>
                        <input placeholder="Lorem inpsum simply dummy text of the planming" style={{
                            maxWidth: '466px',
                            width: '100%',
                            height: '68px',
                            borderRadius: '4px',
                            border: '2px solid #E9ECEF'
                        }}></input>

                        <label style={{
                            font: 'Lexend',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '16.94px'

                        }}>Imagem de capa</label>
                        <input placeholder="https://image.com" style={{
                            maxWidth: '466px',
                            width: '100%',
                            height: '48px',
                            borderRadius: '4px',
                            border: '2px solid #E9ECEF'
                        }}></input>

                        <label style={{
                            font: 'Lexend',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '16.94px'

                        }}>1 * Imagem de capa</label>
                        <input placeholder="https://image.com" style={{
                            maxWidth: '466px',
                            width: '100%',
                            height: '48px',
                            borderRadius: '4px',
                            border: '2px solid #E9ECEF'
                        }}></input>

                        <label style={{
                            font: 'Lexend',
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '16.94px'

                        }}>2 * Imagem de capa</label>
                        <input placeholder="https://image.com" style={{
                            maxWidth: '466px',
                            width: '100%',
                            height: '48px',
                            borderRadius: '4px',
                            border: '2px solid #E9ECEF'
                        }}></input>

                        <button style={{
                            background: '#EDEAFD',
                            borderRadius: '4px'
                        }}>
                            <p style={{
                                font: 'Inter',
                                fontWeight: '600',
                                fontSize: '14px',
                                color: '#4529E6'


                            }}>
                                Adicionar campo para imagem da galeria
                            </p></button>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '20px'
                        }}>
                            <button style={{
                                font: 'Inter',
                                fontWeight: '600',
                                fontSize: '14px',
                                color: '##495057',
                                background: '#DEE2E6',
                                borderRadius: '4px',
                                padding: '12px, 28px, 12px, 28px',
                                width: '126px',
                                height: '48px',
                                marginLeft: '160px'
                            }}>Cancelar</button>
                            <button style={{
                                font: 'Inter',
                                fontWeight: '600',
                                fontSize: '14px',
                                color: '#EDEAFD',
                                background: '#4529E6',
                                borderRadius: '4px',
                                padding: '12px, 28px, 12px, 28px',
                                width: '193px',
                                height: '48px'
                            }}>Criar anúncio</button>
                        </div>
                    </form>
                </div >

            </div >


        </>
    )
}

export default ModalCreateAd