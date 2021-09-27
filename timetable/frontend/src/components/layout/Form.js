import React, { Component } from 'react'

class header extends Component {
    render() {
        return (
<div >
<table className="prefForm">
<tr>
    <th>Preference</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
</tr>
<tr>
    <td>EG1</td>
    <td><input type="radio" name="row-1" data-col="1"/></td>
    <td><input type="radio" name="row-1" data-col="2"/></td>
    <td><input type="radio" name="row-1" data-col="3"/></td>
    <td><input type="radio" name="row-1" data-col="4"/></td>
    <td><input type="radio" name="row-1" data-col="5"/></td>
</tr>
<tr>
    <td>EG2</td>
    <td><input type="radio" name="row-2" data-col="1"/></td>
    <td><input type="radio" name="row-2" data-col="2"/></td>
    <td><input type="radio" name="row-2" data-col="3"/></td>
    <td><input type="radio" name="row-2" data-col="4"/></td>
    <td><input type="radio" name="row-2" data-col="5"/></td>
</tr>
<tr>
    <td>EG3</td>
    <td><input type="radio" name="row-3" data-col="1"/></td>
    <td><input type="radio" name="row-3" data-col="2"/></td>
    <td><input type="radio" name="row-3" data-col="3"/></td>
    <td><input type="radio" name="row-3" data-col="4"/></td>
    <td><input type="radio" name="row-3" data-col="5"/></td>
</tr>
<tr>
    <td>EG4</td>
    <td><input type="radio" name="row-4" data-col="1"/></td>
    <td><input type="radio" name="row-4" data-col="2"/></td>
    <td><input type="radio" name="row-4" data-col="3"/></td>
    <td><input type="radio" name="row-4" data-col="4"/></td>
    <td><input type="radio" name="row-4" data-col="5"/></td>
</tr>
<tr>
    <td>EG5</td>
    <td><input type="radio" name="row-5" data-col="1"/></td>
    <td><input type="radio" name="row-5" data-col="2"/></td>
    <td><input type="radio" name="row-5" data-col="3"/></td>
    <td><input type="radio" name="row-5" data-col="4"/></td>
    <td><input type="radio" name="row-5" data-col="5"/></td>
</tr>
</table>
        </div>
        )
    }
}

export default header
