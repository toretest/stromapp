import InvoicesList from "../../components/invoices/InvoicesList";
import NewInvoiceForm from "../../components/invoices/NewInvoiceForm";

function Index() {
    return (
        <div>
            <NewInvoiceForm/>
            <InvoicesList/>
        </div>
    )
}

export default Index
