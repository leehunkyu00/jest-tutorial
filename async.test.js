// callback
function fetchData(callback) {
    setTimeout(() => {
        callback("peanut butter");
    }, 100);
}

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

// promise
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("peanut butter");
        }, 100);
    })
}

function fetchDataPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, 100);
    })
}

function fetchDataThrow() {
    // setTimeout(() => {
    //     throw 'error';
    //     // reject('error');
    // }, 100);
        throw 'error';
}

// promise - case 1
test('the data is peanut butter', () => {
    return fetchDataPromise().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('the fetch fails with an error', () => {
    // verifies that a certain number of assertions are called during a test
    expect.assertions(1);
    return fetchDataPromise2().catch(e => expect(e).toMatch('error'));
});

// promise - case .resolve / .rejects
test('the resolves and rejects test', () => {
    // verifies that a certain number of assertions are called during a test
    expect(fetchDataPromise()).resolves.toBe('peanut butter');
    expect(fetchDataPromise2()).rejects.toMatch('error');
});

// Async/Await
test('the data is peanut butter', async () => {
    const data = await fetchDataPromise();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchDataThrow();
    } catch (e) {
        expect(e).toMatch('error');
    }
});
