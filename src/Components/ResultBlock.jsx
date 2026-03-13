
import { calculateInvestmentResults, formatter } from '../util/investment'
const ResultBlock = ({results}) => {
  
  if (!results.duration && results.duration <= 0) {
    return <div className='center'>Please Enter a duration greater than zero</div>
  }
  const calculatedData = calculateInvestmentResults(results);
  return (
    <div>
      <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
          
           {calculatedData.map(e => <tr key={e.year}>
              <td>{e.year}</td>
              <td>{formatter.format(e.valueEndOfYear)}</td>
              <td>{formatter.format(e.interest)}</td>
              <td>{formatter.format(e.valueEndOfYear - (e.valueEndOfYear-e.interest-e.annualInvestment) - e.annualInvestment + e.interest)}</td>
              <td>{formatter.format(e.valueEndOfYear - e.interest)}</td>
           </tr>)}
           
        </tbody>
      </table>
    </div>
  )
}

export default ResultBlock




