import React, {useMemo} from "react"
import "./index.scss"
import {Card, Col, Container, Row} from "react-bootstrap";
import {LineChart, Tooltip, XAxis, CartesianGrid, Line, Legend, ResponsiveContainer} from "recharts"
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
            <Row>
                <Col lg={6}><Chart title="Deaths over 100 days" id="100days" data={death100}/></Col>
                <Col lg={6}><Chart title="Infections over 100 days" id="100days" data={infected100}/></Col>
            </Row>
            <Row>
                <Col lg={6}><Chart title="Deaths over 45 days" id="45days" data={death45}/></Col>
                <Col lg={6}><Chart title="Infections over 45 days" id="45days" data={infected45}/></Col>
            </Row>
        </Container>
    )
}

const Chart = ({title, data, id}) => {
    return <div>
        <h2>{title}</h2>
        <ResponsiveContainer width={"99%"} height={400}>
            <LineChart
            data={data}
            margin={{top: 5, right: 20, left: 10, bottom: 5}}
            syncId={id}
        >
            <XAxis dataKey="name"/>
            <Tooltip style={{background: "#0c0c0c"}}/>
            <CartesianGrid stroke="#000000" x={10} y={10} strokeDasharray="1 3"/>
            <Line type="monotone" dataKey={"Swine Flu"} stroke="#FF0000" yAxisId={0} dot={false} strokeWidth={2}
                  legendType={"triangle"}/>
            <Line type="monotone" dataKey={"SARS"} stroke="#00FF00" yAxisId={0} dot={false} strokeWidth={2}
                  legendType={"star"}/>
                <Line type="monotone" dataKey={"2019-nCoV"} stroke="#FFFF00" yAxisId={0} dot={false} strokeWidth={4} legendType={"circle"}/>
            <Legend/>
        </LineChart></ResponsiveContainer>
        <br/><br/>
    </div>
}