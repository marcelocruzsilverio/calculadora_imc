import { useEffect, useState } from 'react';
import styles from './Body.module.css';


const Body = () => {

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [result, setResult] = useState(null)







    const calculateIMC = () => {
        parseFloat(weight);
        parseFloat(height);

        if (!weight || !height) {
            setResult(null);
        } else if (isNaN(weight) || isNaN(height)) {
            setResult(null);
        } else if (weight === 0 || height === 0) {
            setResult(null);
        } else {
            const imc = weight / (height * height)
            setResult(imc.toFixed(1));
        }
    }



    const clearFieslds = () => {
        setHeight('');
        setWeight('');
        setResult(null);
    }

    return (

        <section className="container">

            <form>
                <div>
                    <label htmlFor="height">Altura <span>(ex.: 1.70)</span></label>
                    <input type="text" id="height" placeholder="Metros" onChange={ev => setHeight((ev.target.value))} value={height} />
                </div>
                <div>
                    <label htmlFor="weight">Peso <span>(ex.: 69.2)</span></label>
                    <input type="text" id="weight" placeholder="Quilos" onChange={ev => setWeight((ev.target.value))} value={weight} />
                </div>
            </form>

            <div className={styles.buttonContainer}>
                <button type="button" onClick={calculateIMC}>Calcular</button>
                <button type="button" onClick={clearFieslds}>Limpar</button>

            </div>
            <div className={styles.result}>
                {result !== null && <span>Seu IMC é: {result}</span>}
            </div>

            <table cellSpacing="0">

                <thead>
                    <tr>
                        <th colSpan="3">Veja a interpretação do IMC</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>IMC</td>
                        <td>Classificação</td>
                        <td >Obesidade <small>(grau)</small></td>
                    </tr>

                    <tr style={{ backgroundColor: result !== null && result < 18.5 ? 'red' : 'transparent' }}>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                        <td >0</td>
                    </tr>

                    <tr style={{ backgroundColor: result >= 18.5 && result <= 24.9 ? 'lightgreen' : 'transparent' }}>
                        <td>Entre 18,5 e 24,9</td>
                        <td>Normal</td>
                        <td >0</td>
                    </tr>

                    <tr style={{ backgroundColor: result >= 25 && result <= 29.9 ? 'orange' : 'transparent' }}>
                        <td>Entre 25,0 e 29,9</td>
                        <td>Sobrepeso</td>
                        <td >I</td>
                    </tr>

                    <tr style={{ backgroundColor: result >= 30 && result <= 39.9 ? 'orange' : 'transparent' }}>
                        <td>Entre 30,0 e 39,9</td>
                        <td>Obesidade</td>
                        <td >II</td>
                    </tr>

                    <tr style={{ backgroundColor: result >= 40 ? 'red' : 'transparent' }}>
                        <td>Maior que 40,0</td>
                        <td>Obesidade Grave</td>
                        <td >III</td>
                    </tr>
                </tbody>

            </table>


        </section>

    )
}

export default Body;