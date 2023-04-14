import ThreeSixty from 'react-360-view'

const Demo = () => {
    return (
        <div className="demo">
            <ThreeSixty
                amount={47}
                imagePath="https://dos248p8uy6dt.cloudfront.net/wp-content/uploads/2022/05/henley/images/"
                fileName="img_0_0_{index}.jpg"
            />
        </div>
    )
}

export default Demo