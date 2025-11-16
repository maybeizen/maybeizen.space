import React, { useState, useRef, useEffect } from "react";
import { profilePictures } from "../data/pfp";

const ProfilePictureSwitcher = ({ currentImage, onImageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(currentImage);
  const [isSaving, setIsSaving] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("selectedProfilePicture");
    if (savedImage) {
      onImageChange(savedImage);
    }
  }, [onImageChange]);

  useEffect(() => {
    setSelectedImage(currentImage);
  }, [currentImage]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleImageSelect = (picture) => {
    setSelectedImage(picture.image);
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    onImageChange(selectedImage);
    localStorage.setItem("selectedProfilePicture", selectedImage);
    setIsSaving(false);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setSelectedImage(currentImage);
    setIsOpen(false);
  };

  const currentPicture =
    profilePictures.find((pic) => pic.image === currentImage) ||
    profilePictures[0];

  return (
    <>
      <div
        className="relative cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={currentImage}
          alt="Profile"
          className="w-40 h-40 md:w-56 md:h-56 object-cover border-4 border-black shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center border-4 border-black">
          <div className="bg-white p-3 border-4 border-black shadow-[4px_4px_0px_0px_#000000]">
            <i className="fa-solid fa-pen-to-square text-xl"></i>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-[#fffbf0] border-4 border-black shadow-[12px_12px_0px_0px_#000000] w-full max-w-5xl max-h-[90vh] overflow-hidden"
          >
            <div className="p-6 border-b-4 border-black flex items-center justify-between bg-white">
              <h2 className="text-2xl font-black uppercase">CHOOSE PROFILE PICTURE</h2>
              <button
                onClick={handleCancel}
                className="w-10 h-10 flex items-center justify-center bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)] bg-[#fffbf0]">
              <div className="mb-6 p-4 bg-[#ffeb3b] border-4 border-black shadow-[4px_4px_0px_0px_#000000]">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-16 h-16 object-cover border-4 border-black shadow-[3px_3px_0px_0px_#000000]"
                  />
                  <div>
                    <p className="font-black uppercase">
                      {
                        profilePictures.find(
                          (pic) => pic.image === selectedImage
                        )?.name
                      }
                    </p>
                    <p className="text-sm font-bold">
                      {
                        profilePictures.find(
                          (pic) => pic.image === selectedImage
                        )?.anime
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {profilePictures.map((picture) => (
                  <div
                    key={picture.id}
                    className="cursor-pointer group"
                    onClick={() => handleImageSelect(picture)}
                  >
                    <div
                      className={`relative border-4 transition-all mb-3 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 ${
                        picture.image === selectedImage
                          ? "border-black bg-[#ffeb3b]"
                          : "border-black bg-white"
                      }`}
                    >
                      <img
                        src={picture.image}
                        alt={picture.name}
                        className="w-full aspect-square object-cover"
                      />

                      {picture.image === selectedImage && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-black text-white border-2 border-black flex items-center justify-center">
                          <i className="fa-solid fa-check text-xs"></i>
                        </div>
                      )}
                    </div>

                    <div className="text-center space-y-1">
                      <p className="font-black text-sm uppercase">
                        {picture.name}
                      </p>
                      <p className="text-xs font-bold leading-tight">
                        {picture.anime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t-4 border-black flex items-center justify-end gap-3 bg-white">
              <button
                onClick={handleCancel}
                className="neobrutal-btn neobrutal-btn-secondary"
              >
                CANCEL
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="neobrutal-btn neobrutal-btn-pink disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin text-sm"></i>
                    SAVING...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-check text-sm"></i>
                    SAVE
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePictureSwitcher;
