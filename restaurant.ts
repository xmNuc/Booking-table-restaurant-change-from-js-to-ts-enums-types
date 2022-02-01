import { EventEmitter } from 'events';
import { RestaurantEventName } from './types/restaurant-events';

export class Restaurant extends EventEmitter {
  /**
   * Open restaurant.
   */
  open() {
    this.emit(RestaurantEventName.Open);
  }

  /**
   * Close restaurant.
   */
  close() {
    this.emit(RestaurantEventName.Close);
  }

  /**
   *A table has been reserved for now.
   * Treat it as just 1 table less.
   */
  reserveTable() {
    this.emit(RestaurantEventName.Update, -1);
  }

  /**
   * Canceled table reservation.
   * Treat it as just 1 more table.
   */
  cancelTableReservation() {
    this.emit(RestaurantEventName.Update, 1);
  }

  /**
   * Someone took a table without reservation.
   */
  takeTableWithoutReservation() {
    this.emit(RestaurantEventName.Update, -1);
  }

  /**
   * The table broke, the leg fell off: /
   */
  markTableAsBroken() {
    this.emit(RestaurantEventName.Update, -1);
  }

  /**
   * Someone has finished eating, we clean the table and it's back to use.
   */
  cleanupTable() {
    this.emit(RestaurantEventName.Update, 1);
  }
}
