import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './index'

describe('Testing Home Component', () => {
    

    beforeEach(()=>{
        render(<Home />)
    })

    test('Finding text in the document', async() => {
        const element = await screen.findByText('We build beautiful and reliable web solutions')
        expect(element).toBeInTheDocument()
    })
})