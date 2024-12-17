import cors from 'cors'
import express from 'express'
import admin from 'firebase-admin'
import { initializeApp } from 'firebase-admin/app'
import {
  AppDataSource,
  DataWarehouse,
} from '../../../infra/database/typeorm/data_source'
import { adminUserRoutes } from '../routers/admin'
import { assetRoutes } from '../routers/asset'
import { authenticateRoutes } from '../routers/authenticate'
import { cashDrawerRoutes } from '../routers/cashDrawer'
import { cashFlowRoutes } from '../routers/cashFlow'
import { contactRoutes } from '../routers/contact'
import { goldPriceRoutes } from '../routers/goldPrice'
import { notificationRoutes } from '../routers/notification'
import { orderRoutes } from '../routers/order'
import { productRoutes } from '../routers/product'
import { profileRoutes } from '../routers/profile'
import { relativeRoutes } from '../routers/relative'
import { staffRoutes } from '../routers/staff'
import { userRoutes } from '../routers/user'
import { vendorRoutes } from '../routers/vendor'

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })
DataWarehouse.initialize()
  .then(() => {
    console.log('Data Warehouse has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Warehouse initialization:', err)
  })

initializeApp({
  credential: admin.credential.cert({
    projectId: "gold-store-eced9",
    clientEmail: "firebase-adminsdk-z2o81@gold-store-eced9.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC8De7Zl12ns2qn\nTPtO+OpyvIzWvbiIscpKOiEvF7Ey7WOgVZBfuV0vbiQMZFa5inagTtvykO1plnMd\nX8aOM/kdjKLCVcHPOYGAaKo1tnkMBczTXyblctTF4KUSUjkYEwgVA31q1mVhphlb\nDFzfRzIO/86Dh4+IiP/k0Aewcu4b0pu4wTsXHsOLdjF5ZTrywQ/Y4m0+o55kgFz0\nQbZ5BFybqjKdBcH1RPaC7zs3A6xT5YZ4PCmDV+MMqbUN4DAoNHJn0mTtu4OffI8z\nKObofeXB4hFevsC26Yg1gQ8IkeReq6mguPoo6YLp3xqQdV/PaIsp5n5sSRXIy9We\nTZ0f5GbpAgMBAAECggEAAXjWcsuVhxeHcTHQEckvBKDnNVMc260QmU4lLlowH+bt\nzbZ9v9ISoalqDNLIPwGPdifH3vk1cosj8YnrYveTLqEIMR88uiOIGPo4wtzfy7FL\n7iejhU5Fzhq5EBCms8KKYKe7VpfBCWekcSsCmxjSkn18H1lzTS1NW3wpYz8zD/Kt\np/xvl7Vqe/K4WdVl/U1945y1798JiuvqBU9mBlpXxDFYO3hkf3AAuRFNXlXD/Fq1\n9T5+BEiwL+fIsSrxo84O8T9uXIQn5oYXhOkdebMzHWvJeY4p4cIq8D7rxlAKsG+D\nyz4sCOKiD0ciRX8iscZ1oOTIcQsScbgrdn6MmGv01QKBgQDc+xnj3ehoQPQzg/w8\nlYMJ+win9svHg8CuwNO/TcwAjp+EDhZchaChVscaEC+PPSl712Jt/lj6UmGR8VnD\nom0CngQJFsILBxoPWdvlJbV4yX1nw967jKe3lKjJZOu1Kgr9h3sRKNw0GQJt53QM\nqDNIgz/bd/NC5ejVlPTdOOKPNwKBgQDZ2wzaZR9OInvawCO3ptuehDnO+ILMaz/1\ncxh3CxlcSF7OFttzflzkW402ynElgyyqVsUkbTCTmNyMbgxCOxNqJXC8rUwZ8LdP\n8O/+2+V2JFs7pgi42mNmoOo6C4m9MIiawO5tNpyOPI4Np83UcfwrhQLJ9xK2C//a\nRzhEqFqK3wKBgQDFEjJ+opH3F6Ywow45wWSBbBzGHjSRk5AsyM6OFwVNoePkUuPi\nU1FzUP5y4ehoJ7VtOiIP0frsErfs/X5+F8Z7xQv4RxF54DV/ZzXR35U9SQPLnERw\nofmYoLz+DkCe6gWvIDnCjdwDoiImfXljKEXD7zjtssWA7aR9hT/yYh66dQKBgQC8\nTO+xHVKPsJKpIwY8SQbu3o8w6+/yTIk92Du/OWK0NwFq1KreCsyzvMY0I4rkx5ql\nqNZBg/dGvAt1ffEule1UBASLsKZkjYGEoVZvTRXqpcYNqpdDX9Am9tM9VJe7ZOXO\nDRCIaXmsH38RIodwJw21eARPGTWdEIYW3xQtk+6etQKBgQDGH/AMRPBO2fOV4Yez\nAVrBnvhE3ttt5rl3T2ZmagnaNWh+RKtRHgHC3HG70U6qSyYm4vBcuDybuIHqrJce\nNYN8hKeYmIgCn4vMyp/Nui0m+qUJvRRgpUwFTHcHsRgrvOhSLc56/ZcncmXX+E8F\n7q63+r9e9zB3xFgKEgv5RnNWvQ==\n-----END PRIVATE KEY-----\n",
  }),
  projectId: "gold-store-eced9",
})

/**
 * Express application instance.
 */
const app = express()

/**
 * CORS options for allowing all origins.
 */
const corsOptions: cors.CorsOptions = {
  origin: '*',
}

app.use(cors(corsOptions))
app.use(express.json())

/**
 * Mounting routes for documentation, user-related, and authentication endpoints.
 */
app.use('/users', userRoutes)
app.use('/auth', authenticateRoutes)
app.use('/admin', adminUserRoutes)

app.use('/vendors', vendorRoutes)
app.use('/products', productRoutes)
app.use('/prices', goldPriceRoutes)
app.use('/orders', orderRoutes)
app.use('/drawers', cashDrawerRoutes)
app.use('/assets', assetRoutes)
app.use('/cash_flows', cashFlowRoutes)

app.use('/contacts', contactRoutes)
app.use('/staffs', staffRoutes)
app.use('/relatives', relativeRoutes)
app.use('/profile', profileRoutes)
app.use('/notifications', notificationRoutes)

export { app }
