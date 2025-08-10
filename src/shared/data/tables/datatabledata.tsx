
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,  { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import dynamic from 'next/dynamic';
const DataTable = dynamic(() => import("react-data-table-component"), { ssr: false });

//Material ui Tables

interface Column {
	id: 'name' | 'code' | 'population' | 'size' | 'density';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: readonly Column[] = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
	{
		id: 'population',
		label: 'Population',
		minWidth: 170,
		align: 'right',
		format: (value: number) => value.toLocaleString('en-US'),
	},
	{
		id: 'size',
		label: 'Size\u00a0(km\u00b2)',
		minWidth: 170,
		align: 'right',
		format: (value: number) => value.toLocaleString('en-US'),
	},
	{
		id: 'density',
		label: 'Density',
		minWidth: 170,
		align: 'right',
		format: (value: number) => value.toFixed(2),
	},
];

interface Data {
	name: string;
	code: string;
	population: number;
	size: number;
	density: number;
}

function createData(
	name: string,
	code: string,
	population: number,
	size: number,
): Data {
	const density = population / size;
	return { name, code, population, size, density };
}

const rows = [
	createData('India', 'IN', 1324171354, 3287263),
	createData('China', 'CN', 1403500365, 9596961),
	createData('Italy', 'IT', 60483973, 301340),
	createData('United States', 'US', 327167434, 9833520),
	createData('Canada', 'CA', 37602103, 9984670),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('France', 'FR', 67022000, 640679),
	createData('United Kingdom', 'GB', 67545757, 242495),
	createData('Russia', 'RU', 146793744, 17098246),
	createData('Nigeria', 'NG', 200962417, 923768),
	createData('Brazil', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (_event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table" className="table-bordered sticky-header-table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell className="!border-b !border-defaultborder dark:!border-defaultborder/10"
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align} className="!border-b !border-defaultborder dark:!border-defaultborder/10">
													{column.format && typeof value === 'number'
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData1(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows1 = [
  createData1('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData1('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData1('Eclair', 262, 16.0, 24, 6.0),
  createData1('Cupcake', 305, 3.7, 67, 4.3),
  createData1('Gingerbread', 356, 16.0, 49, 3.9),
];

export  function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" className="table-bordered">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" className="!border-b !border-defaultborder dark:!border-defaultborder/10" >
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" className="border-b">{row.calories}</StyledTableCell>
              <StyledTableCell align="right" className="border-b">{row.fat}</StyledTableCell>
              <StyledTableCell align="right" className="border-b">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right" className="border-b">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// CsV Table Data
function convertArrayOfObjectsToCSV (array:any) {
  let result:any

  const columnDelimiter = ','
  const lineDelimiter = '\n'
  const keys = Object.keys(data[0])

  result = ''
  result += keys.join(columnDelimiter)
  result += lineDelimiter

  array.forEach((item:any) => {
    let ctr = 0
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter

      result += item[key]

      ctr++
    })
    result += lineDelimiter
  })

  return result
}

// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
function downloadCSV (array:any) {
  const link = document.createElement('a')
  let csv = convertArrayOfObjectsToCSV(array)
  if (csv == null) return

  const filename = 'export.csv'

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`
  }

  link.setAttribute('href', encodeURI(csv))
  link.setAttribute('download', filename)
  link.click()
}

const Export = ({ onExport }:any) => (
  <button onClick={(e:any) => onExport(e.target.value)}  className='export-table ti-btn ti-btn-primary'>Export</button>
)
const data = [
  {
    id: '1',
    SNO: 1,
    NAME: 'Yonna',
    LASTNAME: 'Qond',
    POSITION: 'Financial Controller',
    DATE: '2012/02/21',
    SALARY: '$143,654',
    EMAIL: 'i.bond@datatables.net'
  },
  {
    id: '2',
    SNO: 2,
    NAME: 'Zonna',
    LASTNAME: 'Jond',
    POSITION: 'Accountant',
    DATE: '2012/02/21',
    SALARY: '$343,654',
    EMAIL: 'a.bond@datatables.net'
  },
  {
    id: '3',
    SNO: 3,
    NAME: 'Nonna',
    LASTNAME: 'Tond',
    POSITION: 'Chief Executive Officer',
    DATE: '2012/02/21',
    SALARY: '$743,654',
    EMAIL: 's.bond@datatables.net'
  },
  {
    id: '4',
    SNO: 4,
    NAME: 'Bonna',
    LASTNAME: 'Oond',
    POSITION: 'Chief Operating Officer',
    DATE: '2012/02/21',
    SALARY: '$643,654',
    EMAIL: 'w.bond@datatables.net'
  },
  {
    id: '5',
    SNO: 5,
    NAME: 'Honna',
    LASTNAME: 'Pond',
    POSITION: 'Data Coordinator',
    DATE: '2012/02/21',
    SALARY: '$243,654',
    EMAIL: 'e.bond@datatables.net'
  },
  {
    id: '6',
    SNO: 6,
    NAME: 'Fonna',
    LASTNAME: 'Nond',
    POSITION: 'Developer',
    DATE: '2012/02/21',
    SALARY: '$543,654',
    EMAIL: 'r.bond@datatables.net'
  },
  {
    id: '7',
    SNO: 7,
    NAME: 'Aonna',
    LASTNAME: 'Xond',
    POSITION: 'Development lead',
    DATE: '2012/02/21',
    SALARY: '$843,654',
    EMAIL: 'g.bond@datatables.net'
  },
  {
    id: '8',
    SNO: 8,
    NAME: 'Qonna',
    LASTNAME: 'Vond',
    POSITION: 'Director',
    DATE: '2012/02/21',
    SALARY: '$743,654',
    EMAIL: 'x.bond@datatables.net'
  },
  {
    id: '9',
    SNO: 9,
    NAME: 'Jond',
    LASTNAME: 'Zonna',
    POSITION: 'Marketing Officer',
    DATE: '2012/02/21',
    SALARY: '$543,654',
    EMAIL: 'k.bond@datatables.net'
  },
  {
    id: '10',
    SNO: 10,
    NAME: 'Yonna',
    LASTNAME: 'Qond',
    POSITION: 'Financial Controller',
    DATE: '2012/02/21',
    SALARY: '$143,654',
    EMAIL: 's.bond@datatables.net'
  },
  {
    id: '11',
    SNO: 11,
    NAME: 'Yonna',
    LASTNAME: 'Qond',
    POSITION: 'Financial Controller',
    DATE: '2012/02/21',
    SALARY: '$143,654',
    EMAIL: 'b.bond@datatables.net'
  },
  {
    id: '12',
    SNO: 12,
    NAME: 'Yonna',
    LASTNAME: 'Qond',
    POSITION: 'Financial Controller',
    DATE: '2012/02/21',
    SALARY: '$143,654',
    EMAIL: 'o.bond@datatables.net'
  },
  {
    id: '13',
    SNO: 13,
    NAME: 'Qonna',
    LASTNAME: 'Pond',
    POSITION: 'Data Coordinator',
    DATE: '2012/02/21',
    SALARY: '$243,654',
    EMAIL: 'q.bond@datatables.net'
  },
  {
    id: '14',
    SNO: 14,
    NAME: 'Yonna',
    LASTNAME: 'Qond',
    POSITION: 'Financial Controller',
    DATE: '2012/02/21',
    SALARY: '$143,654',
    EMAIL: 'm.bond@datatables.net'
  }
]
const columns1:any = [
  {
    name: 'S.NO',
    selector: (row:any) => [row.SNO],
    sortable: true
  },
  {
    name: 'NAME',
    selector: (row:any) => [row.NAME],
    sortable: true
  },
  {
    name: 'LAST NAME',
    selector: (row:any) => [row.LASTNAME],
    sortable: true
  },
  {
    name: 'POSITION',
    selector: (row:any) => [row.POSITION],
    sortable: true
  },
  {
    name: 'DATE',
    selector: (row:any) => [row.DATE],
    sortable: true
  },
  {
    name: ' SALARY',
    selector: (row:any) => [row.SALARY],
    sortable: true
  },
  {
    name: 'EMAIL',
    selector: (row:any) => [row.EMAIL],
    sortable: true
  }
]

export function ExportCSV () {
  const actionsMemo = React.useMemo(() => <Export onExport={() => { downloadCSV(data) }} />, [])
  const [selectedRows, setSelectedRows] = React.useState<any>([])
  const [toggleCleared, setToggleCleared] = React.useState(false)
  const selectdata:any = []
  const handleRowSelected = React.useCallback((state:any) => {
    setSelectedRows(state.selectedRows)
  }, [])
  const contextActions = React.useMemo(() => {
    const Selectdata = () => {
      if (window.confirm(`download:\r ${selectedRows.map((r:any) => r.SNO)}?`)) {
        setToggleCleared(!toggleCleared)
        data.map((e) => {
          selectedRows.map((sr:any) => {
            if (e.id === sr.id) {
              selectdata.push(e)
            }
            return selectedRows
          })
          return data
        })
        downloadCSV(selectdata)
      }
    }

    return <Export onExport={() => Selectdata()} icon="true" />
  }, [data, selectdata, selectedRows])
  const [allData, setAllData] = React.useState(data)

  const allElement2 :any= []

  const myfunction = (InputData:any) => {
    for (const allElement of data) {
      if (allElement.NAME.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.NAME.toLowerCase().startsWith(InputData.toLowerCase())) {
          allElement2.push(allElement)
        }
      }
    }
    setAllData(allElement2)
  }

  return (
     <span className="datatable">
<label>
    <input type="text" placeholder="Search..." className="mb-4 form-control-sm form-control" onChange={(ele) => { myfunction(ele.target.value) }}/>
    </label>

      <DataTable
        columns={columns1}
        data={allData}
        actions={actionsMemo}
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        selectableRows
        pagination
      />
    </span>
  )
}