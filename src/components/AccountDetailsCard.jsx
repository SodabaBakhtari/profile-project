import Row from './Row'
export default function AccountDetailsCard ({details}){
    return(

        <div className="card InfoCard">
            <h2 className='cardTitle'>Account Details</h2>

            <div className='rows'>
                <Row lable="role" value={details.Role}></Row>
                <Row lable="status" value={<span className='pill'>{details[lable]}</span>}></Row>
                <Row lable="verfication" value={<span className='verified'>✅verified</span>}></Row>
            </div>
        </div>
    )
}