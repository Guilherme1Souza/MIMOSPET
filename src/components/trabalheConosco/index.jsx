import { useForm } from "react-hook-form";
import { FormContainer, FormStyled, ErrorText } from "./style"

export function Job() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });

            const result = await response.json();
            alert(result.message);
            reset(); 
        } catch (error) {
            alert("Erro ao enviar o formulário.");
            console.error(error);
        }
    };

    return (
        <FormContainer>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <h2>Trabalhe Conosco</h2>
                <div style={{ display: "flex", gap: "10px" }}>
                    <div>
                        <input {...register("nome", { required: "Nome é obrigatório" })} placeholder="Nome" />
                        {errors.nome && <ErrorText>{errors.nome.message}</ErrorText>}
                    </div>
                    <div>
                        <input {...register("sobrenome", { required: "Sobrenome é obrigatório" })} placeholder="Sobrenome" />
                        {errors.sobrenome && <ErrorText>{errors.sobrenome.message}</ErrorText>}
                    </div>
                </div>
                <div>
                    <input
                        {...register("email", { required: "E-mail é obrigatório", pattern: { value: /^\S+@\S+$/, message: "E-mail inválido" } })}
                        type="email"
                        placeholder="Seu e-mail"
                    />
                    {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                </div>
                <div>
                    <input {...register("assunto", { required: "Assunto é obrigatório" })} placeholder="Assunto" />
                    {errors.assunto && <ErrorText>{errors.assunto.message}</ErrorText>}
                </div>
                <div>
                    <textarea {...register("mensagem", { required: "Mensagem é obrigatória", minLength: { value: 10, message: "A mensagem deve ter pelo menos 10 caracteres" } })} placeholder="Mensagem" />
                    {errors.mensagem && <ErrorText>{errors.mensagem.message}</ErrorText>}
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar formulário"}
                </button>
            </FormStyled>
        </FormContainer>
    );
}