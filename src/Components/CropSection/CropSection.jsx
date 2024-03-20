// import Table from 'react-bootstrap/Table';
// // import './CropSection.css';

// function ResponsiveCrop() {
//   return (
//     <div>
//       <div>
//         <h1>
//           All Crops
//         </h1>
//       </div>

//       <div>
//            Upload Crop
//       </div>

//       <div class >
//       <Table responsive>
//       <thead>
//         <tr>
//           {/* <th>#</th> */}
//           {Array.from({ length: 7 }).map((_, index) => (
//             <th key={index}>Table heading</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           {/* <td>1</td> */}
//           {Array.from({ length: 7 }).map((_, index) => (
//             <td key={index}>Table cell {index}</td>
//           ))}
//         </tr>
//         <tr>
//           {/* <td>2</td> */}
//           {Array.from({ length: 7 }).map((_, index) => (
//             <td key={index}>Table cell {index}</td>
//           ))}
//         </tr>
//         <tr>
//           {/* <td>3</td> */}
//           {Array.from({ length: 7 }).map((_, index) => (
//             <td key={index}>Table cell {index}</td>
//           ))}
//         </tr>
//         <tr>
//           {/* <td>3</td> */}
//           {Array.from({ length: 7 }).map((_, index) => (
//             <td key={index}>Table cell {index}</td>
//           ))}
//         </tr>
//         <tr>
//           {/* <td>3</td> */}
//           {Array.from({ length: 7 }).map((_, index) => (
//             <td key={index}>Table cell {index}</td>
//           ))}
//         </tr>
//       </tbody>
//     </Table>


//       </div>



//     </div>
//   );
// }

// export default ResponsiveCrop;




import React from 'react'
import './CropSection.css'

function CropSection() {
  return (
    <div>
        <body>
    <main class="table" id="customers_table">
        <section class="table__header">
            <h1>Customer's Orders</h1>
            <div class="input-group">
                <input type="search" placeholder="Search Data..."/>
                <img src="images/search.png" alt=""/>
            </div>
            <div class="export__file">
                <label for="export-file" class="export__file-btn" title="Export File"></label>
                <input type="checkbox" id="export-file"/>
                
                <div class="export__file-options" img >
                    
                    <label>Export As &nbsp; &#10140;</label>
                    <label for="export-file" id="toPDF">PDF <img src="images/pdf.png" alt=""/></label>
                    <label for="export-file" id="toJSON">JSON <img src="images/json.png" alt=""/></label>
                    <label for="export-file" id="toCSV">CSV <img src="images/csv.png" alt=""/></label>
                    <label for="export-file" id="toEXCEL">EXCEL <img src="images/excel.png" alt=""/></label>
                </div>
            </div>
        </section>
        <section class="table__body">
            <table>
                <thead>
                    <tr>
                        <th> Crop ID <span class="icon-arrow">&#8593;</span></th>
                        <th> Crop Name <span class="icon-arrow">&#8593;</span></th>
                        <th> Customer <span class="icon-arrow">&#8593;</span></th>
                        <th> Upload Date <span class="icon-arrow">&#8593;</span></th>
                        <th> Status <span class="icon-arrow">&#8593;</span></th>
                        <th> Amount <span class="icon-arrow">&#8593;</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> #1211 </td>
                        <td> <img src="images/Alex Gonley.jpg" alt=""/>Hat</td>
                        <td> Matt Dickerson </td>
                        <td> 17 Dec, 2022 </td>
                        <td>
                            <p class="status delivered">Delivered</p>
                        </td>
                        <td> <strong> ₹128.90 </strong></td>
                    </tr>
                    <tr>
                        <td> #2822 </td>
                        <td><img src="images/Alex Gonley.jpg" alt="Crop"/> Potato </td>
                        <td> Varun </td>
                        <td> 27 Aug, 2023 </td>
                        <td>
                            <p class="status cancelled">Cancelled</p>
                        </td>
                        <td> <strong>₹5350.50</strong> </td>
                    </tr>
                    <tr>
                        <td> #3792</td>
                        <td><img src="images/Sonal Gharti.jpg" alt=""/> Mango </td>
                        <td> Varun </td>
                        <td> 14 Mar, 2023 </td>
                        <td>
                            <p class="status shipped">Shipped</p>
                        </td>
                        <td> <strong>₹210.40</strong> </td>
                    </tr>
                    <tr>
                        <td> #8483</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Potato </td>
                        <td> Varun </td>
                        <td> 25 May, 2023 </td>
                        <td>
                            <p class="status delivered">Delivered</p>
                        </td>
                        <td> <strong>₹149.70</strong> </td>
                    </tr>
                    <tr>
                        <td> #8822</td>
                        <td><img src="images/Sarita Limbu.jpg" alt=""/> Carrot </td>
                        <td> Varun </td>
                        <td> 23 Apr, 2023 </td>
                        <td>
                            <p class="status pending">Pending</p>
                        </td>
                        <td> <strong>₹399.99</strong> </td>
                    </tr>
                    <tr>
                        <td> #7682</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Onion </td>
                        <td> Varun </td>
                        <td> 23 Apr, 2023 </td>
                        <td>
                            <p class="status cancelled">Cancelled</p>
                        </td>
                        <td> <strong>₹399.99</strong> </td>
                    </tr>
                    <tr>
                        <td> #2681</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Sugercane </td>
                        <td> Varun </td>
                        <td> 20 May, 2023 </td>
                        <td>
                            <p class="status delivered">Delivered</p>
                        </td>
                        <td> <strong>₹399.99</strong> </td>
                    </tr>
                    <tr>
                        <td> #8686</td>
                        <td><img src="images/Sarita Limbu.jpg" alt=""/> white </td>
                        <td>Varun </td>
                        <td> 30 Feb, 2023 </td>
                        <td>
                            <p class="status pending">Pending</p>
                        </td>
                        <td> <strong> ₹149.70</strong> </td>
                    </tr>
                    <tr>
                        <td> #7628</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Rice </td>
                        <td> Varun </td>
                        <td> 22 Dec, 2023 </td>
                        <td>
                            <p class="status cancelled">Cancelled</p>
                        </td>
                        <td> <strong>₹249.99</strong> </td>
                    </tr>
                    <tr>
                        <td> #8738</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Tomato </td>
                        <td> Varun </td>
                        <td> 22 Dec, 2023 </td>
                        <td>
                            <p class="status cancelled">Cancelled</p>
                        </td>
                        <td> <strong>₹249.99</strong> </td>
                    </tr>
                    <tr>
                        <td> #8584</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Cucumber </td>
                        <td> Varun </td>
                        <td> 22 Dec, 2023 </td>
                        <td>
                            <p class="status cancelled">Cancelled</p>
                        </td>
                        <td> <strong>₹249.99</strong> </td>
                    </tr>
                    <tr>
                        <td> #8738</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Tomato </td>
                        <td> Varun</td>
                        <td> 22 Dec, 2023 </td>
                        <td>
                            <p class="status cancelled">Cancelled</p>
                        </td>
                        <td> <strong>₹249.99</strong> </td>
                    </tr>
                    <tr>
                        <td> #9759</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Cucumber </td>
                        <td> Varun </td>
                        <td> 22 Dec, 2023 </td>
                        <td>
                            <p class="status cancelled">Cancelled</p>
                        </td>
                        <td> <strong>₹249.99</strong> </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
   

</body>

      
    </div>
  )
}

export default CropSection

