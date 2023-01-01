import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeScreen, deleteEquation, deleteNumber, finalResult, nextEquation, reset, resetEquation, setEquation } from "../../redux/Action";
import './btns.css'

const Btns = () => {
    const [operator, setOperator] = useState('');
    const result = useSelector(state => state.setEquation)
    const nextEq = useSelector(state => state.finalResult);
    const dispatch = useDispatch();
    useEffect(() => {
        if (nextEq)
            dispatch(nextEquation(nextEq));
    })
    const setValue = (value) => {
        dispatch(changeScreen(value));
        dispatch(setEquation(value));
    }
    const resetResult = () => {
        dispatch(reset());
        dispatch(resetEquation())
    }
    const deleteDEL = () => {
        dispatch(deleteNumber())
        dispatch(deleteEquation())
    }
    //OPERATORS
    const addition = (sign) => {
        dispatch(setEquation(sign))
        dispatch(reset());
        setOperator(sign);
    }
    const substition = (sign) => {
        dispatch(setEquation(sign));
        dispatch(reset());
        setOperator(sign);
    }
    const division = (sign) => {
        dispatch(setEquation(sign));
        dispatch(reset());
        setOperator(sign);
    }
    const multiplication = (sign) => {
        dispatch(setEquation(sign))
        dispatch(reset());
        setOperator(sign);
    }
    //GET RESULT
    const getResult = (op) => {
        dispatch(finalResult(result, op));
        dispatch(nextEquation(nextEq));
    }
    return (
        <div className="btns">
            <div className="list list-one">
                <button className="btn" onClick={(e) => setValue(e.target.innerHTML)}>7</button>
                <button className="btn" onClick={(e) => setValue(e.target.innerHTML)}>8</button>
                <button className="btn" onClick={(e) => setValue(e.target.innerHTML)}>9</button>
                <button className="btn special" onClick={() => deleteDEL()}>DEL</button>
            </div>
            <div className="list list-two">
                <button className="btn" onClick={(e) => setValue(e.target.innerHTML)}>4</button>
                <button className="btn" onClick={(e) => setValue(e.target.innerHTML)}>5</button>
                <button className="btn" onClick={(e) => setValue(e.target.innerHTML)}>6</button>
                <button className="btn" onClick={() => addition('+')}>+</button>
            </div>
            <div className="list list-three">
                <button className="btn" onClick={(e) => setValue(e.target.innerHTML)}>1</button>
                <button className="btn" onClick={(e) => setValue(e.target.innerHTML)}>2</button>
                <button className="btn" onClick={(e) => setValue(e.target.innerHTML)}>3</button>
                <button className="btn" onClick={() => substition('-')}>-</button>
            </div>
            <div className="list list-four">
                <button className="btn" onClick={(e) => setValue(e.target.innerHTML)}>.</button>
                <button className="btn" onClick={(e) => setValue(e.target.innerHTML)}>0</button>
                <button className="btn" onClick={() => division('/')}>/</button>
                <button className="btn" onClick={() => multiplication('*')}>x</button>
            </div>
            <div className="list list-one">
                <button className="btn big special" onClick={() => resetResult()}>RESET</button>
                <button className="btn big equal" onClick={() => getResult(operator)}>=</button>
            </div>
        </div>
    )
}
export default Btns;