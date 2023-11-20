import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export const SinglePlanet = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    
    const imageToLoadFail = "data:image/jpeg;base64,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"
   

    return (
        <div className="jumbotron text-white">
            <div className="top d-flex justify-content-around align-items-center my-4">
                <div className="left">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}  alt="..." style={{ width: "400px", height: "400px" }}
                    onError={(e) => {
                        e.target.src = imageToLoadFail
                    }}
                    ></img>
                </div>
                <div className="right">
                    <h2 className="display-4">{store.planets[Number(params.uid) - 1].name}</h2>
                    <p className="fs-4" style={{ width: "900px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi hic distinctio laudantium. Illo quos nostrum numquam deserunt animi quia eius laboriosam commodi vitae aliquid dignissimos unde error, quo assumenda iusto praesentium vero ratione esse blanditiis, nam temporibus incidunt recusandae vel! Obcaecati, quos voluptatem. Velit magni nostrum perspiciatis odit officiis ipsam similique, illo ab labore quo quibusdam quasi suscipit esse corporis quaerat, harum enim vel architecto tempora laborum, sapiente excepturi explicabo. Eaque accusantium ea odit mollitia voluptatum maxime aperiam eius molestias sint! Aliquid reprehenderit, consequatur, alias harum voluptatibus dolorem minima id iusto in explicabo fugiat enim, earum minus dolorum! Quisquam.</p>
                </div>
            </div>
            <hr className="my-4" />
            <div className="text-center">
                <p className="display-4">Rotation Period: {store.planets[Number(params.uid) - 1].rotation_period} </p>
                <p className="display-4">Orbital Period: {store.planets[Number(params.uid) - 1].orbital_period} </p>
                <p className="display-4">Diameter: {store.planets[Number(params.uid) - 1].diameter} </p>
                <p className="display-4">Climate: {store.planets[Number(params.uid) - 1].climate} </p>
                <p className="display-4">Gravity: {store.planets[Number(params.uid) - 1].gravity
                } </p>
            </div>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button" style={{ marginLeft: "30px" }}>
                    Back home
                </span>
            </Link>
        </div>
    );
};
SinglePlanet.propTypes = {
    match: PropTypes.object
};














