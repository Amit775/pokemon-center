import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCategoriesScalarWhereInput } from './item-categories-scalar-where.input';
import { Type } from 'class-transformer';
import { ItemCategoriesUpdateManyMutationInput } from './item-categories-update-many-mutation.input';

@InputType()
export class ItemCategoriesUpdateManyWithWhereWithoutPocketInput {

    @Field(() => ItemCategoriesScalarWhereInput, {nullable:false})
    @Type(() => ItemCategoriesScalarWhereInput)
    where!: ItemCategoriesScalarWhereInput;

    @Field(() => ItemCategoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemCategoriesUpdateManyMutationInput)
    data!: ItemCategoriesUpdateManyMutationInput;
}
