import { OrderAction } from "../reducer/order-reducer"

const tipOptions = [
    {id: 'tip-10',value: .10,label: '10%'},
    {id: 'tip-20',value: .20,label: '20%'},
    {id: 'tip-50',value: .50,label: '50%'},
]

type TipPercentageFormProps = {
    dispatch: React.Dispatch<OrderAction>
    tip: number
}

export const TipPercentage = ({dispatch, tip} : TipPercentageFormProps) => {
    return (
        <>
            <div>
                <h3 className="font-black text-2xl">Propina:</h3>

                <form>
                    {tipOptions.map(tipMap => (
                        <div key={tipMap.id} className="flex gap-2">
                            <label htmlFor={tipMap.id}>{tipMap.label}</label>
                            <input
                                id={tipMap.id}
                                type="radio"
                                name="tipMap"
                                value={tipMap.value}
                                onChange={(e) => dispatch({type: 'add-tip',payload: {value: +e.target.value} } )}
                                checked={tipMap.value === tip}
                            />
                        </div>
                    ))}
                    <div></div>
                </form>
            </div>
        </>
    )
}
