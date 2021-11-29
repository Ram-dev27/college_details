import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import Spinner from './Spinner'
import '../../src/App.css';

//table style
const tableStyle = {
    border: '2px solid blue',
    width: "100%",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    cursor: 'pointer',
}
const tableHeading = {
    backgroudColor: 'blue',
    fontSize: '25px',
    background: '#3173AD',
    color: '#fff',
    fontFamily: 'arial',
    padding: '5px',
    textAlign: 'center'
}

//collegge details functional component
const CollegeDetails = () => {
    const [values, setValues] = useState([])
    const [pageNumbers, setPageNumbers] = useState(0)
    const[loading,setLoading]=useState(Boolean)
    const [searchItem, setsearchItem] = useState('')
    console.log(searchItem)

//pagination
    const collegesPerPage = 12
    const pagesVisited = pageNumbers * collegesPerPage
//search and filter
    const displayColleges = values
        .filter((val) => {
            if (searchItem === "") {
                return val ;
            }
            else if ( 
                val.name.toLowerCase().includes(searchItem.toLowerCase()) ||
                (val['state-province'] != null &&
                val['state-province'].toString().toLowerCase().includes(searchItem.toLowerCase()))) {
                return val ;
            }
        })
        .slice(pagesVisited, pagesVisited + collegesPerPage)
        .map((e, index) => {
            return (
                <tr key={index}>
                    <td >{e['state-province']}</td>
                    <td > {e.name} </td>
                    <td><a href={e.web_pages} rel="noopener noreferrer" target="_blank" >{e.web_pages}</a></td>
                    <td>{e.country}</td>
                </tr>
            )
        })
//fatch the data from the API using the useEffect
        useEffect(() => {
            setLoading(true)
            getStudents()
            },[])

        const getStudents =async()=>{
            console.log(loading)
            await fetch("http://universities.hipolabs.com/search?country=India")
            .then(response=>response.json())
            .then(res=>setValues(res))
            setLoading(false)
            
        }
    const pageCount = Math.ceil(values.length / collegesPerPage)

    const changePage = ({ selected }) => {
        setPageNumbers(selected)
    }
    return ( loading ? <Spinner/> :
        <div className='Container' style={{marginLeft:'10%',marginRight:'10%',width:'100%'}}>
            <input
                type="text"
                placeholder="Search.."
                className ="form-control"
                style={{marginTop:10,marginButtom:20,marginLeft:50,width:'40%'}}
                onChange={(event) => setsearchItem(event.target.value)}
            />
            <table className='table table-bordered table-striped table-condensed table table-hover .w-auto'
                style={tableStyle}
            >
                <thead style={tableHeading}>
                    <tr className="no-hover">
                        <th >STATE</th>
                        <th>COLLEGE NAME</th>
                        <th>WEB PAGES</th>
                        <th>COUNTRY</th>
                    </tr>
                </thead>
                <tbody>
                    {displayColleges}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationButtns"}
                previousLinkClassName={"previousBttn"}
                nextClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    )
}
export default CollegeDetails