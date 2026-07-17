import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemGameIndicesScalarWhereInput } from './item-game-indices-scalar-where.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesUpdateManyMutationInput } from './item-game-indices-update-many-mutation.input';

@InputType()
export class ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput {

    @Field(() => ItemGameIndicesScalarWhereInput, {nullable:false})
    @Type(() => ItemGameIndicesScalarWhereInput)
    where!: Identity<ItemGameIndicesScalarWhereInput>;

    @Field(() => ItemGameIndicesUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemGameIndicesUpdateManyMutationInput)
    data!: Identity<ItemGameIndicesUpdateManyMutationInput>;
}
