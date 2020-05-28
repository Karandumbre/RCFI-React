import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import PaginationComponent from './../PaginationComponent/PaginationComponent'
import './HomeLoan.css';
import { fetchRequest } from '../../Redux/action';

class HomeLoan extends Component {

    componentDidMount = () => {
        this.props.fetchLoan(1);
    }

    gotoSiteUrl = (url) => window.open(url, '_blank');

    render() {
        const loanData = this.props.state.data.hits && this.props.state.data.hits.map((loan) => {
            const pros = loan.pros && loan.pros.map((a, key) => {
                return <li key={key}>{a}</li>
            })
            return (
                <div className='col-lg-3 col-md-4 col-sm-6 col-12 p-3' key={loan.uuid}>
                    <Card className='p-2 text-left'>
                        <div style={{ height: '50px' }}>
                            <h6 className='text-left'>{loan.name}</h6>
                        </div>
                        <Card.Body className='p-0'>
                            <hr />
                            <div className='row text-center p-1' >
                                <div className='col-6' style={{ borderRight: '1px solid #ccc' }}>
                                    <p className='m-0'>Advertised Rate</p>
                                    <h6 style={{ fontSize: '18px' }}>{loan.advertisedRate}%</h6>
                                </div>
                                <div className='col-6'>
                                    <p className='m-0'>Comparison Rate</p>
                                    <h6 style={{ fontSize: '18px' }}>{loan.comparisonRate}%</h6>
                                </div>
                            </div>
                            <hr />
                            <ul className='p-0 pros' style={{ height: '100px' }}>
                                {pros}
                            </ul>
                            <div className='row'>
                                <div className='col-6 text-center'>
                                    <Card.Img variant="top" style={{ width: '90px' }} src={loan.company.logo} />
                                </div>
                                <div className='col-6'>
                                    <Button variant="success" onClick={() => { this.gotoSiteUrl(loan.gotoSiteUrl) }}>Go to site</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            )
        })

        return (
            <div className='row ml-0 mr-0'>
                {loanData}
                <div className='w-100 text-center page'>{
                    this.props.state.data.meta && <PaginationComponent pageCount={this.props.state.data.meta.page_count}></PaginationComponent>
                }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLoan: (pageno) => dispatch(fetchRequest(pageno))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeLoan)
