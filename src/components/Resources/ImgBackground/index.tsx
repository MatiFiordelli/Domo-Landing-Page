import ImageBackground from '../../../../public/asset-background.webp'

export default function ImgBackground(){
    return(
        <div className="row">
            <img 
                src={ImageBackground} 
                alt="Image background decorative" 
                className="position-absolute col-8 col-sm-7 col-md-6 end-0 top-0 p-0"
            />
        </div>
    )
}