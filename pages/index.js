import React, {useMemo, useState} from "react"
import "./index.scss"
import {Card, CardDeck, Col, Container, Form, FormCheck, FormGroup, Row} from "react-bootstrap";
import {LineChart, Tooltip, XAxis, CartesianGrid, Line, Legend, ResponsiveContainer, YAxis, Label} from "recharts"
import data from "../data.json"
import { scaleLog } from 'd3-scale';
const scale = scaleLog().base(10);
const keys = ["2019-nCoV", "Swine Flu", "SARS"]

const calculate = (days, category) => {
    const tmp = []

    for (let x = 0; x < days; x++) {
        keys.forEach(decease => {
            if (!tmp[x])
                tmp[x] = {'name': 'Day ' + (x+1)}

            let amount = data[category][decease][x];
            tmp[x][decease] = amount ? amount : null
        })
    }

    return tmp
}

export default function Index() {
    const [showLog, setShowLog] = useState(false)
    const [activeKeys, setActiveKeys] = useState(keys);
    const [show45Days, setShow45Days] = useState(false)

    const death100 = useMemo(() => calculate(100, 'deaths'), [])
    const death45 = useMemo(() => calculate(45, 'deaths'), [])
    const infected100 = useMemo(() => calculate(100, 'infected'), [])
    const infected45 = useMemo(() => calculate(45, 'infected'), [])

    const onToggle = (args) => (e) => {
        console.log(args, e)
        if (e.target.checked) {
            setActiveKeys([...activeKeys, args])
        } else {
            setActiveKeys(activeKeys.filter(d => d !== args))
        }
    }

    return (
        <Container>
            <br/>
            <Row>
                <Col xs={12} sm={ { span: 8, offset: 2 }}>
                <h1>2019 Novel Coronavirus (2019-nCoV)</h1>
                <p style={{color: "#b4b4b4"}} className={"text-center"}>Last updated: {data.lastUpdatedAt}.</p>
                <p><strong>
                    Due to the time difference between these disease outbreaks being on the order of years, it may not be fair to make an 'apples to apples' comparison between them.
                    These charts are merely be to as informative as possible with the data we have at our disposal, but should be viewed with an open mind as many factors may have changed over the time span of years.
                </strong></p>
            </Col>
                <br/>
            </Row>
            <Row>
                <Col xs={12}>
                    <Form inline className={"justify-content-around"}>
                        <FormGroup controlId="showSwineFlu">
                            <FormCheck checked={activeKeys.includes("Swine Flu")} onChange={onToggle("Swine Flu")} label={"Show Swine Flu"} custom/>
                        </FormGroup>
                        <FormGroup controlId="showSARS">
                            <FormCheck checked={activeKeys.includes("SARS")} onChange={onToggle("SARS")} label={"Show SARS"} custom/>
                        </FormGroup>
                        <FormGroup controlId="show2019-nCoV">
                            <FormCheck checked={activeKeys.includes("2019-nCoV")} onChange={onToggle("2019-nCoV")} label={"Show 2019-nCoV"} custom/>
                        </FormGroup>
                        <FormGroup controlId="show45Days">
                            <FormCheck checked={show45Days} onChange={() => setShow45Days(!show45Days)} label={"Show 45day chart"} custom/>
                        </FormGroup>
                        <FormGroup controlId="showLog">
                            <FormCheck checked={showLog} onChange={() => setShowLog(!showLog)} label={"Use log scale"} custom/>
                        </FormGroup>
                    </Form>
            </Col></Row>
            <br/><br/>
            <Row>
                <Col lg={6}><Chart showLog={showLog} title={`Deaths`} id="chart" activeKeys={activeKeys} data={show45Days ? death45 : death100}/></Col>
                <Col lg={6}><Chart showLog={showLog} title={`Infections`} id="chart" activeKeys={activeKeys} data={show45Days ? infected45 : infected100}/></Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <CardDeck>
                    <Card>
                        <Card.Header>2019 Novel Coronavirus (2019-nCoV)</Card.Header>
                        <Card.Body>
                            <p>Tracking started {data.trackingStarted['2019-nCoV']}</p>
                            <p>Source: <a href={data.source['2019-nCoV']}>{data.source['2019-nCoV']}</a></p>
                        </Card.Body>
                    </Card>
                        <Card>
                            <Card.Header>2003 SARS</Card.Header>
                            <Card.Body>
                                <p>Tracking started {data.trackingStarted['SARS']}</p>
                                <p>Source: <a href={data.source['SARS']}>{data.source['SARS']}</a></p>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>2009 Swine Flu</Card.Header>
                            <Card.Body>
                                <p>Tracking started {data.trackingStarted['Swine Flue']}</p>
                                <p>Source: <a href={data.source['Swine Flue']}>{data.source['Swine Flue']}</a></p>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
            <br/>
        </Container>
    )
}

const Chart = ({title, data, id, activeKeys, showLog}) => {
    return <div>
        <h6>{title}</h6>
        <ResponsiveContainer width={"99%"} height={400}>
            <LineChart
            data={data}
            margin={{top: 5, right: 20, left: 10, bottom: 5}}
            syncId={id}
        >
            <YAxis allowDataOverflow scale={showLog ? 'log' : 'linear'} ticks={showLog ? [1,10,100,1000,10000,100000] : undefined} domain={['auto', 'auto']} />
            <XAxis dataKey="name"/>
            <Tooltip allowEscapeViewBox={{x:true, y:true}}/>
            <CartesianGrid stroke="#000000" strokeDasharray="1 2" strokeWidth={1}/>
            {activeKeys.includes("Swine Flu") && <Line type="monotone"
                  dataKey={"Swine Flu"}
                  stroke="#FF0000"
                  yAxisId={0}
                  dot={false}
                  strokeWidth={1}
                  legendType={"triangle"}
            />}
            {activeKeys.includes("SARS") && <Line type="monotone"
                  dataKey={"SARS"}
                  stroke="#00FF00"
                  yAxisId={0}
                  dot={false}
                  strokeWidth={1}
                  legendType={"star"}
            />}
            {activeKeys.includes("2019-nCoV") && <Line type="monotone"
                  dataKey={"2019-nCoV"}
                  stroke="#FFFF00"
                  yAxisId={0}
                  dot={false}
                  strokeWidth={2}
                  legendType={"circle"}
            />}
            <Legend/>
        </LineChart>
        </ResponsiveContainer>
        <br/><br/>
    </div>
}
