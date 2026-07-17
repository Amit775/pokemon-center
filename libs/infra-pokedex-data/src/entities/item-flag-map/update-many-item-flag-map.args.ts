import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagMapUncheckedUpdateManyInput } from './item-flag-map-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { ItemFlagMapWhereInput } from './item-flag-map-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyItemFlagMapArgs {

    @Field(() => ItemFlagMapUncheckedUpdateManyInput, {nullable:false})
    @Type(() => ItemFlagMapUncheckedUpdateManyInput)
    data!: Identity<ItemFlagMapUncheckedUpdateManyInput>;

    @Field(() => ItemFlagMapWhereInput, {nullable:true})
    @Type(() => ItemFlagMapWhereInput)
    where?: Identity<ItemFlagMapWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
