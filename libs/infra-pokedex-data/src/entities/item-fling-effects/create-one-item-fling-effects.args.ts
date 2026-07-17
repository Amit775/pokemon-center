import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlingEffectsCreateInput } from './item-fling-effects-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneItemFlingEffectsArgs {

    @Field(() => ItemFlingEffectsCreateInput, {nullable:false})
    @Type(() => ItemFlingEffectsCreateInput)
    data!: ItemFlingEffectsCreateInput;
}
