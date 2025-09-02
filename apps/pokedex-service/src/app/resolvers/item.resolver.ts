import { Args, Query, Resolver } from '@nestjs/graphql';
import { Item } from '@pokemon-center/shared-entities';
import { ItemService } from '../services/item.service';

@Resolver(() => Item)
export class ItemResolver {
	constructor(private readonly itemService: ItemService) {}

	@Query(() => [Item])
	getItems(): Promise<Item[]> {
		return this.itemService.findAll();
	}

	@Query(() => Item)
	getItem(@Args('id') id: number): Promise<Item> {
		return this.itemService.findOne(id);
	}
}
