import Form from '@/app/ui/invoices/create-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'

import { fetchCustomers } from '@/app/lib/data'

const CreateInvoicesPage = async () => {
  const customers = await fetchCustomers()

  return (
    <main id='CreateInvoices-Page'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  )
}

export default CreateInvoicesPage
