import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlingEffectsCreateManyInput } from './item-fling-effects-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyItemFlingEffectsArgs {

    @Field(() => [ItemFlingEffectsCreateManyInput], {nullable:false})
    @Type(() => ItemFlingEffectsCreateManyInput)
    data!: Array<ItemFlingEffectsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
