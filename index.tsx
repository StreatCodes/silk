import { h, render, FunctionalComponent, Fragment } from 'preact';
import { Button } from './components/button';

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

        </main>
    );
};

const appElement = document.getElementById('app');
if (appElement) {
    render(<App />, appElement);
} else {
    throw new Error(`No element found with id 'app'`);
}