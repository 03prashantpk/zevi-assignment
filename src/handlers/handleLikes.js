export const handleLikes = (id, likedItems, setLikedItems) => {
    if (likedItems.includes(id)) {
      // Item is liked, remove it
      const updatedLikedItems = likedItems.filter(itemId => itemId !== id);
      setLikedItems(updatedLikedItems);
      localStorage.setItem('likedItems', JSON.stringify(updatedLikedItems));
    } else {
      // Item is not liked, add it
      const newLikedItems = [...likedItems, id];
      setLikedItems(newLikedItems);
      localStorage.setItem('likedItems', JSON.stringify(newLikedItems));
    }
  };
  