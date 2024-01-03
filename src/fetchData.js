function getSuspender(promise){
    let status = 'pending';
    let result;
    let suspender = promise.then(
        r => {
            status = 'success';
            result = r;
        },
        e => {
            status = 'error';
            result = e;
        }
    );

    const read = () => {
        switch(status){
            case 'pending':
                throw suspender;
            case 'error':
                throw result;
            default:
                return result;
        }
    }

    return {read};

}

export function fetchPosts(){
    const url = `http://localhost:1337/api/posts?populate=*`;

    const promise = fetch(url)
        .then(res => res.json())
        .then(data => data);

    return getSuspender(promise);
}

export function fetchPost(id){
    const url = `http://localhost:1337/api/posts/${id}?populate=*`;

    return getSuspender(fetch(url).then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    }));
}