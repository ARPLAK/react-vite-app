import { useState } from 'react'
import Header from './Components/Header'
import InputBlock from './Components/InputBlock'
import ResultBlock from './Components/resultBlock'

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: +value
    }));
  };

  const results = {initialInvestment:formData.initialInvestment,
                    annualInvestment:formData.annualInvestment,
                    expectedReturn:formData.expectedReturn,
                    duration:formData.duration}
  
  return (
    <>
      <Header />
      <InputBlock formData={formData} inputChange={handleChange} />
      <ResultBlock results={results} />
    </>
  );
}

export default App