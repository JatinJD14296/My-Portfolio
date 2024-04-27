import React from "react";
import styled from "styled-components";

export default function Qualification() {
    return (
        <Wrapper id="qualification" >
            <div className="container">
                <h2 className="mb-5 text-center font40 extraBold">My Qualification</h2>
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
                    <td>QUT</td>
                    <td>2023 – 2025</td>
                    <td>Running</td>
                  </tr>
                  <tr>
                    <td>Bachelor of Computer
                    Applications (BCA), Computer
                    Application</td>
                    <td>VNSGU</td>
                    <td>2016 - 2019</td>
                    <td>CGPA: 74.00 %</td>
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
            </div>
        </Wrapper>
       
    )

}

const Wrapper = styled.section`
  width: 100%;
  padding:70px 0;
  background:#F5F5F5;
`;