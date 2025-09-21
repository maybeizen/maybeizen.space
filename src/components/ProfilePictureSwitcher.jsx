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

  const handleSave = async () => {
    setIsSaving(true);

    // Small delay for better UX
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
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-2 border-neutral-600 hover:border-violet-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/20"
        />

        <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-black/50 rounded-full p-3">
            <i className="fa-solid fa-pen-to-square text-2xl"></i>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-neutral-900 border border-neutral-700 rounded-2xl shadow-xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-neutral-700 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Choose Profile Picture
              </h2>
              <button
                onClick={handleCancel}
                className="text-neutral-400 hover:text-white transition-colors p-2"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Current Selection */}
              <div className="mb-6 p-4 bg-neutral-800/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-16 h-16 rounded-full object-cover border-2 border-violet-500"
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

              {/* Profile Pictures Grid */}
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {profilePictures.map((picture) => (
                  <div
                    key={picture.id}
                    className="cursor-pointer group"
                    onClick={() => handleImageSelect(picture)}
                  >
                    <div
                      className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 mb-3 ${
                        picture.image === selectedImage
                          ? "border-violet-500"
                          : "border-neutral-600 hover:border-violet-400"
                      }`}
                    >
                      <img
                        src={picture.image}
                        alt={picture.name}
                        className="w-full aspect-square object-cover"
                      />

                      {picture.image === selectedImage && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center">
                          <i className="fa-solid fa-check text-xs text-white"></i>
                        </div>
                      )}
                    </div>

                    <div className="text-center space-y-1">
                      <p className="text-white text-sm font-medium">
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

            {/* Footer */}
            <div className="p-6 border-t border-neutral-700 flex items-center justify-end gap-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-lg border border-neutral-600 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin text-sm"></i>
                    Saving...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-check text-sm"></i>
                    Save
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
