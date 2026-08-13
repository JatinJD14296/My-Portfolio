import React from "react";
import styled from "styled-components";

export default function Qualification() {
    return (
        <Wrapper id="qualification" >
            <div className="container">
                <h2 className="mb-5 text-center font40 extraBold">My Qualification</h2>
                <QualificationTable>
                <tbody>
                  <tr>
                    <th>Qualification</th>
                    <th>Uni /Board</th>
                    <th>Year</th>
                    <th>Per.</th>
                  </tr>
                  <tr>
                    <td>Master of Information 
                    Technology
                    </td>
                    <td>James Cook University</td>
                    <td>2023 – 2025</td>
                    <td>5.5/7</td>
                  </tr>
                  <tr>
                    <td>Bachelor of Computer
                    Applications (BCA), Computer
                    Application</td>
                    <td>VNSGU</td>
                    <td>2016 - 2019</td>
                    <td>74.00 %</td>
                  </tr>
                  <tr>
                    <td>Diploma in Computer 
                    Application</td>
                    <td>AICES</td>
                    <td>2015 - 2016</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Programming C & C++ </td>
                    <td>AICES</td>
                    <td>2014 - 2015</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Senior Secondary (XII), Science </td>
                    <td>GHSEB board </td>
                    <td> 2011 - 2013</td>
                    <td>72.00 %</td>
                  </tr>
                  <tr>
                    <td>Secondary (X)</td>
                    <td>GSEB board</td>
                    <td>2010 - 2011</td>
                    <td>84.00 %</td>
                  </tr>
                </tbody>
                </QualificationTable>
            </div>
        </Wrapper>
       
    )

}

const Wrapper = styled.section`
  width: 100%;
  padding:70px 0;
  background:#F5F5F5;
`;
const QualificationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  th,
  td {
    text-align: left;
    padding: 12px 15px;
    border-bottom: 1px solid #e0e0e0;
  }
  th {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  @media (max-width: 760px) {
    font-size: 13px;
    th,
    td {
      padding: 8px;
    }
  }
`;