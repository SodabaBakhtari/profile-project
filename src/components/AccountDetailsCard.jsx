import Row from './Row';

export default function AccountDetailsCard ({details}){
    return(

        <div className="card infoCard">
            <h2 className='cardTitle'>Account Details</h2>

            <div className='rows'>
                <Row label="role" value={details.Role}></Row>
                <Row label="status" value={<span className="pill">{details["Status"]}</span>}></Row>
                <Row label="verification" value={<span className='verified'>✅verified</span>}></Row>
            </div>
        </div>
    )
}