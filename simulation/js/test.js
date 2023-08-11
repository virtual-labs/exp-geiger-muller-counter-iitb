var cc = document.getElementById('pannelcreate');
var pp = new Pannel(cc);
var button = `<button  class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight1">Open Right Panel</button>`;
var table = `
<table>
<tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
</tr>

<tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
</tr>

<tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
</tr>


</table>
`;
// pp.addtoleftpannel(table);
// pp.addtoleftpannel("<br>");
// pp.addtoleftpannel(table);
// pp.addcanvas('activiy-1');
// var canvas = pp.canvas;
pp.addtoleftpannel(button);
//# sourceMappingURL=test.js.map