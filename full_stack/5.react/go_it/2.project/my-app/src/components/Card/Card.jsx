import data from "../../data.json";
import Head from "../Head/Head";
import React from "react";

const Card=()=> {
    return  data.map((photo) => {
        return (<div key={photo.id} className="card mx-auto my-2" style={{width: "18rem"}}>
                <img src={photo.url} alt={photo.title} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{photo.title}</h5>
                    <p className="card-text">
                        Some quick example text to buils on the card title and make up
                        the bulk of the card`s content.
                    </p>
                    {/*{Head({id:'id-123',clas:'card-title'})}*/}
                    <Head id='id-123' clas='card-title'/>
                    <a href="http" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        )
    })
}
export default Card;