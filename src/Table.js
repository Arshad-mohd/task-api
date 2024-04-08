import React from "react";

function Table({ data, handleRowClick }) {
    return (
        <table className="table">

            <thead>
                <tr>
                    <td></td>
                    <td>NAME</td>
                    <td>EFFECT</td>
                    <td>DIFFICULTY</td>
                    <td>CHARACTERISTICS</td>
                </tr>
            </thead>
            <tbody>
                {data.map((dat) => (
                    <tr key={dat.id} onClick={() => handleRowClick(dat)} className="clickable-row">
                        <td><img src={dat.attributes.image} alt="No Image" style={{ height:'50px', width:'50px'}}/></td>
                        <td>{dat.attributes.name}</td>
                        <td>{dat.attributes.effect}</td>
                        <td>{dat.attributes.difficulty}</td>
                        <td>{dat.attributes.characteristics}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
