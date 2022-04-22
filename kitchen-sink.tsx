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
        <main>
            <h1 style="font-size: 48px;">Silk</h1>
            <hr />

            <h2>Buttons</h2>
            <h4>Colors</h4>
            <Button variant="primary" style="margin-right: 4px;">Primary (default)</Button>
            <Button variant="secondary" style="margin-right: 4px;">Secondary</Button>
            <Button variant="warning" style="margin-right: 4px;">Warning</Button>
            <Button variant="critical" style="margin-right: 4px;">Critical</Button>
            <Button variant="success" style="margin-right: 4px;">Success</Button>
            <br />
            <br />

            <h4>Sizes</h4>
            <Button size="xl" style="margin-right: 4px;">Extra Large</Button>
            <Button size="lg" style="margin-right: 4px;">Large</Button>
            <Button size="md" style="margin-right: 4px;">Medium (default)</Button>
            <Button size='sm' style="margin-right: 4px;">Small</Button>
            <Button size='xs' style="margin-right: 4px;">Extra Small</Button>

            <br />
            <br />
            <h4>Loading</h4>
            <Button loading >Loading</Button>


            <br />
            <br />
            <h2>Inputs</h2>
            <label style="display: block; margin-bottom: 10px;">
                <p>Text field</p>
                <Input placeholder="A sample text field" />
            </label>
            <label style="display: block; margin-bottom: 10px;">
                <p>Email field</p>
                <Input placeholder="A sample email field" type="email" />
            </label>
            <label style="display: block; margin-bottom: 10px;">
                <p>Number field</p>
                <Input placeholder="A sample number field" type="number" />
            </label>
            <label style="display: block; margin-bottom: 10px;">
                <p>Password field</p>
                <Input placeholder="A sample password field" type="password" />
            </label>
            <label style="display: block; margin-bottom: 10px;">
                <p>Telephone field</p>
                <Input placeholder="A sample tel field" type="tel" />
            </label>

            <br />
            <h4>Checkboxes</h4>
            <Checkbox name="checkbox-1" label='Checkbox 1' style="margin-right: 15px;" />
            <Checkbox name="checkbox-2" label='Checkbox 2' style="margin-right: 15px;" />
            <Checkbox name="checkbox-3" label='Checkbox 3' style="margin-right: 15px;" />

            <br />
            <br />
            <h4>Radios</h4>
            <Radio name="radio" value="radio-1" label='Radio 1' style="margin-right: 15px;" />
            <Radio name="radio" value="radio-2" label='Radio 2' style="margin-right: 15px;" />
            <Radio name="radio" value="radio-3" label='Radio 3' style="margin-right: 15px;" />

            <br />
            <br />
            <h4>Date</h4>
            <p>todo</p>
            <br />
            <h4>Color</h4>
            <p>todo</p>
            <br />
            <h4>File</h4>
            <p>todo</p>
            <br />
            <h4>Range</h4>
            <p>todo</p>

            <br />
            <h2>Cards and Accordions</h2>
            <Card>Example Card!</Card>

            <br />
            <h2>Icons</h2>

            <br />
            <h2>Spinners</h2>
            <Spinner width={16} />

            <br />
            <h2>Popovers</h2>
            <PopoverWrap>
                <Button variant="primary" onClick={togglePopover}>Toggle Popover</Button>
                <Popover show={showPopover} onHide={togglePopover} anchor="right" align="end">
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