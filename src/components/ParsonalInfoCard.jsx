import Row from './Row'
export default function PersonalInfoCard( {info}) {
    return (
         <div className="card infoCard">
        <h2 className="cardTitle">Parsonal Information</h2>

        <div className="rows">
            {
                object.keys(info).map((lable) =>{
                    <Row lable={lable} value={info[lable]}></Row>
                })
            }
        </div>
    </div>
    )
}