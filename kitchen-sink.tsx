import { h, render, FunctionalComponent, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { Button } from './components/button';
import { Card } from './components/card';
import { Checkbox, Input, Radio } from './components/input';
import { Spinner } from './components/loader';
import { Popover, PopoverWrap } from './components/popover';

const App: FunctionalComponent = () => {
    const [showPopover, setShowPopover] = useState(true);
    const togglePopover = () => setShowPopover(v => !v)

    return (
        <main className="mt-5 mx-auto mb-24 max-w-4xl text-dark">
            <h1 className="text-5xl">Silk</h1>
            <hr className="my-4 border-t-subdued" />

            <h2 className="text-2xl font-bold mb-2">Buttons</h2>
            <h4 className='text-lg mb-1 mt-2 font-bold'>Colors</h4>
            <Button variant="primary">Primary (default)</Button>
            <Button variant="secondary" className='ml-1'>Secondary</Button>
            <Button variant="warning" className='ml-1'>Warning</Button>
            <Button variant="critical" className='ml-1'>Critical</Button>
            <Button variant="success" className='ml-1'>Success</Button>

            <h4 className='text-lg mb-1 mt-2 font-bold'>Sizes</h4>
            <Button size="xl">Extra Large</Button>
            <Button size="lg" className='ml-1'>Large</Button>
            <Button size="md" className='ml-1'>Medium (default)</Button>
            <Button size='sm' className='ml-1'>Small</Button>
            <Button size='xs' className='ml-1'>Extra Small</Button>

            <h4 className='text-lg mb-1 mt-2 font-bold'>Loading</h4>
            <Button loading >Loading</Button>

            <h2 className='text-2xl font-bold mb-2 mt-4'>Inputs</h2>
            <label className='block mb-2.5'>
                <p>Text field</p>
                <Input placeholder="A sample text field" />
            </label>
            <label className='block mb-2.5'>
                <p>Email field</p>
                <Input placeholder="A sample email field" type="email" />
            </label>
            <label className='block mb-2.5'>
                <p>Number field</p>
                <Input placeholder="A sample number field" type="number" />
            </label>
            <label className='block mb-2.5'>
                <p>Password field</p>
                <Input placeholder="A sample password field" type="password" />
            </label>
            <label className='block mb-2.5'>
                <p>Telephone field</p>
                <Input placeholder="A sample tel field" type="tel" />
            </label>
            <label className='block mb-2.5'>
                <p>Date field</p>
                <Input type='date' />
            </label>

            <h4 className='text-lg mb-1 mt-2 font-bold'>Checkboxes</h4>
            <Checkbox name="checkbox-1" label='Checkbox 1' />
            <Checkbox name="checkbox-2" label='Checkbox 2' />
            <Checkbox name="checkbox-3" label='Checkbox 3' />

            <h4 className='text-lg mb-1 mt-2 font-bold'>Radios</h4>
            <Radio name="radio" value="radio-1" label='Radio 1' />
            <Radio name="radio" value="radio-2" label='Radio 2' />
            <Radio name="radio" value="radio-3" label='Radio 3' />

            <h4 className='text-lg mb-1 mt-2 font-bold'>Color</h4>
            <p>todo</p>
            <h4 className='text-lg mb-1 mt-2 font-bold'>File</h4>
            <p>todo</p>
            <h4 className='text-lg mb-1 mt-2 font-bold'>Range</h4>
            <p>todo</p>

            <h2 className='text-2xl font-bold mb-2 mt-4'>Cards and Accordions</h2>
            <Card>Example Card!</Card>

            {/* <h2 className='text-2xl font-bold mb-2 mt-4'>Icons</h2> */}

            <h2 className='text-2xl font-bold mb-2 mt-4'>Spinners</h2>
            <Spinner width={16} />

            <h2 className='text-2xl font-bold mb-2 mt-4'>Popovers</h2>
            <PopoverWrap>
                <Button variant="primary" onClick={togglePopover}>Toggle Popover</Button>
                <Popover show={showPopover} anchor="right" align="end">
                    <div>hello</div>
                </Popover>
            </PopoverWrap>
        </main>
    );
};

const appElement = document.getElementById('app');
if (appElement) {
    render(<App />, appElement);
} else {
    throw new Error(`No element found with id 'app'`);
}