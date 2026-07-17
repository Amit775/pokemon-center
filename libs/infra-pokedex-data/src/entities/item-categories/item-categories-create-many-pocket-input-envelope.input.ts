import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCategoriesCreateManyPocketInput } from './item-categories-create-many-pocket.input';
import { Type } from 'class-transformer';

@InputType()
export class ItemCategoriesCreateManyPocketInputEnvelope {

    @Field(() => [ItemCategoriesCreateManyPocketInput], {nullable:false})
    @Type(() => ItemCategoriesCreateManyPocketInput)
    data!: Array<ItemCategoriesCreateManyPocketInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
