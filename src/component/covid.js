import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <section>
                <h1>Live Cases</h1>
                <h2>COVID-19 CORONA VIRUS TRACKER</h2>

                <ul>
                    <li class="card">
                        <div class="card__main">
                            <div class="card__inner">
                                <p class="card__name"><span>Our</span>Country</p>
                                <p class="card__total card__small">PAKISTAN</p>
                            </div>
                        </div>

                    </li>
                    <li class="card">
                        <div class="card__main">
                            <div class="card__inner">
                                <p class="card__name"><span>Total</span>Recoverd</p>
                                <p class="card__total card__small">{data.recovered}</p>
                            </div>
                        </div>

                    </li>
                    <li class="card">
                        <div class="card__main">
                            <div class="card__inner">
                                <p class="card__name"><span>Total</span>Confirm</p>
                                <p class="card__total card__small">{data.confirmed}</p>
                            </div>
                        </div>

                    </li>
                    <li class="card">
                        <div class="card__main">
                            <div class="card__inner">
                                <p class="card__name"><span>Total</span>Death</p>
                                <p class="card__total card__small">{data.deaths}</p>
                            </div>
                        </div>

                    </li>
                    <li class="card">
                        <div class="card__main">
                            <div class="card__inner">
                                <p class="card__name"><span>Total</span>Active</p>
                                <p class="card__total card__small">{data.active}</p>
                            </div>
                        </div>

                    </li>
                    <li class="card">
                        <div class="card__main">
                            <div class="card__inner">
                                <p class="card__name"><span>Last</span>Update</p>
                                <p class="card__total card__small">{data.lastupdatedtime}</p>
                            </div>
                        </div>

                    </li>
                </ul>
            </section>
        </>
    )
}

export default Covid
