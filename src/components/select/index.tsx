import React, { useState } from 'react';

export const Select = () => {
    const [kilometers, setKilometers] = useState(0);

    const handleKilometersChange = (event) => {
        setKilometers(event.target.value);
    };

    const [price, setPrice] = useState(10000);

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
    return (
        <>
            <div style={{ width: '100%', maxWidth: '300px', display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Marca</label>
                    <select>
                        <option value="general-motors">General Motors</option>
                        <option value="fiat">Fiat</option>
                        <option value="ford">Ford</option>
                        <option value="honda">Honda</option>
                        <option value="porsche">Porsche</option>
                        <option value="volkswagen">Volkswagen</option>
                    </select>

                    <label>Modelo</label>
                    <select>
                        <option value="civic">Civic</option>
                        <option value="corolla">Corolla</option>
                        <option value="cruze">Cruze</option>
                        <option value="fit">Fit</option>
                        <option value="gol">Gol</option>
                        <option value="ka">Ka</option>
                        <option value="onix">Onix</option>
                        <option value="porsche-718">Porsche 718</option>
                    </select>

                    <label>Cor</label>
                    <select>
                        <option value="azul">Azul</option>
                        <option value="branca">Branca</option>
                        <option value="cinza">Cinza</option>
                        <option value="prata">Prata</option>
                        <option value="preta">Preta</option>
                        <option value="verde">Verde</option>
                    </select>

                    <label>Ano</label>
                    <select>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2018">2018</option>
                        <option value="2015">2015</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2010">2010</option>
                    </select>

                    <label>Combustível</label>
                    <select>
                        <option value="eletrico">Elétrico</option>
                        <option value="flex">Flex</option>
                        <option value="hibrido">Híbrido</option>
                    </select>

                    <label>KM</label>
                    <input
                        type="range"
                        min="0"
                        max="650000"
                        step="1"
                        value={kilometers}
                        onChange={handleKilometersChange}
                    />
                    <p>{kilometers} km</p>



                    <label>Preço</label>
                    <input
                        type="range"
                        min="10000"
                        max="550000"
                        step="1000"
                        value={price}
                        onChange={handlePriceChange}
                    />
                    <p>R$ {price.toLocaleString('pt-BR')}</p>

                    <button>Limpar filtros</button>
                </form>
            </div>
        </>
    );
};
