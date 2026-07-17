import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemGameIndicesScalarWhereInput } from './item-game-indices-scalar-where.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesUpdateManyMutationInput } from './item-game-indices-update-many-mutation.input';

@InputType()
export class ItemGameIndicesUpdateManyWithWhereWithoutItemInput {

    @Field(() => ItemGameIndicesScalarWhereInput, {nullable:false})
    @Type(() => ItemGameIndicesScalarWhereInput)
    where!: ItemGameIndicesScalarWhereInput;

    @Field(() => ItemGameIndicesUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemGameIndicesUpdateManyMutationInput)
    data!: ItemGameIndicesUpdateManyMutationInput;
}
