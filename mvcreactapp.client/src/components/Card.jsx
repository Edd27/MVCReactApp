export default function Card({ header, content, buttonLabel }) {
    return (
        <section className="row justify-content-md-center">
            <div className="col-md-4 col-lg-4">
                <div className="card text-center bg-dark mt-5">
                    <div className="card-body">
                        <h1 className="card-title text-info">{header}</h1>
                        <p className="card-text text-light">{content}</p>
                        <button className="btn btn-danger">{buttonLabel}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}