import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagMapWhereInput } from './item-flag-map-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyItemFlagMapArgs {

    @Field(() => ItemFlagMapWhereInput, {nullable:true})
    @Type(() => ItemFlagMapWhereInput)
    where?: Identity<ItemFlagMapWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
