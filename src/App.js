import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components1/Chart/Chart';
import Cards from './components1/Cards/Cards'
import Country from './components1/CountryPicker/CountryPicker'
import styles from './App.module.css';
import Header from './components/Header';
import fetchData from './API/index'




class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }


  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };


  render() {
    const { data,country } = this.state;
    return (
    <div>
       <Header />
       <div className={styles.container}>
          <Cards data={data} />

          <Country handleCountryChange={this.handleCountryChange} />

          <Chart data={data} country={country} />




       </div>
     </div>
    )
  }
}
export default App;
