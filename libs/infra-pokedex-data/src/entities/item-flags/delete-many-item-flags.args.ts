import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagsWhereInput } from './item-flags-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyItemFlagsArgs {

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    @Type(() => ItemFlagsWhereInput)
    where?: ItemFlagsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
