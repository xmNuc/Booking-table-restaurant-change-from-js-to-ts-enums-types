import { EventEmitter } from 'events';
import {
  RestaurantEvent,
  RestaurantEventName,
  RestaurantTableChangeEvent,
} from './types/restaurant-events';

export class Restaurant extends EventEmitter {
  /**
   * Open restaurant.
   */
  open() {
    (this.emit as RestaurantEvent)(RestaurantEventName.Open);
  }

  /**
   * Close restaurant.
   */
  close() {
    (this.emit as RestaurantEvent)(RestaurantEventName.Close);
  }

  private changeTableCount(incDec: number) {
    (this.emit as RestaurantTableChangeEvent)(
      RestaurantEventName.Update,
      incDec
    );
  }
  /**
   *A table has been reserved for now.
   * Treat it as just 1 table less.
   */
  reserveTable() {
    this.changeTableCount(-1);
  }

  /**
   * Canceled table reservation.
   * Treat it as just 1 more table.
   */
  cancelTableReservation() {
    this.changeTableCount(1);
  }

  /**
   * Someone took a table without reservation.
   */
  takeTableWithoutReservation() {
    this.changeTableCount(-1);
  }

  /**
   * The table broke, the leg fell off: /
   */
  markTableAsBroken() {
    this.changeTableCount(-1);
  }

  /**
   * Someone has finished eating, we clean the table and it's back to use.
   */
  cleanupTable() {
    this.changeTableCount(1);
  }
}
