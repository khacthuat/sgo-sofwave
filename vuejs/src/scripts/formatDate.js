function formatDate(dateTimeString) {
    const dateTime = new Date(dateTimeString);

    // Lấy thông tin ngày, tháng, năm
    const date = dateTime.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    // Lấy thông tin giờ, phút, giây
    const time = dateTime.toLocaleTimeString("en-US", { hour12: false });

    return `${date} ${time}`;
}

export default formatDate;
