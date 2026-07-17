import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCategoriesCreateManyInput } from './item-categories-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyItemCategoriesArgs {

    @Field(() => [ItemCategoriesCreateManyInput], {nullable:false})
    @Type(() => ItemCategoriesCreateManyInput)
    data!: Array<ItemCategoriesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
