import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchRequest } from '../../Redux/action';

export class PaginationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pageNumber: 1,
            totalPages: 0
        }
    }

    goto = (pageNumber) => {
        this.setState({
            pageNumber
        }, () => {
            this.props.fetchLoan(this.state.pageNumber);
        });

    }

    pageNumberCheck = (number) => number < 1 ? true : false;


    render() {
        const Pages = [];
        if (this.props.pageCount) {
            for (let index = 1; index <= this.props.pageCount; index++) {
                Pages.push(<Pagination.Item
                    onClick={() => this.goto(index)}>
                    {index}
                </Pagination.Item>);
            }
            console.log(Pages);
        }

        return (

            <div>
                <Pagination>

                    {
                        Pages
                    }
                    {/* <Pagination.First onClick={() => this.goto(1)} />
                    <Pagination.Prev />
                    <Pagination.Item className={this.pageNumberCheck(this.state.pageNumber - 5) ? 'd-none' : null}
                        onClick={() => this.goto(this.state.pageNumber - 5)}>{this.state.pageNumber - 5}</Pagination.Item>

                    <Pagination.Ellipsis className={this.pageNumberCheck(this.state.pageNumber - 5) ? 'd-none' : null} />

                    <Pagination.Item className={this.pageNumberCheck(this.state.pageNumber - 2) ? 'd-none' : null}
                        onClick={() => this.goto(this.state.pageNumber - 2)}>{this.state.pageNumber - 2}</Pagination.Item>

                    <Pagination.Item className={this.pageNumberCheck(this.state.pageNumber - 1) ? 'd-none' : null}
                        onClick={() => this.goto(this.state.pageNumber - 1)}>{this.state.pageNumber - 1}</Pagination.Item>

                    <Pagination.Item className='active'>{this.state.pageNumber}</Pagination.Item>
                    <Pagination.Item onClick={() => this.goto(this.state.pageNumber + 1)}>{this.state.pageNumber + 1}</Pagination.Item>
                    <Pagination.Item onClick={() => this.goto(this.state.pageNumber + 2)}>{this.state.pageNumber + 2}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item onClick={() => this.goto(this.state.pageNumber + 10)}>{this.state.pageNumber + 10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last /> */}


                </Pagination>
            </div >
        )
    }
}


// const mapStateToProps = (state) => {
//     return { state: state.data }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchLoan: (pageno) => dispatch(fetchRequest(pageno))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent)

export default PaginationComponent