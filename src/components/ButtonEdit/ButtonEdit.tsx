import { FC } from "react"
import { Link } from "react-router-dom"
import { Card } from "../../utils/Interface"

interface ButtonEditProps {
    card: Card
}

export const ButtonEdit: FC<ButtonEditProps> = ({ card }) => {

    return (
        <Link
            to={"/edit"}
            state={{ card: card }}
            className="btn-reset"
            title="Редактировать">
            <span className="edit-btn" />
        </Link>
    )
}



