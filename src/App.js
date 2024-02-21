import { Button } from '@nextui-org/react';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(5);

    return (
        <div className="App">
            <div className="h-dvh bg-gray-100 flex items-center flex-col justify-center">
                <div className="count text-9xl">{count}</div>
                <div className="mt-2 actions flex gap-1">
                    <Button color={'secondary'}>+5</Button>
                    <Button
                        color={'primary'}
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </Button>
                    <Button color={'primary'}>-</Button>
                    <Button color={'secondary'}>-5</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
