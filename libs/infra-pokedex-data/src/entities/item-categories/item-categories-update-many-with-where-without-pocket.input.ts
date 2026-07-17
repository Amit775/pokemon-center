import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesScalarWhereInput } from './item-categories-scalar-where.input';
import { Type } from 'class-transformer';
import { ItemCategoriesUpdateManyMutationInput } from './item-categories-update-many-mutation.input';

@InputType()
export class ItemCategoriesUpdateManyWithWhereWithoutPocketInput {

    @Field(() => ItemCategoriesScalarWhereInput, {nullable:false})
    @Type(() => ItemCategoriesScalarWhereInput)
    where!: Identity<ItemCategoriesScalarWhereInput>;

    @Field(() => ItemCategoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemCategoriesUpdateManyMutationInput)
    data!: Identity<ItemCategoriesUpdateManyMutationInput>;
}
