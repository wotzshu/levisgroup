import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Bulunmayan bir sayfaya girmeye çalışıyorsun!',
        'Bulunmayan bir sayfaya girmeye çalışıyorsun!',
        'Bulunmayan bir sayfaya girmeye çalışıyorsun!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

