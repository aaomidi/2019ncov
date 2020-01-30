import React, {useMemo} from "react"
import "./index.scss"
import {Card, Col, Container, Row} from "react-bootstrap";
import {LineChart, Tooltip, XAxis, CartesianGrid, Line, Legend, ResponsiveContainer, YAxis, Label} from "recharts"
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
                <Col lg={6}><Chart title="Deaths over 100 days" id="100days" data={death100}/></Col>
                <Col lg={6}><Chart title="Infections over 100 days" id="100days" data={infected100}/></Col>
            </Row>
            <Row>
                <Col lg={6}><Chart title="Deaths over 45 days" id="45days" data={death45}/></Col>
                <Col lg={6}><Chart title="Infections over 45 days" id="45days" data={infected45}/></Col>
            </Row>
            <Row>
                <Col>
                    <table className={"table text-white"}>
                        <thead>
                        <tr>
                            <th/>
                            <th>Tracking started</th>
                            <th>Source</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>2019 Novel Coronavirus (2019-nCoV)</th>
                                <td>{data.trackingStarted['2019-nCoV']}</td>
                                <td><a href={data.source['2019-nCoV']}>{data.source['2019-nCoV']}</a></td>
                            </tr>
                            <tr>
                                <th>2003 SARS</th>
                                <td>{data.trackingStarted['SARS']}</td>
                                <td><a href={data.source['SARS']}>{data.source['SARS']}</a></td>
                            </tr>
                            <tr>
                                <th>2009 Swine Flu</th>
                                <td>{data.trackingStarted['Swine Flue']}</td>
                                <td><a href={data.source['Swine Flue']}>{data.source['Swine Flue']}</a></td>
                            </tr>
                            <tr className={"text-muted"}>
                                <td colSpan={3}>Only confirmed numbers are used</td>
                            </tr>
                            <tr className={"text-muted"}>
                                <td>Sourcecode for page:</td>
                                <td colSpan={2}><a  href="https://github.com/Richard87/2019ncov">https://github.com/Richard87/2019ncov</a></td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    )
}

const Chart = ({title, data, id}) => {
    return <div>
        <h6>{title}</h6>
        <ResponsiveContainer width={"99%"} height={400}>
            <LineChart
            data={data}
            margin={{top: 5, right: 20, left: 10, bottom: 5}}
            syncId={id}
        >
            <YAxis allowDataOverflow/>
            <XAxis dataKey="name"/>
            <Tooltip allowEscapeViewBox={{x:true, y:true}}/>
            <CartesianGrid stroke="#000000" strokeDasharray="1 2" strokeWidth={1}/>
            <Line type="monotone" dataKey={"Swine Flu"} stroke="#FF0000" yAxisId={0} dot={false} strokeWidth={1}
                  legendType={"triangle"}/>
            <Line type="monotone" dataKey={"SARS"} stroke="#00FF00" yAxisId={0} dot={false} strokeWidth={1}
                  legendType={"star"}/>
            <Line type="monotone" dataKey={"2019-nCoV"} stroke="#FFFF00" yAxisId={0} dot={false} strokeWidth={2} legendType={"circle"}/>
            <Legend/>
        </LineChart>
        </ResponsiveContainer>
        <br/><br/>
    </div>
}
