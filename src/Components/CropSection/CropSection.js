import Table from 'react-bootstrap/Table';
// import './CropSection.css';

function ResponsiveCrop() {
  return (
    <div>
      <div>
        <h1>
          All Crops
        </h1>
      </div>

      <div>
           Upload Crop
      </div>

      <div class >
      <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>


      </div>



    </div>
  );
}

export default ResponsiveCrop;