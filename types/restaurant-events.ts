export enum RestaurantEventName {
  Update = 'update',
  Open = 'open',
  Close = 'close',
}

export type RestaurantEvent = (eventName: RestaurantEventName) => boolean;
export type RestaurantTableChangeEvent = (
  eventName: RestaurantEventName.Update,
  incDec: number
) => boolean;
