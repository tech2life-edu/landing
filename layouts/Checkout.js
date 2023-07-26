import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Checkout = ({ data }) => {
    const { frontmatter } = data;
    const { title, info } = frontmatter;
    const { contact_form_action } = config.params;

    return (
        <section className="pt-8 pb-8 md:section">
            <div className="container">
                {markdownify(title, "h1", "text-center font-normal")}
                <div className="section flex flex-col-reverse md:flex-row-reverse pt-0 md:pt-[70px] pb-0">
                    <div className="col-12 md:col-6 lg:col-6">
                        <form
                            className="contact-form"
                            method="POST"
                            action={contact_form_action}
                        >
                            <div className="mb-3">
                                <input
                                    className="form-input w-full rounded"
                                    name="name"
                                    type="text"
                                    placeholder="Nombres y Apellidos"
                                    required
                                />
                            </div>
                            <div className="mb-3 flex flex-col sm:flex-row sm:gap-1 justify-between">
                                <input
                                    className="form-input w-full rounded mb-3 sm:mb-0"
                                    name="email"
                                    type="email"
                                    placeholder="Tu correo"
                                    required
                                />
                                <input
                                    className="form-input w-full rounded"
                                    name="phone"
                                    type="tel"
                                    placeholder="Celular"
                                    required
                                />
                            </div>

                            <div className="mb-3 flex flex-col sm:flex-row sm:gap-1 justify-between">
                                <select
                                    className="form-input w-full rounded mb-3 sm:mb-0"
                                    name="document_type"
                                    required
                                    defaultValue={''}
                                >
                                    {/* agregar validación para el string vacio */}
                                    <option disabled value='' >Tipo de Documento</option>
                                    <option value='CC'>Cédula de Ciudadanía</option>
                                    <option value='CE'>Cédula de Extranjería</option>
                                    <option value='NI'>NIT</option>
                                    <option value='PB'>Pasaporte</option>
                                    <option value='RC'>Registro Civil</option>
                                </select>
                                <input
                                    className="form-input w-full rounded"
                                    name="document"
                                    type="text"
                                    placeholder="Número de documento"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    className="form-input w-full rounded"
                                    name="full_address"
                                    type="text"
                                    placeholder="Dirección"
                                    required
                                />
                            </div>
                            <div className="mb-3 flex flex-col sm:flex-row sm:gap-1 justify-between">
                                <input
                                    className="form-input w-full rounded mb-3 sm:mb-0"
                                    name="state"
                                    type="text"
                                    placeholder="Departamento"
                                    required
                                />
                                <input
                                    className="form-input w-full rounded"
                                    name="city"
                                    type="text"
                                    placeholder="Ciudad"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    className="form-input w-full sm:w-[50%] rounded"
                                    name="zip_code"
                                    type="text"
                                    placeholder="Código postal"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-full sm:w-28">
                                Pagar
                            </button>
                        </form>
                    </div>
                    <div className="content col-12 md:col-6 lg:col-6 pr-0 md:pr-6">
                        {markdownify(info.title, "h4")}
                        {markdownify(info.description, "p", "mt-4")}
                        <ul className="contact-list mt-5">
                            {info.pay.map((contact, index) => (
                                <li key={index}>
                                    {markdownify(contact, "strong", "text-dark")}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// export const getStaticProps = async () => {
//     const homePage = await getListPage("content/checkout.md");
//     const { frontmatter } = homePage;
//     return {
//         props: {
//             frontmatter,
//         },
//     };
// };

export default Checkout;