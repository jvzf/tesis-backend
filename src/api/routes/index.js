const express = require("express");
const router = express.Router();

const restaurantsRouter = require("./restaurant");
const gymsRouter = require("./gym");
const localsRouter = require("./local");
const spasRouter = require("./spa");
const eventsRouter = require("./event");
const reservationEventsRouter = require("./reservationEvent");
const reservationRestaurantRouter = require("./reservationRestaurant");
const reservationLocalRouter = require("./reservationLocal");
const reservationSpaRouter = require("./reservationSpa");
const reservationGymRouter = require("./reservationGym");
const administratorRouter = require("./administrator");
const hsiaPackageRouter = require("./hsiaPackage");
const hsiaSubscriptionRouter = require("./hsiaSubscription");
const guestRouter = require("./guest");
const touristicPlacesTypesRouter = require("./touristicPlacesTypesRouter");

const productRouter = require("./product");
const productCategoryRouter = require("./productCategory");
const transactionRouter = require("./transaction");
const dishRouter = require("./dish");
const dishTypeRouter = require("./dishType");
const localGuideRouter = require("./localGuide");
const touristicPlaceRouter = require("./touristicPlace");
const checkInRouter = require("./checkIn");
const roomRouter = require("./room");
const inRoomServiceRouter = require("./inRoomService");
const inRoomServiceHistoryRouter = require("./inRoomServiceHistory");
const inRoomServiceTypeRouter = require("./inRoomServiceType");
const devicesRouter = require("./device");
const accountRouter = require("./account");
const configurationRouter = require("./configuration");

router.use("/restaurants", restaurantsRouter);
router.use("/gyms", gymsRouter);
router.use("/locals", localsRouter);
router.use("/spas", spasRouter);
router.use("/events", eventsRouter);
router.use("/administrators", administratorRouter);
router.use("/reservation-events", reservationEventsRouter);
router.use("/reservation-restaurants", reservationRestaurantRouter);
router.use("/reservation-locals", reservationLocalRouter);
router.use("/reservation-spas", reservationSpaRouter);
router.use("/reservation-gyms", reservationGymRouter);
router.use("/hsia-packages", hsiaPackageRouter);
router.use("/hsia-subscriptions", hsiaSubscriptionRouter);
router.use("/guests", guestRouter);
router.use("/touristic-places-types", touristicPlacesTypesRouter);

router.use("/products", productRouter);
router.use("/product-categories", productCategoryRouter);
router.use("/transactions", transactionRouter);
router.use("/dishes", dishRouter);
router.use("/dish-types", dishTypeRouter);
router.use("/local-guides", localGuideRouter);
router.use("/touristic-places", touristicPlaceRouter);
router.use("/check-ins", checkInRouter);
router.use("/rooms", roomRouter);
router.use("/in-room-services", inRoomServiceRouter);
router.use("/in-room-service-histories", inRoomServiceHistoryRouter);
router.use("/in-room-service-types", inRoomServiceTypeRouter);
router.use("/devices", devicesRouter);
router.use("/accounts", accountRouter);
router.use("/configurations", configurationRouter);

module.exports = router;
