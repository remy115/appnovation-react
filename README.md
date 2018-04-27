## Appnovation React Test

### Using react and redux, create a photo album single-page web application with the following functionalities/features:

- a landing page that lists albums as a simple list that shows:
  - the name of the album, which is clickable that links to the album page;
- an album page that shows the following details:
  - title of the album;
  - list of photos belonging to the album with 2 modes of display:
    - table - sortable by its columns; column for each photo property (see below);
    - grid - each grid item showing the photo property;
  - each photo has the following properties:
    - image - as thumbnail;
      - on click, shows photo details in a modal/overlay;
    - description - truncated to fit;
    - rating - 5-star rating widget;
  - deep-linkable - reloading the page while on the album page should show the album page;
- photo overlay:
    - full size image;
    - full description;
    - rating - 5-star rating widget;
- 5-star rating widget:
  - shows average and total by default, e.g. "3.5/5 on 10 ratings";
  - on hover, changes into input mode where user can provide rating;
  - upon choosing the rating, goes back to default mode with updated stats;
  - no limit to how many times a user can rate a photo for simplicity;
  - can use localStorage to persist rating data;
