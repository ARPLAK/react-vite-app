import React from 'react'

const InputBlock = ({inputChange,formData}) => {
  
  return (
    <>
    <div id='user-input'>
     <form>
        <div className="input-group">

            <div>
            <label>INITIAL INVESTMENT</label>
		        <input 
            type='number'
            name='initialInvestment'
            value={formData.initialInvestment}
            onChange={inputChange} />
            
            </div>
            
            <div>
            <label>ANNUAL INVESTMENT</label>
		        <input 
            type='number'
            name='annualInvestment'
            value={formData.annualInvestment}
            onChange={inputChange} />
            </div>
            

        </div>
        <br />
        <br />
        <br />
        <div className="input-group">

            <div>
            <label>EXPECTED RETURN</label>
		        <input 
            type='number'
            name='expectedReturn'
            value={formData.expectedReturn}
            onChange={inputChange} />
            </div>

            <div>
            <label>DURATION</label>
		        <input 
            type='number'
            name='duration'
            value={formData.duration}
            onChange={inputChange} />
            </div>
        </div>
     </form>
    </div>

    </>
  )
}

export default InputBlock




//  function inputChange(e){
//     const {name, value} = e.target;
//       const updatedValue = {
//         ...formData, 
//         [name] : +value
//       }
//       setFormData(updatedValue);
//       const results = calculateInvestmentResults(updatedValue);
//       console.log(results);
//       onResultChange(results);
//     }















// const unitResult = result.map(e => <tr key={e.year}>
        //   <tb>{e.year}</tb>
        //   <tb>{formatter.format(e.interest)}</tb>
        //   <tb>{formatter.format(e.valueEndOfYear)}</tb>
        //   <tb>{formatter.format(e.annualInvestment)}</tb>
        // </tr>)
        // console.log('Calculated Result with units',unitResult);


        // function inputChange(e) {
  //       const { name, value } = e.target;
  //       const newFormData = {
  //         ...formData,
  //         [name]: +value,
  //       };
  //       return newFormData;
  //     }    

        
  //     const result = calculateInvestmentResults(setFormData(inputChange));








