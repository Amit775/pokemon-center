import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlingEffectsUpdateManyMutationInput } from './item-fling-effects-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyItemFlingEffectsArgs {

    @Field(() => ItemFlingEffectsUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemFlingEffectsUpdateManyMutationInput)
    data!: Identity<ItemFlingEffectsUpdateManyMutationInput>;

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereInput)
    where?: Identity<ItemFlingEffectsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
