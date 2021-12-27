import { useLocation, BiDetail } from 'libraries';
import { convertDate, getSliceData } from "utils";
import './tableCustom.scss';

import Pagination from 'components/Pagination';

const TableCustom = ({headers, bodies}) => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const limit = 5;
    const getSlice = getSliceData(params, limit);

    return (
        <div className={'table'}>
            <div className={'desktop-view'}>
                <table>
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header.name}</th>
                            ))}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {bodies.slice(getSlice.from, getSlice.to).map((body, index) => (
                        <tr key={index}>
                            <td>{body.firstName} {body.lastName}</td>
                            <td>{body.email}</td>
                            <td>{body.phoneNumber}</td>
                            <td>{convertDate(body.dateJoined)}</td>
                            <td>
                                <span><BiDetail className={'icon'} /> Detail</span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className={'mobile-view'}>
                <div className={'table-box'}>
                    {headers.map((header, index) => (
                        <h5 className={'table-label'} key={index}>{header.name}</h5>
                    ))}
                    <h5 className={'table-label'}>Action</h5>
                </div>
                {bodies.slice(getSlice.from, getSlice.to).map((body, index) => (
                    <div className={'table-box mt-16p'} key={index}>
                        <div className={'table-label'}>{body.firstName} {body.lastName}</div>
                        <div className={'table-label'}>{body.email}</div>
                        <div className={'table-label'}>{body.phoneNumber}</div>
                        <div className={'table-label'}>{convertDate(body.dateJoined)}</div>
                        <div className={'table-label'}>
                            <span>Detail</span>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination total={bodies.length} limit={limit} current={getSlice.page} />
        </div>
    )
}

export default TableCustom