import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemPocketsWhereInput } from './item-pockets-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyItemPocketsArgs {

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    @Type(() => ItemPocketsWhereInput)
    where?: ItemPocketsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
