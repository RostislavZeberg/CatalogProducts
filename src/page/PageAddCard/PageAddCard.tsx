import { memo, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { CardsContext } from "../../utils/Context"

const AddCardSchema = z.object({
    id: z.number().optional(),
    name: z.string().nonempty('Заполните поле "Название товара"'),
    price: z.coerce.number().refine(n => n > 0, {
        message: 'В поле "Цена товара" должно быть число больше нуля'
    }),
    mark: z.boolean().default(false),
    category: z.string().nonempty('Заполните поле "Категория"'),
    description: z.string().nonempty('Заполните поле "Описание"'),
    image: z.string().default(''),
})

type AddCardForm = z.infer<typeof AddCardSchema>;

export const PageAddCard = memo(() => {
    const navigate = useNavigate();
    const { cards, setCards } = useContext(CardsContext)

    const onSubmit = (data: AddCardForm) => {

        const newCard = {
            id: cards.length + 1,
            name: data.name,
            price: data.price,
            mark: false,
            category: data.category,
            description: data.description,
            image: '',
        }
        cards.push(newCard)
        setCards(cards)
        navigate('/card',  { state: newCard })
    }


    const { register, handleSubmit, formState: { errors } } = useForm<AddCardForm>({
        resolver: zodResolver(AddCardSchema),
    })

    return (
        <div className="add-card">
            <Link to={"/"} className="btn">Вернуться к каталогу товаров</Link>
            <h2 className="add-card__title">Создание новой карточки</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="add-card__form form flex">
                <label className="form__item">
                    <p className="form__item-title">Название товара:</p> 
                    <input className="add-card__input" type="text" {...register("name")} />
                {errors?.name?.message && (
                    <p className="form__error">{errors.name.message}</p>
                )}
                </label>
                <label className="form__item">
                    <p className="form__item-title">Цена товара:</p> 
                    <input className="add-card__input" type="number" {...register("price")} />
                </label>
                {errors?.price?.message && (
                    <p className="form__error">{errors.price.message}</p>
                )}
                <label className="form__item">
                    <p className="form__item-title">Категория:</p> 
                    <input className="add-card__input" type="text" {...register("category")} />
                </label>
                {errors?.category?.message && (
                    <p className="form__error">{errors.category.message}</p>
                )}
                <label className="form__item">
                    <p className="form__item-title">Описание:</p> 
                    <input className="add-card__input" type="text" {...register("description")} />
                </label>
                {errors?.description?.message && (
                    <p className="form__error">{errors.description.message}</p>
                )}
                <label className="form__item">
                    <p className="form__item-title">Путь до картини:</p> 
                    <input className="add-card__input" type="text" {...register("image")} />
                </label>
                <button type="submit">
                    Сохранить
                </button>
            </form>
        </div>
    )
})
