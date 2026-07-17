import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCategoriesUpdateManyMutationInput } from './item-categories-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ItemCategoriesWhereInput } from './item-categories-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyItemCategoriesArgs {

    @Field(() => ItemCategoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemCategoriesUpdateManyMutationInput)
    data!: ItemCategoriesUpdateManyMutationInput;

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    @Type(() => ItemCategoriesWhereInput)
    where?: ItemCategoriesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
