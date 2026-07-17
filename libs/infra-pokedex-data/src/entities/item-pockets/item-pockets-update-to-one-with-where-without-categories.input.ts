import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemPocketsWhereInput } from './item-pockets-where.input';
import { Type } from 'class-transformer';
import { ItemPocketsUpdateWithoutCategoriesInput } from './item-pockets-update-without-categories.input';

@InputType()
export class ItemPocketsUpdateToOneWithWhereWithoutCategoriesInput {

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    @Type(() => ItemPocketsWhereInput)
    where?: ItemPocketsWhereInput;

    @Field(() => ItemPocketsUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => ItemPocketsUpdateWithoutCategoriesInput)
    data!: ItemPocketsUpdateWithoutCategoriesInput;
}
