import cloudinary


def upload_to_cloudinary(image, public_id, folder):
    cloudinary.uploader.upload(
        image, public_id=public_id, folder=folder, unique_filename=True, overwrite=True
    )
    src = cloudinary.CloudinaryImage(public_id).build_url()
    return src
