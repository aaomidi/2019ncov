import React, {useMemo} from "react"
import "./index.scss"
import {Card, Col, Container, Row} from "react-bootstrap";
import {LineChart, Tooltip,XAxis,CartesianGrid,Line, Legend} from "recharts"
import data from "../data.json"

const keys = ["2019-nCoV", "Swine Flu", "SARS"]

const calculate = (days, category) => {
    const tmp = []

    for (let x = 0; x < days; x++) {
        keys.forEach(decease => {
            if (!tmp[x])
                tmp[x] = {'name': 'Day ' + (x+1)}

            let amount = data[category][decease][x];
            tmp[x][decease] = amount ? amount : NaN
        })
    }

    return tmp
}

export default function Index() {
    const death100 = useMemo(() => calculate(100, 'deaths'), [])
    const death45 = useMemo(() => calculate(45, 'deaths'), [])
    const infected100 = useMemo(() => calculate(100, 'infected'), [])
    const infected45 = useMemo(() => calculate(45, 'infected'), [])


    return (
        <Container>
            <br/>
            <Row><Col xs={12}>
                <h1>2019 Novel Coronavirus (2019-nCoV)</h1>
                <p className={"text-center"}>Last updated: {data.lastUpdatedAt}</p>
            </Col>
                <br/>
            </Row>
            <Chart title="Deaths over 100 days" data={death100} />
            <Chart title="Infections over 100 days" data={infected100} />
            <Chart title="Deaths over 45 days" data={death45} />
            <Chart title="Infections over 45 days" data={infected45} />
        </Container>
    )
}

const Chart = ({title, data}) => {
    return <div>
        <h2>{title}</h2>
        <LineChart
            width={1068}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
            <XAxis dataKey="name" />
            <Tooltip style={{background: "#0c0c0c"}} />
            <CartesianGrid stroke="#000000" strokeDasharray="5 5"  />
            <Line type="monotone" dataKey={"2019-nCoV"} stroke="#FFFF00" yAxisId={0} dot={false} strokeWidth={4} legendType={"circle"} />
            <Line type="monotone" dataKey={"Swine Flu"} stroke="#FF0000" yAxisId={0} dot={false} strokeWidth={2} legendType={"triangle"}/>
            <Line type="monotone" dataKey={"SARS"} stroke="#00FF00" yAxisId={0} dot={false} strokeWidth={2} legendType={"star"}/>
            <Legend/>
        </LineChart>
        <br/><br/>
    </div>
}