import {useRef} from 'react'

/**
 * NewInvoiceForm
 * @returns {JSX.Element}
 * @constructor
 *
 * Comments:
 * UserRef: Referanse, spesiell function i reactjs lib
 * Setter opp dom elementer direkte. Vi er bare
 * interessert i å handere alle felt ved submit
 */
function NewInvoiceForm(){
     const monthRef = useRef();
    const totalUseMonthWRef = useRef();
    const sokkelUseMonthWRef = useRef();
    const totalInvoiceMonthNOKRef = useRef();
    function submitHandler(event){
        /**
         * Vanilla javascript hindre submit til server
         */
        event.preventDefault()
        /**
         * Reading
         */
        console.info("*******HELLOÆÆÆÆÆ")
        const month = monthRef.current.value
        const totalUseMonthW = totalUseMonthWRef.current.value
        const sokkelUseMonthW = sokkelUseMonthWRef.current.value
        const totalInvoiceMonthNOK = totalInvoiceMonthNOKRef.current.value

        const monthInvoice = {
            month: month,
            totalUseMonthWatt: totalUseMonthW,
            sokkelUseMonthWatt: sokkelUseMonthW,
            totalInvoiceMonthNOK : totalInvoiceMonthNOK
        }

        console.info(monthInvoice)

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                 <div>
                    <label htmlFor="month">Month</label>
                    <input type="month" required id="month" ref={monthRef} />
                </div>
                <div>
                    <label htmlFor="totalUseMonthW">Total watt Watt used Month</label>
                    <input type="text" required id="totalUseMonthW" ref={totalUseMonthWRef} />
                </div>
                 <div>
                    <label htmlFor="sokkelUseMonthW">Sokkel watt Watt used Month</label>
                    <input type="text" required id="sokkelUseMonthW" ref={sokkelUseMonthWRef} />
                </div>
                  <div>
                    <label htmlFor="totalInvoiceMonthNOK">Invoice this month</label>
                    <input type="text" required id="totalInvoiceMonthNOK" ref={totalInvoiceMonthNOKRef} />
                </div>
             <div>
                 <button>Legg til strøm måling</button>
             </div>
            </form>
        </div>
    )
}
export default NewInvoiceForm
