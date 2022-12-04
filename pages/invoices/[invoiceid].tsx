import {useRouter} from "next/router";
import Link from "next/link";
import InvoicesPage from "./index";
export default function Invoice() {
    const router = useRouter();
    const invoiceId = router.query.invoiceid
    return (
        <div>Invoice details on ${invoiceId}
        <InvoicesPage />
        <div><Link href='/invoices'>Back</Link></div>
        </div>
    )
}
