import React from "react";
import './thems.css'

const Thems = () => {
    const setTheme = (theme) => {
        const themes = document.getElementsByClassName('them');
        for (let i = 0; i < themes.length; i++) {
            themes[i].classList.add('hidden');
        }
        document.getElementsByClassName(theme)[0].classList.remove('hidden');
        if (theme === 'theme-one') {
            document.querySelector('body').style.backgroundColor = "hsl(222, 26%, 31%)";
            document.querySelector('body').style.color = "white";

            document.getElementsByClassName('result')[0].style.backgroundColor = "hsl(224, 36%, 15%)";
            document.getElementsByClassName('theme-btns')[0].style.backgroundColor = "hsl(223, 31%, 20%)";

            const themeBtn = document.getElementsByClassName('them');
            for (let i = 0; i < themeBtn.length; i++)
                themeBtn[i].style.backgroundColor = "hsl(6, 70%, 34%)";

            document.getElementsByClassName('btns')[0].style.backgroundColor = "hsl(268, 75%, 9%))";
            document.getElementsByClassName('btns')[0].style.backgroundColor = "hsl(223, 31%, 20%)";

            const btn = document.getElementsByClassName('btn');
            for (let i = 0; i < btn.length; i++) {
                btn[i].style.cssText = "background-color:hsl(30, 25%, 89%);color:hsl(221, 14%, 31%);border-bottom-color:hsl(28, 16%, 65%)"
            }

            const specialBtn = document.getElementsByClassName('special');
            for (let i = 0; i < specialBtn.length; i++) {
                specialBtn[i].style.cssText = "background-color:hsl(225, 21%, 49%); border-color-bottom : hsl(221, 14%, 31%) !important";
            }
            document.getElementsByClassName('equal')[0].style.backgroundColor = "hsl(6, 63%, 50%)";
        }
        else if (theme === 'theme-two') {
            document.querySelector('body').style.backgroundColor = "hsl(0, 0%, 90%)";
            document.querySelector('body').style.color = "hsl(60, 10%, 19%)";
            document.getElementsByClassName('result')[0].style.backgroundColor = "white";
            document.getElementsByClassName('theme-btns')[0].style.backgroundColor = "hsl(0, 5%, 81%)";

            const themeBtn = document.getElementsByClassName('them');
            for (let i = 0; i < themeBtn.length; i++)
                themeBtn[i].style.backgroundColor = "hsl(25, 99%, 27%)";

            document.getElementsByClassName('btns')[0].style.backgroundColor = "hsl(0, 5%, 81%)";

            const btn = document.getElementsByClassName('btn');
            for (let i = 0; i < btn.length; i++) {
                btn[i].style.backgroundColor = "white";
                btn[i].style.color = "hsl(60, 10%, 19%)";
                btn[i].style.borderBottomColor = "hsl(28, 16%, 65%)";
            }
            const specialBtn = document.getElementsByClassName('special');
            for (let i = 0; i < specialBtn.length; i++) {
                specialBtn[i].style.cssText = "border-color-bottom : hsl(185, 58%, 25%) !important;background-color:hsl(185, 42%, 37%)";
            }

            document.getElementsByClassName('equal')[0].style.backgroundColor = "hsl(25, 98%, 40%)";
            document.getElementsByClassName('equal')[0].style.setProperty("border-bottom-color", "hsl(6, 70%, 34%)", "important");
        }

        else if (theme === 'theme-three') {
            document.querySelector('body').style.backgroundColor = "hsl(268, 71%, 12%)";
            document.querySelector('body').style.color = "hsl(52, 100%, 62%)";
            document.getElementsByClassName('result')[0].style.backgroundColor = "hsl(268, 75%, 9%)";
            document.getElementsByClassName('theme-btns')[0].style.backgroundColor = "hsl(268, 75%, 9%)";

            const themeBtn = document.getElementsByClassName('them');
            for (let i = 0; i < themeBtn.length; i++)
                themeBtn[i].style.backgroundColor = "hsl(176, 100%, 44%)";
            document.getElementsByClassName('btns')[0].style.backgroundColor = "hsl(268, 75%, 9%)";

            const btn = document.getElementsByClassName('btn');
            for (let i = 0; i < btn.length; i++) {
                btn[i].style.backgroundColor = "hsl(268, 47%, 21%)";
                btn[i].style.color = "hsl(52, 100%, 62%)";
                btn[i].style.borderBottomColor = "hsl(290, 70%, 36%)";
            }
            const specialBtn = document.getElementsByClassName('special');
            for (let i = 0; i < specialBtn.length; i++) {
                specialBtn[i].style.backgroundColor = "hsl(281, 89%, 26%)";
                specialBtn[i].style.setProperty("border-bottom-color", "hsl(290, 70%, 36%)", "important");
            }

            document.getElementsByClassName('equal')[0].style.backgroundColor = "hsl(176, 100%, 44%)";
            document.getElementsByClassName('equal')[0].style.setProperty("color", "black", "important");
            document.getElementsByClassName('equal')[0].style.setProperty("border-bottom-color", "hsl(177, 92%, 70%)", "important");



        }
    }

    return (
        <div className="theme">
            <h5 className="title">THEME</h5>
            <div className="change-theme">
                <div className="theme-numbers">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <div className="theme-btns">
                    <span className="them theme-one" onClick={() => setTheme('theme-one')}></span>
                    <span className="them theme-two hidden" onClick={() => setTheme('theme-two')}></span>
                    <span className="them theme-three hidden" onClick={() => setTheme('theme-three')}></span>
                </div>
            </div>
        </div>

    )
}
export default Thems;