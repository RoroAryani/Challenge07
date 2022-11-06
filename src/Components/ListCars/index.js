import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import {getListCars} from "../../actions/CarAction";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function DateTime(hasil) {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    hasil = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))
    return hasil
  }

function ListCars({submit, data, jumlahpenumpang,tipedriver,tanggal,waktu}){
    const {getListCarsResult,getListCarsLoading,getListCarsError} = useSelector((state) => state.CarsReducer)
    const dispatch = useDispatch()
    const jumlah = jumlahpenumpang;
    const tipe = tipedriver === 'true' ? true : false
    let d = (`${tanggal}T${waktu}`);
    // console.log(d); 
    let formdate = Date.parse(d);

    console.log(Date.parse(tanggal));
    
    console.log(typeof(formdate));
    console.log(data);
 
    useEffect(() =>{
       
        console.log("1. use effect component did mount");
        dispatch(getListCars())

    },[dispatch])

    return(
        <div className="container-fluid" style={{ padding:'100px'}}>
        <div className="row d-flex justify-content-center" id="cars-container">
        {getListCarsResult ? (
            getListCarsResult.filter((car) => car.capacity >= jumlah && car.available === tipe && 
            Date.parse(DateTime(car.availableAt)) > formdate 
            ).map((car) =>   {
                return (
                        <div className="col-md-4" key={car.id}>
                            <div className="card mb-3">
                                <img src={car.image} className="card-img-top" height="350" alt={car.manufacture}/>
                                <div className="card-body">
                                    <p className="card-text">{car.model}</p>
                                    <h5 className="card-title">Rp.{car.rentPerDay} / Hari</h5>
                                    <p className="card-text">{car.description}</p>
                                    <p className="card-text"><i className="bi bi-people"></i>{car.capacity}</p>
                                    <p className="card-text"><i className="bi bi-gear"></i>{car.transmission}</p>
                                    <p className="card-text"><i className="bi bi-calendar"></i>{car.year}</p>
                                    <a href="/" className="btn btn-success d-flex justify-content-center">Pilih Mobil</a>
                                </div>
                            </div>
                        </div>
                )
            })
        ) : getListCarsLoading ? (
            <p>Loading . . . </p>
        ) : (
            <p>{getListCarsError ? getListCarsError : "Data Kosong"}</p>
        )}
        </div>
    </div>
  );
}

export default ListCars;