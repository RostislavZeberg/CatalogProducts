import React, { FC, MouseEventHandler } from "react"

interface ButtonPaginationPrevProps {
    cardPage: number,
    prevPage: MouseEventHandler<HTMLButtonElement>
}

export const ButtonPaginationPrev:FC<ButtonPaginationPrevProps> = ({ cardPage, prevPage }) => {
    return (
        <div>
            {cardPage > 1 ?
                <button className='btn-go btn-reset' onClick={prevPage}>
                    <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Icon-Set" transform="translate(-256.000000, -1087.000000)" fill="#000000">
                                <path d="M279,1102 L268.414,1102 L272.536,1097.88 C272.926,1097.49 272.926,1096.86 272.536,1096.46 C272.145,1096.07 271.512,1096.07 271.121,1096.46 L265.464,1102.12 C265.225,1102.36 265.15,1102.69 265.205,1103 C265.15,1103.31 265.225,1103.64 265.464,1103.88 L271.121,1109.54 C271.512,1109.93 272.145,1109.93 272.536,1109.54 C272.926,1109.15 272.926,1108.51 272.536,1108.12 L268.414,1104 L279,1104 C279.552,1104 280,1103.55 280,1103 C280,1102.45 279.552,1102 279,1102 L279,1102 Z M272,1117 C264.268,1117 258,1110.73 258,1103 C258,1095.27 264.268,1089 272,1089 C279.732,1089 286,1095.27 286,1103 C286,1110.73 279.732,1117 272,1117 L272,1117 Z M272,1087 C263.164,1087 256,1094.16 256,1103 C256,1111.84 263.164,1119 272,1119 C280.836,1119 288,1111.84 288,1103 C288,1094.16 280.836,1087 272,1087 L272,1087 Z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </button>
                :
                <button className='btn-reset'>
                    <span className='btn-stop'></span>
                </button>
            }
        </div>
    )
}