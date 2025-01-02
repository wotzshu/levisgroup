import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Bulunmayan bir sayfaya girmeye çalışıyorsun!"} />
}

export default UnkownPage;
