import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Cmobi là ai? - Tiền thân với tên gọi quen thuộc Chau77mobi.vn, là
              1 đơn vị nhập khẩu điện thoại từ Mỹ, Hàn Quốc hẳn đã làm vừa lòng
              rất nhiều khách hàng và là địa chỉ quen thuộc để mua sắm, lên đời
              điện thoại trong nhiều năm từ 2010 đến nay. - Với tiêu chí đặt
              chất lượng sản phẩm lên hàng đầu, dịch vụ hổ trợ tận tình từ sản
              phẩm cũ giá rẻ đến máy mới nguyên hộp, trong nhiều năm, cửa hàng
              phục vụ 1 lượng khách lớn cả ở Sài Gòn và các tỉnh. - Để dễ dàng
              giao dịch, kiểm tra giá sản phẩm, chúng tôi quyết định đổi tên từ
              Chau77mobie.vn sang tên mới Cmobi.vn. Vẫn cam kết với tất cả các
              khách hàng về giá bán đúng giá niêm yết, bảo hành và hổ trợ khách
              hàng như cũ không thay đổi. - Bên cạnh đó chúng tôi luôn cố gắng
              đưa hot nhất, mới nhất về Việt Nam để phục vụ cộng đồng yêu công
              nghệ như đã từng đưa những sản phẩm về để trên tay trên các diễn
              đàn tinhte.vn, sohoa, techrum, vnexpress - Chúng tôi hân hạnh phục
              vụ các bạn tại địa chỉ quen thuộc số 77 Trần Minh Quyền P10, Q10
              và 2 địa điểm giao dịch ở Đà Nẵng, Cần Thơ luôn nha Lời Cam Kết về
              Chất lượng Sản phẩm: + 100% hàng hóa bày bán phía trên mặt định là
              hàng nguyên zin, chưa qua sữa chữa. Đối với những máy đã qua sử
              dụng thường được lựa chọn kỹ càng từ hình thức đến nội dung, được
              kiểm tra kỹ trước khi đến tay quí khách hàng + Những máy có sửa
              chữa do hỏng hóc, lỗi ngoài ý muốn, sẽ được fix lỗi, sữa chữa và
              bày bán riêng kèm theo những miêu tả cụ thể chi tiết về từng máy.
              Những máy này sẽ có giá rất tốt so với máy còn nguyên zin. + Chúng
              tôi không thu mua/trao đổi/giao lưu với những máy mà các bạn đã
              mua từ những cửa hàng khác. Ngoại trừ những máy do chính chúng tôi
              bán ra. Đa dạng sản phẩm​ + Luôn có hàng mới & hàng cũ đã qua sử
              dụng, nhiều lựa chọn phong phú cho khách hàng.​ + Luôn có giá tốt
              nhất cho anh em, kèm theo chất lượng tuyệt vời & hậu mãi từ những
              sản phẩm chúng tôi bán ra. ​ + Khách hàng mua nhiều máy 1 lúc,
              khách hàng thân thiết luôn có giá tốt.​ Lợi thế dành cho người mua
              hàng: ** Nhận đặt hàng điện thoại từ Hàn Quốc khi những model đó
              bạn không tìm thấy trong web​site ** Giá không phải là yếu tố
              quyết định- Hãy xem chất lượng máy kèm phụ kiện& đòi hỏi ở chế độ
              bảo hành, dịch vụ hậu mãi, thái độ phục vụ mà bạn chọn nơi mua
              máy. Cmobi Team,
            </p>
            <Link to="/contact" className="btn btn-outline-primary px-3">Contact Us</Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={`https://tse1.mm.bing.net/th?id=OIP.9pNHdBontohu4Kz0JpMToQHaDO&pid=Api&P=0&w=371&h=162`} alt="About Us" style={{height: "20%", marginTop: "24px"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
