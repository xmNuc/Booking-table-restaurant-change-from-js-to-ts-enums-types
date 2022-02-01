import { Restaurant } from './restaurant';
import { RestaurantEventName } from './types/restaurant-events';

const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
  .on(RestaurantEventName.Open, () => {
    console.log('Restaurant is open');
  })
  .on(RestaurantEventName.Close, () => {
    console.log('Restaurant is closed');
  })
  .on(RestaurantEventName.Update, (count) => {
    (tablesCount += count), console.log('Numbers of tables', tablesCount);
  });

megaRestaurant.open(); // "Restaurant is open."

megaRestaurant.takeTableWithoutReservation(); // "Number of tables: 24."

megaRestaurant.takeTableWithoutReservation(); // "Number of tables: 23."

megaRestaurant.reserveTable(); // "Number of tables: 22."

megaRestaurant.cancelTableReservation(); // "Number of tables: 23."

megaRestaurant.reserveTable(); // "Number of tables: 22."

megaRestaurant.reserveTable(); // "Number of tables: 21."

megaRestaurant.takeTableWithoutReservation(); // "Number of tables: 20."

megaRestaurant.takeTableWithoutReservation(); // "Number of tables: 19."

megaRestaurant.cleanupTable(); // "Number of tables: 20."

megaRestaurant.markTableAsBroken(); // "Number of tables: 19."

megaRestaurant.close(); // "Restaurant is closed."
