import { Container } from "./styles";
import { IoMdAdd } from 'react-icons/io'

import Card from '../Card';

function List({data, index: listIndex}){

    console.log(data.done);
    return(
        <Container done={data.done} >
            <header>
                <h2>{data.title}</h2>
                    {data.creatable &&(
                        <button type="button">
                            <IoMdAdd size={24} color="#FFF" />
                        </button>
                    )}
            </header>

            <ul>
                {data.cards.map((card, index) => 
                    <Card 
                        key={card.id} 
                        index={index} 
                        listIndex={listIndex}
                        data={card}
                    />
                )}
            </ul>

        </Container>
    )
}

export default List;
