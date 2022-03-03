import React from 'react';
import "./Desserts.css"

const Desserts = () => {
    return (
        <div>
            <p className="c_desserts">Desserts</p>
            <div className="coffee_line3">
                <div className="block17">
                    <p className="des_coffee_text">
                        muffins <br/>
                        0,39$
                    </p>
                </div>
                <div className="block18">
                    <p className="des_coffee_text">
                        Croissant<br/>
                        0,99$
                    </p>
                </div>
                <div className="block19">
                    <p className="des_coffee_text">
                        pancakes<br/>
                        1,99$
                    </p>
                </div>
            </div>
            <div className="coffee_line4">
                <div className="block20">
                    <p className="des_coffee_text">
                        cheesecake<br/>
                        2,99$
                    </p>
                </div>
                <div className="block21">
                    <p className="des_coffee_text">
                        tiramisu <br/>
                        3,99$
                    </p>
                </div>
                <div className="block22">
                    <p className="des_coffee_text">
                        fondan <br/>
                        3,99$
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Desserts;