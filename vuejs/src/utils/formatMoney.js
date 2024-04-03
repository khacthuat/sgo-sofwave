function formatMoney(amount) {
    const formatter = new Intl.NumberFormat("vi-VN", {
        currency: "VND",
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
    });
    const billion = 1000000000;
    const million = 1000000;

    if (amount >= billion) {
        return formatter.format(amount / billion) + " tỷ";
    } else if (amount >= million) {
        return formatter.format(amount / million) + " triệu";
    } else {
        return formatter.format(amount);
    }
}

export default formatMoney;
