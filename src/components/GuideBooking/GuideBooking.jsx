import { React } from 'react';
import classNames from 'classnames/bind';

import { GoSearch } from 'react-icons/go';
import { GiSailboat } from 'react-icons/gi';
import Button from '@mui/material/Button';

import styles from './GuideBooking.scss';

const cx = classNames.bind(styles);

function GuideBooking() {
    return (
        <div className={cx('guide-booking')}>
            <p className={cx('label')}>HƯỚNG DẪN ĐẶT TOUR</p>
            <ul>
                <li>
                    <img
                        className={cx('image-step')}
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660659510/GoTravel/search-tour-guide_zeffzz.png"
                        alt=""
                    />
                    <div className={cx('content-step')}>
                        <p className={cx('step-number')}>Bước 1</p>
                        <p className={cx('step-name')}>Tìm kiếm tour</p>
                        <div className={cx('details-step')}>
                            <p>
                                <span>Cách 1: </span>Tại khung tìm kiếm phía
                                trên màn hình, nhập từ khóa tour, tên điểm
                                đến,... và Nhấn chọn biểu tượng{' '}
                                <GoSearch className={cx('icon')} /> để tìm kiếm
                                các tour phù hợp với từ khóa tìm kiếm.
                            </p>
                            <p>
                                <span>Cách 2: </span>Tại trang chủ, chọn địa
                                điểm, loại hình tour, ngày khởi hành và nhấn
                                chọn{' '}
                                <Button variant="contained">Xem tour</Button> để
                                tìm kiếm tour phù hợp.
                            </p>
                            <p>
                                <span>Cách 3: </span>Trên thanh menu bên trái
                                màn hình, nhấn chọn biểu tượng{' '}
                                <GiSailboat className={cx('icon')} />, tất cả
                                tour du lịch sẽ được hiển thị.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <img
                        className={cx('image-step')}
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660659511/GoTravel/list-tour-guide_d5u2dp.png"
                        alt=""
                    />
                    <div className={cx('content-step')}>
                        <p className={cx('step-number')}>Bước 2</p>
                        <p className={cx('step-name')}>Chọn tour</p>
                        <div className={cx('details-step')}>
                            <p>
                                Trên trang kết quả tìm kiếm, bạn chọn tour mong
                                muốn. Nhấn chọn tour để xem thông tin chi tiết
                                của tour du lịch.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <img
                        className={cx('image-step')}
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660659512/GoTravel/details-tour-guide_pdilfj.png"
                        alt=""
                    />
                    <div className={cx('content-step')}>
                        <p className={cx('step-number')}>Bước 3</p>
                        <p className={cx('step-name')}>Đặt tour</p>
                        <div className={cx('details-step')}>
                            <p>
                                Sau khi xem các thông tin tour: tên tour, giá
                                tour, hình ảnh, thời gian trải nghiệm, lịch
                                trình tour,... bạn vui lòng chọn{' '}
                                <b>"Lịch khởi hành"</b> phù hợp và nhấn chọn{' '}
                                <Button variant="contained">Đặt tour</Button>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <img
                        className={cx('image-step')}
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660659510/GoTravel/fill-form-guide_o0nrno.png"
                        alt=""
                    />
                    <div className={cx('content-step')}>
                        <p className={cx('step-number')}>Bước 4</p>
                        <p className={cx('step-name')}>Điền thông tin</p>
                        <div className={cx('details-step')}>
                            <p>
                                Bạn vui lòng điền đây đủ thông tin liên hệ,
                                thông tin tham gia tour, thông tin thanh
                                toán,...
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <img
                        className={cx('image-step')}
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660659510/GoTravel/pay-guide_gw57i0.png"
                        alt=""
                    />
                    <div className={cx('content-step')}>
                        <p className={cx('step-number')}>Bước 5</p>
                        <p className={cx('step-name')}>Thanh toán</p>
                        <div className={cx('details-step')}>
                            <p>
                                Nếu đã đã chắc chắn tất cả thông tin đều chính
                                xác sau đó nhấn chọn{' '}
                                <Button variant="contained">Thanh toán</Button>{' '}
                                để thực hiện thanh toán đặt tour.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <img
                        className={cx('image-step')}
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660659510/GoTravel/success-guide_t3v3y1.png"
                        alt=""
                    />
                    <div className={cx('content-step')}>
                        <p className={cx('step-number')}>Bước 6</p>
                        <p className={cx('step-name')}>Hoàn thành đặt tour</p>
                        <div className={cx('details-step')}>
                            <p>
                                Bạn sẽ nhận được thông báo quá trình đặt tour
                                hoàn thành, bạn có thể xem lại thông tin tour
                                vừa được đặt bằng cách nhấn chọn{' '}
                                <Button variant="contained">
                                    Xem tour đặt
                                </Button>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <hr />
            <hr />
            <hr />
            <p className={cx('label')}>CHUẨN BỊ GÌ CHO CHUYẾN DU LỊCH ?</p>
            <p className={cx('introduce')}>
                Bạn cần một chuyến du lịch để có nhiều thời gian gần gũi, nghỉ
                ngơi cùng những người thân trong gia đình, bạn bè. Tuy nhiên,
                bạn chưa có nhiều kinh nghiệm du lịch hoặc chưa có thời gian để
                chuẩn bị kỹ lưỡng cho chuyến đi. <span>GO Travel</span> sẽ gợi ý
                đến bạn những điều cần chuẩn bị để chuyến du lịch của bạn thật
                trọn vẹn.
            </p>
            <div className={cx('prepare-step')}>
                <p className={cx('title')}>1. Chọn điểm du lịch ưng ý nhất</p>
                <p className={cx('details')}>
                    Tùy theo kinh phí, sự yêu thích và nhu cầu du lịch khám phá
                    hoặc nghỉ dưỡng mà bạn có thể chọn điểm du lịch phù hợp
                    nhất. Hãy chọn những điểm đến mà bạn chưa đi lần nào hoặc
                    một nơi có cả dịch vụ vui chơi giải trí vừa có dịch vụ nghỉ
                    dưỡng để chuyến du lịch của bạn trọn vẹn hơn. Và cũng để bạn
                    vừa có thể khám phá hết những cảnh đẹp thiên nhiên vừa có
                    thời gian nghỉ ngơi, nạp thêm năng lượng cho những ngày làm
                    việc sau đó.
                </p>
            </div>
            <div className={cx('prepare-step')}>
                <p className={cx('title')}>
                    2. Chọn thời điểm du lịch thích hợp
                </p>
                <p className={cx('details')}>
                    Sau khi đã chọn được điểm du lịch, bạn nên chọn thời gian
                    nào tốt nhất để đi du lịch cùng người thân. Mỗi địa điểm có
                    một nét đẹp riêng vào từng mùa, đi du lịch theo mùa sẽ giúp
                    bạn khám phá hết nét đẹp của nơi mình sắp đến, đồng thời
                    giúp chuyến đi thêm phần ý nghĩa.
                </p>
            </div>
            <div className={cx('prepare-step')}>
                <p className={cx('title')}>3. Đặt tour trên GO Travel</p>
                <p className={cx('details')}>
                    <span>GO Travel</span> cung cấp đa dạng các tour du lịch
                    trên khắp Việt Nam, với nhiều loại hình du lịch: du lịch
                    tham quan, du lịch khám phá, du lịch văn hóa, du lịch ẩm
                    thực, du lịch nghỉ dưỡng,... <span>GO Travel</span> cung cấp
                    những hướng dẫn chi tiết các bước đặt một tour du lịch và
                    những đều cần chuẩn bị cho chuyến du lịch được trọn vẹn.
                </p>
            </div>
            <div className={cx('prepare-step')}>
                <p className={cx('title')}>4. Chuẩn bị đồ đạc và hành lý</p>
                <p className={cx('details')}>
                    Trước khi cho tất cả đồ đạc, vật dụng cá nhân vào vali, bạn
                    phải kiểm tra thật kỹ lưỡng và cân nhắc những vật dụng cần
                    thiết nhất cho chuyến du lịch của mình. Tránh mang theo quá
                    nhiều đồ đạc vì nó sẽ làm cho hành lý của bạn cồng kềnh và
                    khiến bạn mệt mỏi khi có quá nhiều thứ linh tinh.
                </p>
            </div>
            <div className={cx('prepare-step')}>
                <p className={cx('title')}>
                    5. Chuẩn bị tiền, giấy tờ tùy thân
                </p>
                <p className={cx('details')}>
                    Trong bất kì chuyến đi nào giấy tờ tùy thân và tiền cũng là
                    những vật dụng mà bạn không bao giờ được quên. Giấy tờ tùy
                    thân để bạn có thể dễ dàng thuận tiện khi di chuyển trên các
                    phương tiện. Chẳng hạn như, bạn không thể nào lên máy bay
                    nếu như không mang theo CMND, hộ chiếu, giấy khai sinh (với
                    trẻ nhỏ). Nếu bạn ngại mang theo tiền mặt vì sợ mất cắp có
                    thể mang theo thẻ ATM, thẻ tín dụng. Hiện nay, nhiều nơi
                    cũng đã chấp nhận thanh toán qua thẻ tín dụng và hầu hết các
                    tỉnh thành đều có trụ ATM, bạn sẽ không lo về việc tiền nong
                    khi đi du lịch đâu nhé!
                </p>
            </div>
            <div className={cx('prepare-step')}>
                <p className={cx('title')}>
                    6. Kiểm tra tình trạng sức khỏe và chuẩn bị thuốc
                </p>
                <p className={cx('details')}>
                    Hãy chắc chắn rằng bạn thật sự khỏe mạnh và đảm bảo có thể
                    đi du lịch trong nhiều ngày nhé! Một cơ thể yếu ớt sẽ không
                    phù hợp cho chuyến du lịch khám phá. Một sức khỏe tốt sẽ
                    giúp tinh thần sảng khoải và sẵn sàng chinh phục bất kì địa
                    điểm nào.Ngoài ra, bạn cũng nên chuẩn bị thêm một vài loại
                    thuốc cần thiết để sẵn trong vali. Thuốc cảm, kem bôi chống
                    côn trùng, thuốc say tàu xe, thuốc trị đau đầu, thuốc đau dạ
                    dày, dầu gió… là những loại thuốc mà bạn nên chuẩn bị trước
                    khi lên đường. Ngoài ra, bạn cũng nên mang theo kem chống
                    nắng để đảm bảo da không bị xấu đi quá nhiều sau chuyến đi.
                </p>
            </div>
        </div>
    );
}

export default GuideBooking;
