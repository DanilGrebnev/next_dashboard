import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import Form from '@/app/ui/invoices/edit-form'
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data'
import { InvoiceForm, CustomerField } from '@/app/lib/definitions'
import { notFound } from 'next/navigation'

interface IEditPagePageProps {
  params: { id: string }
}

const EditPage = async ({ params }: IEditPagePageProps) => {
  const id = params.id

  const [invoice, customers] = (await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ])) as unknown as [InvoiceForm, CustomerField[]]

  if (!invoice) {
    notFound()
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form
        invoice={invoice}
        customers={customers}
      />
    </main>
  )
}

export default EditPage
