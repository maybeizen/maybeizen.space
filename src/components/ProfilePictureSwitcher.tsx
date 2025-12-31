import { useState, useRef, useEffect } from "react";
import { profilePictures } from "../data/pfp";

interface ProfilePictureSwitcherProps {
  currentImage: string;
  onImageChange: (image: string) => void;
}

const ProfilePictureSwitcher = ({
  currentImage,
  onImageChange,
}: ProfilePictureSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(currentImage);
  const [isSaving, setIsSaving] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

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
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
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

  const handleImageSelect = (picture: (typeof profilePictures)[0]) => {
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
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-2 border-[#1a1a1a] hover:border-blue-400 transition-all duration-200 ring-4 ring-[#1a1a1a] hover:ring-blue-400/20"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center rounded-lg">
          <div className="bg-[#1a1a1a] p-3 rounded-lg border border-blue-400/30">
            <i className="fa-solid fa-pen-to-square text-xl text-blue-400"></i>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-[#0a0a0a] border border-[#1a1a1a] rounded w-full max-w-5xl max-h-[90vh] overflow-hidden"
          >
            <div className="p-6 border-b border-[#1a1a1a] flex items-center justify-between bg-[#1a1a1a]">
              <h2 className="text-xl font-semibold">Choose Profile Picture</h2>
              <button
                onClick={handleCancel}
                className="w-10 h-10 flex items-center justify-center text-[#a0a0a0] hover:text-blue-400 transition-colors"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="mb-6 p-4 bg-[#1a1a1a] border border-blue-400/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-16 h-16 object-cover rounded-lg border border-blue-400/30"
                  />
                  <div>
                    <p className="font-semibold text-left">
                      {
                        profilePictures.find(
                          (pic) => pic.image === selectedImage
                        )?.name
                      }
                    </p>
                    <p className="text-sm text-[#a0a0a0]">
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
                      className={`relative border rounded-lg mb-3 transition-all ${
                        picture.image === selectedImage
                          ? "border-blue-400 bg-blue-400/10"
                          : "border-[#1a1a1a] bg-[#1a1a1a] hover:border-blue-400/30"
                      }`}
                    >
                      <img
                        src={picture.image}
                        alt={picture.name}
                        className="w-full aspect-square object-cover rounded-lg"
                      />

                      {picture.image === selectedImage && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-blue-400 text-[#0a0a0a] rounded-full flex items-center justify-center">
                          <i className="fa-solid fa-check text-xs"></i>
                        </div>
                      )}
                    </div>

                    <div className="text-center space-y-1">
                      <p className="font-medium text-sm">{picture.name}</p>
                      <p className="text-xs text-[#a0a0a0] leading-tight">
                        {picture.anime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-[#1a1a1a] flex items-center justify-end gap-3 bg-[#1a1a1a]">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-[#1a1a1a] text-[#e5e5e5] font-medium rounded-lg hover:border-blue-400 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <i className="fa-solid fa-spinner-third fa-spin text-sm"></i>
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
