import { h, render, FunctionalComponent, Fragment } from 'preact';
import { Button } from './components/button';
import { Checkbox, Input, Radio } from './components/input';

const App: FunctionalComponent = () => {

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

            {/*
            date
            color
            file
            range*/}

        </main>
    );
};

const appElement = document.getElementById('app');
if (appElement) {
    render(<App />, appElement);
} else {
    throw new Error(`No element found with id 'app'`);
}