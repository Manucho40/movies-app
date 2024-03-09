import Card from "./Card"
import {render} from "@testing-library/react"
test('test card', function(){
    render(<Card item={item}></Card>)
    expect(item).not.toBeNull()
})