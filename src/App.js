import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
function App() {
  const [result, setResult] = useState("");
  const [param1, setParam1] = useState(0);
  const [param2, setParam2] = useState("");
  const [param3, setParam3] = useState("");
  const [param41, setParam41] = useState(0);
  const [param42, setParam42] = useState(0);
  const [param43, setParam43] = useState("");
  const [param51, setParam51] = useState("");
  const [param52, setParam52] = useState(0);
  const [param61, setParam61] = useState("");
  const [param62, setParam62] = useState(0);
  const [param7, setParam7] = useState("");
  const [param81, setParam81] = useState("");
  const [param82, setParam82] = useState("");
  const [param91, setParam91] = useState("");
  const [param92, setParam92] = useState("");
  const [param93, setParam93] = useState(0);
  const [param94, setParam94] = useState("");
  const [param10, setParam10] = useState("");
  const [param12, setParam12] = useState("");
  const [param131, setParam131] = useState("");
  const [param132, setParam132] = useState(0);
  const [param133, setParam133] = useState("");

  const baseUrl =
    "http://ec2-3-70-185-66.eu-central-1.compute.amazonaws.com:8080";

  const get = async (url) => {
    setResult("");
    var res;
    var target = baseUrl + url;
    var text = "GET: URL: " + target 
    try { 
      res = await axios.get(target);
      if (res.status == 200) 
       text += "\r\n Result: User exist" 
    }catch(err){
      text+= "\r\n"+ err;
    }
    setResult(text);
  };

  const get8 = async (url) =>{
    setResult("");
    var res;
    var target = baseUrl + url;
    var text = "GET: URL: " + target 
    try { 
      res = await axios.get(target);
      if (res.data.data.length== 0)
        text += "\r\n Result: There is no assets"
      else{
        var ticks = res.data.data;
        for (var tick in ticks){
          var tickD = res.data.data[tick]
          for ( var i = 0 ; i< tickD.length; i++){
            // console.log(tickD[i])
            text += "\r\n Tick: " + tick + " Amount: " + tickD[i].amount + " Time: " + tickD[i].time;
          }
        }
      }
      console.log(res);
    }catch(err){
      text+= "\r\n"+ err;
    }
    setResult(text);
  }
  const get7 = async (url) => {
    setResult("");
    var res;
    var target = baseUrl + url;
    var text = "GET: URL: " + target 
    try { 
      res = await axios.get(target);
      if (res.data.data.length== 0)
        text += "\r\n Result: There is no assets"
      else{
        var assets = res.data.data
        // console.log(assets)
        for (var asset in assets){
          // console.log(asset, res.data.data[asset]);
          var ticks = res.data.data[asset];
          for (var tick in ticks){
            // console.log(tick, res.data.data[asset][tick])
            var tickD = res.data.data[asset][tick]
            for ( var i = 0 ; i< tickD.length; i++){
              // console.log(tickD[i])
              text += "\r\n Asset: " + asset + " Tick: " + tick + " Amount: " + tickD[i].amount + " Time: " + tickD[i].time;
            }
          }
        }
      }
      console.log(res);
      // if (res.status == 200) 
      //  text += "\r\n Result: " + res.data.data 
    }catch(err){
      text+= "\r\n"+ err;
    }
    setResult(text);
  };
  const get11 = async (url) => {
    setResult("");
    var res;
    var target = baseUrl + url;
    var text = "GET: URL: " + target 
    try { 
      res = await axios.get(target);
      console.log(res);
      if (res.status == 200) {
        if ( res.data.data.length ==0){
          text += "\r\n Result: there is no asset to show!"
        }
        else{
          for ( var i = 0 ; i<res.data.data.length; i++){
            var assetName = res.data.data[i]['asset-name']
            var ticks = res.data.data[i]['asset-prices']['ticks']
            console.log(assetName, ticks)
            if (ticks.length ==0 ){
              text += "\r\n Asset: " + assetName + " Tick: []" 
            }
            for ( var j = 0 ; j< ticks.length ; j++){
              text += "\r\n Asset: " + assetName + " Amount: " + ticks[i].amount + " Time: " + ticks[i].time 
            }
          }
        }
      }
    }catch(err){
      text+= "\r\n"+ err;
    }
    setResult(text);
  };
  const get12 = async (url, param1) => {
    setResult("");
    var res;
    var target = baseUrl + url;
    var text = "GET: URL: " + target 
    try { 
      res = await axios.get(target);
      console.log(res);
      if (res.status == 200) {
        if ( res.data.data.length ==0){
          text += "\r\n Result: there is no asset to show!"
        }
        else{
          var assetName = res.data.data['asset-name']
          var ticks = res.data.data['asset-prices']['ticks']
          console.log(assetName, ticks)
          if (ticks.length ==0 ){
            text += "\r\n Asset: " + assetName + " Tick: []" 
          }
          for ( var j = 0 ; j< ticks.length ; j++){
            text += "\r\n Asset: " + assetName + " Amount: " + ticks[j].amount + " Time: " + ticks[j].time 
          }
        }
      }
    }catch(err){
      text+= "\r\n"+ err;
    }
    setResult(text);
  };
  const post = async (url, param, index) => {
    setResult("");
    var target = baseUrl + url;
    var data;
    var text;
    var res;
    switch (index) {
      case 1:
        data = JSON.parse('{"data": { "code": ' + param + "}}");
        text = "POST: URL: " + target + "\r\n" + "Data: " + JSON.stringify(data);
        try {
          res = await axios.post(target, data);
          if (res.status == 201)
            text += "\r\nResult: \r\nID:" + res.data.data.id + "\r\nCode:" + res.data.data.code;
        } catch (err) {
          console.log("err:",err)
          text += "\r\nError: " + err;
        }
        break;
      case 2:
        data = JSON.parse('{"data": { "trust-name": "' + param + '"}}');
        text = "URL: " + target + "\r\n" + "Data: " + JSON.stringify(data);
        try{
          res = await axios.post(target, data);
          if (res.status ==201){
            text +=
              "\r\nResult: \r\nID:" + res.data.data.id + "\r\nTrust-Name:" + res.data.data['trust-name']
          }
        }catch(err){
          console.log("err:",err)
          text += "\r\nError: " + err;
        }
        break;
      case 10:
        data = JSON.parse('{"data": "' + param + '"}');
        text = "URL: " + target + "\r\n" + "Data: " + JSON.stringify(data);
        try{
          res = await axios.post(target, data);
          console.log("res", res);
          if (res.status ==201){
            text +=
              "\r\nResult:" + res.data.data
          }
        }catch(err){
          console.log("err:",err)
          text += "\r\nError: " + err;
        }
    }
    setResult(text);
  };
  const put4 = async (url, param1, param2) => {
    setResult("");
    var target = baseUrl + url;
    var res;
    var data = JSON.parse('{"data": { "client": { "code": ' + param1 + ' }, "shares": ' + param2 + '}}'); 
    var text = "PUT: URL: " + target 
    try{
      res = await axios.put(target, data);
      console.log(res);
      text +=
      "\r\nResult: \r\nID:" + res.data.data.client.id + "\r\nCode:" + res.data.data.client.code+
         "\r\nShares:" + res.data.data.shares
    }catch(err){
      text += "\r\nError: " + err;
    }
    setResult(text);
  };

  const delete6 = async (url, param1) => {
    setResult("");
    var target = baseUrl + url;
    var res;
    var text = "DELETE: URL: " + target 
    try { 
      var data = JSON.parse('{"data": { "code": ' + param1 + '}}');
      res = await axios.delete(target, data);
      console.log(res);
      // if (res.status == 200) 
      //  text += "\r\n Result: User exist" 
    }catch(err){
      text+= "\r\n"+ err;
    }
    setResult(text);
  }

  const post9 = async(url, param1, param2) =>{
    setResult("");
    var target = baseUrl + url;
    var text = "POST: URL: " + target 
    try{
      var data = JSON.parse('{"data": { "amount": ' + param1 + ', "time" : "' + param2 + '"}}');
      var res = await axios.post(target, data);
          if (res.status ==201){
            text +=
              "\r\nResult: \r\nID:" + res.data.data.id + "\r\nAmount:" + res.data.data.amount
              + "\r\nTime:" + res.data.data.time
          }
    }catch(err){
      console.log("err:",err)
      text += "\r\nError: " + err;
    }
    setResult(text);
  }
  const post13 = async(url, param1, param2) =>{
    setResult("");
    var target = baseUrl + url;
    var text = "POST: URL: " + target 
    try{
      var data = JSON.parse('{"data": { "amount": ' + param1 + ', "time" : "' + param2 + '"}}');
      var res = await axios.post(target, data);
          if (res.status ==201){
            text +=
              "\r\nResult: \r\nID:" + res.data.data.id + "\r\nAmount:" + res.data.data.amount
              + "\r\nTime:" + res.data.data.time
          }
    }catch(err){
      console.log("err:",err)
      text += "\r\nError: " + err;
    }
    setResult(text);
  }
  return (
    <div className="App">
      <Container>
        <Row>
          <Form.Control
            as="textarea"
            rows={5}
            value={result}
            onChange={(e) => e.target.value}
          />
        </Row>
        <br />
        <Row>
          <Col lg="3">
            <Form.Label>1. POST</Form.Label>
          </Col>
          <Col lg="3">
            <Form.Control placeholder="/clients" disabled />
          </Col>
          <Col lg="3">
            <Form.Control
              placeholder="Input the integer value"
              value={param1}
              onChange={(e) => setParam1(e.target.value)}
            />
          </Col>
          <Col lg="3">
            <Button onClick={() => post("/clients", param1, 1)}>Send</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="3">
            <Form.Label>2. POST</Form.Label>
          </Col>
          <Col lg="3">
            <Form.Control placeholder="/trust" disabled />
          </Col>
          <Col lg="3">
            <Form.Control
              placeholder="Input the string value"
              value={param2}
              onChange={(e) => setParam2(e.target.value)}
            />
          </Col>
          <Col lg="3">
            <Button onClick={() => post("/trust", param2, 2)}>Send</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="3">
            <Form.Label>3. GET</Form.Label>
          </Col>
          <Col lg="3">
            <Form.Control placeholder="/trust/clients/{trust-name}" disabled />
          </Col>
          <Col lg="3">
            <Form.Control
              placeholder="Input the string value"
              value={param3}
              onChange={(e) => setParam3(e.target.value)}
            />
          </Col>
          <Col lg="3">
            <Button onClick={() => get("/trust/clients/" + param3)}>
              Send
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="2">
            <Form.Label>4. PUT</Form.Label>
          </Col>
          <Col lg="2">
            <Form.Control placeholder="/trust/clients/{trust-name}" disabled />
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="Input the code"
              value={param41}
              onChange={(e) => setParam41(e.target.value)}
            />
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="Input the integer"
              value={param42}
              onChange={(e) => setParam42(e.target.value)}
            />
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="Input the name"
              value={param43}
              onChange={(e) => setParam43(e.target.value)}
            />
          </Col>
          <Col lg="2">
            <Button onClick={() => put4("/trust/clients/" + param43, param41, param42)}>Send</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="3">
            <Form.Label>5. GET</Form.Label>
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="/trust/clients/{trust-name}/{client-code}"
              disabled
            />
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="Input the string value"
              value={param51}
              onChange={(e) => setParam51(e.target.value)}
            />
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="Input the integer value"
              value={param52}
              onChange={(e) => setParam52(e.target.value)}
            />
          </Col>
          <Col lg="3">
            <Button onClick={() => get("/trust/clients/" + param51 + "/" + param52)}>
              Send
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="3">
            <Form.Label>6. DELETE</Form.Label>
          </Col>
          <Col lg="2">
            <Form.Control placeholder="/trust/clients/{trust-name}" disabled />
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="Input the name"
              value={param61}
              onChange={(e) => setParam61(e.target.value)}
            />
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="Input the integer value"
              value={param62}
              onChange={(e) => setParam62(e.target.value)}
            />
          </Col>
          <Col lg="3">
            <Button onClick={() => delete6("/trust/clients/" + param61, param62)}>Send</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="3">
            <Form.Label>7. GET</Form.Label>
          </Col>
          <Col lg="3">
            <Form.Control placeholder="/trust/amounts/{trust-name}" disabled />
          </Col>
          <Col lg="3">
            <Form.Control
              placeholder="Input the name"
              value={param7}
              onChange={(e) => setParam7(e.target.value)}
            />
          </Col>
          <Col lg="3">
            <Button onClick={() => get7("/trust/amounts/" + param7)}>Send</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="3">
            <Form.Label>8. GET</Form.Label>
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="/trust/amounts/{trust-name}/{asset-name}"
              disabled
            />
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="Input the name"
              value={param81}
              onChange={(e) => setParam81(e.target.value)}
            />
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="Input the asset"
              value={param82}
              onChange={(e) => setParam82(e.target.value)}
            />
          </Col>
          <Col lg="3">
            <Button onClick={() => get8("/trust/amounts/"+ param81+ "/"+ param82)}>Send</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="3">
            <Form.Label>9. POST</Form.Label>
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="/trust/amounts/{trust-name}/{asset-name}"
              disabled
            />
          </Col>
          <Col lg="1">
            <Form.Control
              placeholder="Name"
              value={param91}
              onChange={(e) => setParam91(e.target.value)}
            />
          </Col>
          <Col lg="1">
            <Form.Control
              placeholder="Asset"
              value={param92}
              onChange={(e) => setParam92(e.target.value)}
            />
          </Col>
          <Col lg="1">
            <Form.Control
              placeholder="Amount"
              value={param93}
              onChange={(e) => setParam93(e.target.value)}
            />
          </Col>
          <Col lg="1">
            <Form.Control
              placeholder="Time"
              value={param94}
              onChange={(e) => setParam94(e.target.value)}
            />
          </Col>
          <Col lg="3">
            <Button onClick={() => post9("/trust/amounts/" + param91 +"/" + param92, param93, param94)}>Send</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="3">
            <Form.Label>10. POST</Form.Label>
          </Col>
          <Col lg="3">
            <Form.Control placeholder="/prices/addAsset" disabled />
          </Col>
          <Col lg="3">
            <Form.Control
              placeholder="Input Asset to add"
              value={param10}
              onChange={(e) => setParam10(e.target.value)}
            />
          </Col>
          <Col lg="3">
            <Button onClick={() => post("/prices/addAsset", param10, 10)}>Send</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="4">
            <Form.Label>11. GET</Form.Label>
          </Col>
          <Col lg="4">
            <Form.Control placeholder="/prices" disabled />
          </Col>
          <Col lg="4">
            <Button onClick={() => get11("/prices")}>Send</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="3">
            <Form.Label>12. GET</Form.Label>
          </Col>
          <Col lg="3">
            <Form.Control placeholder="/prices/{asset-name}" disabled />
          </Col>
          <Col lg="3">
            <Form.Control
              placeholder="Input the Assetname"
              value={param12}
              onChange={(e) => setParam12(e.target.value)}
            />
          </Col>
          <Col lg="3">
            <Button onClick={() => get12("/prices/"+ param12)}>Send</Button>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col lg="2">
            <Form.Label>13. POST</Form.Label>
          </Col>
          <Col lg="2">
            <Form.Control placeholder="/prices/{asset-name}" disabled />
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="Input the Assetname"
              value={param131}
              onChange={(e) => setParam131(e.target.value)}
            />
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="Input the Amount"
              value={param132}
              onChange={(e) => setParam132(e.target.value)}
            />
          </Col>
          <Col lg="2">
            <Form.Control
              placeholder="Input the Time"
              value={param133}
              onChange={(e) => setParam133(e.target.value)}
            />
          </Col>
          <Col lg="2">
            <Button onClick={() => post9("/prices/"+ param131, param132, param133)}>Send</Button>
          </Col>
        </Row>
        <br/>
      </Container>
    </div>
  );
}

export default App;
