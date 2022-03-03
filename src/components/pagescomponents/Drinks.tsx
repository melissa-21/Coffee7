import React from 'react';
import "./Drinks.css"

const Drinks = () => {
    return (
        <div>
            <p className="c_drinks">Drinks</p>
            <div className="coffee_line1">
                <div className="block11">
                    <p className="coffee_text">
                        americano<br/>
                        0,99$
                    </p>
                </div>
                <div className="block12">
                    <p className="coffee_text">
                        cappuccino<br/>
                        1,29$
                    </p>
                </div>
                <div className="block13">
                    <p className="coffee_text">
                        macchiato<br/>
                        1,99$
                    </p>
                </div>
            </div>
            <div className="coffee_line2">
                <div className="block14">
                         <p className="coffee_text">
                             glace<br/>
                             2,99$
                         </p>
                </div>
                    <div className="block15">
                        <p className="coffee_text">
                            mocaccino<br/>
                            2,19$
                        </p>
                    </div>
                    <div className="block16">
                        <p className="coffee_text">
                            latte<br/>
                            1,19$
                        </p>
                    </div>
            </div>
        </div>
    );
};

export default Drinks;