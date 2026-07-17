import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlingEffectsCreateInput } from './item-fling-effects-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneItemFlingEffectsArgs {

    @Field(() => ItemFlingEffectsCreateInput, {nullable:false})
    @Type(() => ItemFlingEffectsCreateInput)
    data!: Identity<ItemFlingEffectsCreateInput>;
}
