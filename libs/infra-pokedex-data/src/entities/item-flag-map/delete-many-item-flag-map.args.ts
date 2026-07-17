import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagMapWhereInput } from './item-flag-map-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyItemFlagMapArgs {

    @Field(() => ItemFlagMapWhereInput, {nullable:true})
    @Type(() => ItemFlagMapWhereInput)
    where?: ItemFlagMapWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
