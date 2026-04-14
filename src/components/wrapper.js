const Wrapper = ({ children, className = '' }) => (
  <main
    role="main"
    className={`relative rounded-sm w-[90%] p-[25px] max-w-[960px] break-words bg-bg mx-auto mb-[30px] -top-[100px] shadow-[0_0_0_0,0_6px_12px_rgba(0,0,0,0.1)] min-h-[150px] md:w-4/5 md:p-[50px] ${className}`}
  >
    {children}
  </main>
)

export default Wrapper
