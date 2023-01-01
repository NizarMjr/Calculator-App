import React from "react";
import { useSelector } from "react-redux";
import './result.css'

const Result = () => {
    const globalValue = useSelector(state => state.setScreen);
    const equation = useSelector(state => state.setEquation);
    const result = useSelector(state => state.finalResult);
    return (
        <div>
            <div className="result">
                <p className="equation">{equation}</p>
                {!result && <span>{globalValue}</span>}
                {result && <span>{result}</span>}
            </div>
        </div>

    )
}
export default Result;