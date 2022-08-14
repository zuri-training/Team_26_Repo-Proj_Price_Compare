import cloudinary


def upload_to_cloudinary(image, public_id, folder):
    res = cloudinary.uploader.upload(
        image, public_id=public_id, folder=folder, unique_filename=False, overwrite=True
    )
    src = res['url']
    return src
