import { useState } from "react";
import './Mega.css';

function Mega(props) {
    const gerarNumeros = (quantidade, min = 0, max = 60) => {
        let numeros = new Set();
        while (numeros.size < quantidade) {
            const numero = Math.floor(Math.random() * (max - min + 1)) + min;
            numeros.add(numero);
        }
        return Array.from(numeros).sort((n1, n2) => n1 - n2);
    };

    const [qtde, setQtde] = useState(props.qtde || 6);
    const numerosIniciais = gerarNumeros(qtde);
    const [numeros, setNumeros] = useState(numerosIniciais);

    return (
        <div className="mega">
            <div className="input-container">
                <label htmlFor="number">Digite a quantidade de números:</label>
                <input
                    id="number"
                    type="number"
                    value={qtde}
                    aria-label="digite a quantidade de numeros"
                    onChange={(e) => setQtde(+e.target.value)}
                    min="6"
                    max="15"
                />
            </div>

            <section className="display">
                <h3>{numeros.join(" ")}</h3>
                <button onClick={() => setNumeros(gerarNumeros(qtde))}>
                    Gerar números
                </button>
            </section>
        </div>
    );
}

export default Mega;