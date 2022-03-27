import _ from "lodash";
import {
  makeObservable,
  observable,
  computed,
  action,
  runInAction,
} from "mobx";

import {
  PublicCard,
  PublicRequestParams,
} from "./publicStore.models";
import service from "./publicStore.service";


const initialStoreValues = {
  cards: [],
  limit: 10,
  offset: 0,
  allCardsUploaded: false,
  //   unreadCount: 0,
  //   selectedType: NewsItemTypes.General,
  //   publicNews: [],
  //   publicLimit: 6,
  //   publicOffset: 0,
  //   allPublicItemsUploaded: false,
};

class NewsStore {
  cards: Array<PublicCard> = initialStoreValues.cards;

  limit: number = initialStoreValues.limit;

  offset: number = initialStoreValues.offset;

  allCardsUploaded: boolean = initialStoreValues.allCardsUploaded;

  //   unreadCount: number = initialStoreValues.unreadCount;
  //   allItemsUploaded: boolean = initialStoreValues.allItemsUploaded;
  //   selectedType: NewsItemType = initialStoreValues.selectedType;
  //   publicNews: Array<NewsItem> = initialStoreValues.publicNews;
  //   publicLimit: number = initialStoreValues.publicLimit;
  //   publicOffset: number = initialStoreValues.publicOffset;
  //   allPublicItemsUploaded: boolean = initialStoreValues.allPublicItemsUploaded;

  constructor() {
    makeObservable(this, {
      cards: observable,
      allCardsUploaded: observable,
      loadItems: action.bound,
      loadUpItems: action.bound,
      loadDetailedItem: action.bound,
      allCards: computed,
    });
  }

  resetStoreValues() {
    this.cards = initialStoreValues.cards;
    this.limit = initialStoreValues.limit;
    this.offset = initialStoreValues.offset;
  }

  async loadDetailedItem(uuid: string): Promise<void> {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  async loadItems(): Promise<void> {
    this.cards = initialStoreValues.cards;
    this.offset = initialStoreValues.offset;
    this.allCardsUploaded = initialStoreValues.allCardsUploaded;

    const requestParams: PublicRequestParams = {
      limit: this.limit,
      offset: this.offset,
    };

    try {
      //   this.enableLoading();
      const data = await service.getPublicCards(requestParams);
      const count: number = _.get(data, "currentCount");
      const totalCount = _.get(data, "totalCount");
      const cards: Array<PublicCard> = _.get(data, "publications");
      runInAction(() => {
        this.offset = count;
        this.cards = cards;
      });

      if (this.offset >= totalCount) {
        runInAction(() => {
          this.allCardsUploaded = true;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      //   this.disableLoading();
    }
  }

  async loadUpItems(): Promise<void> {
    if (this.allCardsUploaded) return;

    const requestParams: PublicRequestParams = {
      limit: this.limit,
      offset: this.offset,
    };

    try {
      const data = await service.getPublicCards(requestParams);
      const count: number = _.get(data, "currentCount");
      const totalCount = _.get(data, "totalCount");
      const cards: Array<PublicCard> = _.get(data, "publications");

      runInAction(() => {
        this.offset += count;
        this.cards = [...this.cards, ...cards];
      });

      if (this.offset >= totalCount) {
        runInAction(() => {
          this.allCardsUploaded = true;
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  getItemById = (id: string): PublicCard | undefined =>
    _.find(this.cards, { id });

  get allCards(): Array<PublicCard> {
    return this.cards;
  }
}

export default new NewsStore();
