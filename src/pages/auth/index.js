import {Button, Col, Container, Form, Fragment, Helmet, lazy, Row, useForm} from "libraries";
import {postLogin} from "services";
import {useCookies} from 'react-cookie';
import {notify} from "react-notify-toast";
import "./auth.scss";

const PageHeader = lazy(() => import('components/PageHeader'));

const Auth = () => {

    const [ cookies, setCookie ] = useCookies(['dbo']);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const payload = { url: '/dummy/auth.json', body: { email: data.email, password: data.password } };
        postLogin(payload).then(response => {
            const findAccount = response.filter(account => account.email === data.email && account.password === data.password);
            if (findAccount.length > 0) {
                setCookie("dbo", findAccount[0].username, {
                    path: "/",
                    maxAge: 86400,
                    sameSite: true,
                    secure: true
                });
                const username = cookies.dbo;
                if (!username) {
                    notify.show(`Selamat datang di DBO CMS`, 'success');
                }
                else {
                    notify.show(`Selamat datang di DBO CMS ${username}`, 'success');
                }
            }
            else {
                notify.show('Periksa email atau password', 'error');
            }
        })
    }

    return (
        <Fragment>
            <Helmet>
                <title>DBO CMS</title>
            </Helmet>
            <div className="driver-container">
                <PageHeader title="DBO CMS" desc="Depoguna Bangunan Online Management System" />
                <div className={'bg-white ml-24p mr-24p'}>
                    <div className={'login'}>
                        <Container>
                            <Row>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"
                                                          {...register("email", { required: true })} />
                                            {errors.email &&
                                                <Form.Text className="text-danger">
                                                    We'll never share your email with anyone else.
                                                </Form.Text>
                                            }
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter Password"
                                                          {...register("password", { required: true })} />
                                            {errors.password &&
                                                <Form.Text className="text-danger">
                                                    Password is required
                                                </Form.Text>
                                            }
                                        </Form.Group>
                                        <Button variant="danger" type={'submit'} className={'w-100'}>
                                            Login
                                        </Button>
                                    </form>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <label className={'color-primary mt-16p'}>*Notes</label>
                                    <p className={'font-12 color-grey'}>
                                        Email : muhammadelzandiyusuf10@gmail.com / dbocms@gmail.com <br />
                                        Password : dboCMS
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Auth
