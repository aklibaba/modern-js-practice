function h(z)
{
    console.log(new Error().stack);
}

function g(y)
{
    h(y + 1);
}

function f(x)
{
    g(x + 1);
}
debugger;
f(3);

var async = {

    destructureKey() {
        return ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
    },

    resultsViaEvent(url) {
        debugger;
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = () =>
        {
            if (req.status == 200)
            {
                console.dir(req.response);
            }
            else
            {
                console.log('ERROR', req.statusText);
            }
        };

        req.onerror = () => {
            console.log('Network Error');
        };

        req.send();
    }
};
async.resultsViaEvent('https://www.google.pl/?gfe_rd=cr&ei=1ztKWImjBKri8Af4goGIBQ&gws_rd=ssl#safe=off&q=alex');

