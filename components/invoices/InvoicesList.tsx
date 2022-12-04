import {Fragment} from "react";
import Link from "next/link";

function InvoicesList(){
    return (
    <Fragment >
        <h1>The invoices</h1>
        <ul>
            <li>
                <Link href="/invoices/12345">
                    Peker 12345
                </Link>
            </li>
             <li>
                <Link href="/invoices/11111">
                    Peker 11111
                </Link>
            </li>
             <li>
                <Link href="/invoices/222222">
                    Peker 222222
                </Link>
            </li>
        </ul>
    </Fragment>
  )
}

export default InvoicesList
