import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
Container

function MemberPage(){

    const {
        register: registerForm1,
        handleSubmit: handleSubmitForm1,
        formState: { errors: errorsForm1 },
        reset: resetForm1
      } = useForm();

      // 第一個表單的提交函式
        const onSubmit1 = (data) => {
            console.log("表單1成功送出", data);
            resetForm1();
        };
    return(
        <>
            <Container>
                <div className='my-300'>
                    <form onSubmit={handleSubmitForm1(onSubmit1)}>
                        <div className="mb-3">
                        <label className="form-label">姓名</label>
                        <input
                            {...registerForm1("name", { required: "姓名為必填" })}
                            className={`form-control ${errorsForm1.name ? "is-invalid" : ""}`}
                        />
                        {errorsForm1.name && <p className="text-danger">{errorsForm1.name.message}</p>}
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            {...registerForm1("email", {
                            required: "Email為必填",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "請輸入有效的Email"
                            }
                            })}
                            className={`form-control ${errorsForm1.email ? "is-invalid" : ""}`}
                        />
                        {errorsForm1.email && <p className="text-danger">{errorsForm1.email.message}</p>}
                        </div>

                        <button type="submit" className="btn btn-primary w-100">送出表單 1</button>
                    </form>
                </div>
            </Container>
        </>
    )
}
export default MemberPage;