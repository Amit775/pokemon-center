import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsScalarWhereInput } from './items-scalar-where.input';
import { Type } from 'class-transformer';
import { ItemsUpdateManyMutationInput } from './items-update-many-mutation.input';

@InputType()
export class ItemsUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => ItemsScalarWhereInput, {nullable:false})
    @Type(() => ItemsScalarWhereInput)
    where!: Identity<ItemsScalarWhereInput>;

    @Field(() => ItemsUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemsUpdateManyMutationInput)
    data!: Identity<ItemsUpdateManyMutationInput>;
}
