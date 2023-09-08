function LoginForm({handleSubmit, email, setEmail, password, setPassword}) {
    return (
        <form onSubmit={handleSubmit} className="pt-3">
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
            <button disabled={!email || !password} className="btn btn-primary">Ingresar</button>
        </form>
    )
}

export default LoginForm