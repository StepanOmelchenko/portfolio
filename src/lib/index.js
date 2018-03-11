const test = (string) => {
    return () => {
        console.log(`вот он ${string}`);
    };
};

var alarm = test('тест');

alarm();