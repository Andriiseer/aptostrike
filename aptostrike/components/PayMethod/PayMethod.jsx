export function PayMethod() {
    return (
        <div className="payMethod">
            <div className="payMethod__tabs">
                <div className="payMethod__tabName payMethod__tabName--active">APT</div>
            </div>
            <div className="payMethod__content">
                <div className="payMethod__priceRow">
                    <div className="payMethod__price"></div>
                    <div className="payMethod__price payMethod__price--active">1</div>
                    <div className="payMethod__price"></div>
                </div>
            </div>
        </div>
    )
}