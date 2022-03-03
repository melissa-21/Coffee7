import React from 'react';
import "./Coffee.css"

const Coffee = () => {
    return (
        <div>
            <div className="c_coffee">Coffee</div>
            <div className="coffee_line5">
                <div className="block23">
                    <p className="c_coffee_text">
                        espresso coffee beans<br/>
                        1$
                    </p>
                </div>
                <div className="block24">
                    <p className="c_coffee_text">
                        coffee beans with  caramel flavor<br/>
                        2$
                    </p>
                </div>
                <div className="block25">
                    <p className="c_coffee_text">
                        medium-rare coffee beans<br/>
                        3$
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Coffee;