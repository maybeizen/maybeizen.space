import React, { useState, useRef, useEffect } from "react";
import { profilePictures } from "../data/pfp";

const ProfilePictureSwitcher = ({ currentImage, onImageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(currentImage);
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
      const banner = document.querySelector("[data-banner]");
      if (banner) {
        banner.style.display = "none";
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
      const banner = document.querySelector("[data-banner]");
      if (banner) {
        banner.style.display = "block";
      }
    };
  }, [isOpen]);

  const handleImageSelect = (picture) => {
    setSelectedImage(picture.image);
  };

  const handleSave = () => {
    onImageChange(selectedImage);
    localStorage.setItem("selectedProfilePicture", selectedImage);
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
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-2 border-neutral-600 hover:border-violet-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/20"
        />

        <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-black/50 rounded-full p-3">
            <i className="fa-solid fa-pen-to-square text-2xl"></i>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-neutral-900/95 border border-neutral-700 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
          >
            <div className="p-6 border-b border-neutral-700 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Choose Profile Picture
                </h2>
                <p className="text-neutral-400 mt-1">
                  Select your favorite anime character
                </p>
              </div>
              <button
                onClick={handleCancel}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="mb-8 p-6 bg-neutral-800/50 rounded-xl border border-neutral-600">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Current Selection
                </h3>
                <div className="flex items-center gap-4">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-20 h-20 rounded-full object-cover border-2 border-violet-500"
                  />
                  <div>
                    <p className="text-white font-medium">
                      {
                        profilePictures.find(
                          (pic) => pic.image === selectedImage
                        )?.name
                      }
                    </p>
                    <p className="text-neutral-400 text-sm">
                      {
                        profilePictures.find(
                          (pic) => pic.image === selectedImage
                        )?.anime
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {profilePictures.map((picture) => (
                  <div
                    key={picture.id}
                    className="cursor-pointer group"
                    onClick={() => handleImageSelect(picture)}
                  >
                    <div
                      className={`relative rounded-full overflow-hidden border-2 transition-all duration-300 mb-3 ${
                        picture.image === selectedImage
                          ? "border-violet-500 shadow-lg shadow-violet-500/30"
                          : "border-neutral-600 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-400/20"
                      }`}
                    >
                      <img
                        src={picture.image}
                        alt={picture.name}
                        className="w-full aspect-square rounded-full object-cover"
                      />

                      {picture.image === selectedImage && (
                        <div className="absolute top-3 right-3 bg-violet-500 rounded-full p-2 shadow-lg">
                          <i className="fa-solid fa-check text-sm text-white"></i>
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <p className="text-white font-medium text-sm mb-1">
                        {picture.name}
                      </p>
                      <p className="text-neutral-400 text-xs leading-tight">
                        {picture.anime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-neutral-700 flex items-center justify-between">
              <div className="text-neutral-400 text-sm">
                Your choice will be saved automatically
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 rounded-lg border border-neutral-600 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition-colors font-medium"
                >
                  Save Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePictureSwitcher;
