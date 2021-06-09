import React from "react";

class Trips extends React.Component {
    state = {
        Trips: []
    }
    componentDidMount() {

        let params = new URLSearchParams({
            'from':'YUL',
            'departDate':'2021-07-01',
            'to':'YVR',
            'stops':'0'
        });
        let url = "https://trip-build-api.herokuapp.com/api/trips?" + params.toString();

        fetch(url)
        .then(response => response.json())
        .then((result) => {
            this.setState({ trips: result.data })
            console.log(this.state.trips)
        })
        .catch(console.log)
    }
    render() {
        return (
            <div>
                <div className="row mb-3">
                    <div className="col-md-12 text-md-center">
                        <h2 className="text-poppins font-weight-bold">Trips</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {this.state.trips &&this.state.trips.map((trip) => (
                        <div className="col-md-8">
                        <div className="card card-outline translate-up mb-3">
                            <div className="card-body">
                                <h5 className="card-title"><strong className="text-primary">Airline: {trip.departure.flights.airline}</strong> </h5>
                                <h5 className="card-title"><strong className="text-primary">Depature Airport: {trip.departure.flights.departure_airport}</strong> </h5>
                                <h5 className="card-title"><strong className="text-primary">Arrival Airpot:  {trip.departure.flights.arrival_airport}</strong> </h5>
                                <h5 className="card-title"><strong className="text-primary">Price:  ${trip.fullPrice}</strong> </h5>
                            </div>
                            <div className="card-footer text-right">
                                <h6 className="subtitle-1 text-muted">@FlightHub.</h6>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Trips;