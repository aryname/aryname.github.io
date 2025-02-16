var isBusying = false;
var domain = "#";
var bidanh = "#";

        function generateRandomText(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomText = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomText += characters[randomIndex];
        }

        return randomText;
        }
function quay() {
    if (!isBusying) {
        isBusying = true;
        const response = {
            Successfully: true,
            Status: null,
            GiftPart: {
                Id: 0,
                Point: 30,
                Name: Math.floor(Math.random() * 8) + 1,
                Label: '30',
                Frequency: 0,
                CampaignId: null,
            },
            TotalPoint: 0,
        };

        setTimeout(function () {
            if (response.Successfully) {
                // Xử lý response thành công
                hieu_ung.setStopPoint({ coupon_id: response.GiftPart.Name });
                console.log(response.GiftPart.Name);
                $('#ketqua').html('.'); // Xóa placeholder kết quả
                hieu_ung.play();

                setTimeout(function () {
                    isBusying = false;
                    let messageResult = 'Bạn vừa quay vào ô ';

                    switch (response.GiftPart.Name) {
                        case 1:
                            messageResult +=
                                '300 Rubox. \n Hãy kiểm tra hòm thư sau 24h để nhận phần quà.';
                            break;
                        case 2:
                            messageResult +=
                                'Trái Ác Quỷ LeoPard. \n Hãy kiểm tra hòm thư sau 24h để nhận phần quà.';
                            break;
                        case 3:
                            messageResult +=
                                'Trái Ác Quỷ Dragon. \n Hãy kiểm tra hòm thư sau 24h để nhận phần quà.';
                            break;
                        case 4:
                            messageResult +=
                                'Trái Ác Quỷ Spirit. \n Hãy kiểm tra hòm thư sau 24h để nhận phần quà.';
                            break;
                        case 5:
                            messageResult +=
                                'Trái Ác Quỷ Human. \n Hãy kiểm tra hòm thư sau 24h để nhận phần quà.';
                            break;
                        case 6:
                            messageResult +=
                                'Trái Ác Quỷ Shadow. \n Hãy kiểm tra hòm thư sau 24h để nhận phần quà.';
                            break;
                        case 7:
                            messageResult +=
                                '99.999 Robux. \n Hãy kiểm tra hòm thư sau 24h để nhận phần quà.';
                            break;
                        case 8:
                            messageResult +=
                                'Trái Ác Quỷ Mochi. \n Hãy kiểm tra hòm thư sau 24h để nhận phần quà.';
                            break;
                        default:
                            messageResult = 'Error!';
                            break;
                    }

                    const myText = messageResult;

                    swal({
                        title: "Thông Báo",
                        text: myText,
                        icon: "success",
                        dangerMode: true,
                    }).then((result) => {
                        
                    });
                }, 5000); // Delay cho hiệu ứng
            } else {
                // Xử lý response thất bại
                const messageResult = 'Không thành công!';
                $('#ketqua').html(messageResult);
                isBusying = false;
            }
        }, 0); // Thực thi ngay lập tức
    }
}
