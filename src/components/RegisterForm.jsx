function RegisterForm({handleSubmit, name, setName, email, setEmail, password, setPassword}) {
    return (
        <form onSubmit={handleSubmit} className="pt-3">
            <div className="form-group mb-3">
                <label className="form-label" htmlFor="name">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese su email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Ingrese su password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                // disabled={!name || !email || !password}
                className="btn btn-primary">
                Registrar
            </button>
        </form>
    )
}

export default RegisterForm