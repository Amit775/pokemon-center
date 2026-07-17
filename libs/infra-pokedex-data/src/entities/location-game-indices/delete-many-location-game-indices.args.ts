import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationGameIndicesWhereInput } from './location-game-indices-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyLocationGameIndicesArgs {

    @Field(() => LocationGameIndicesWhereInput, {nullable:true})
    @Type(() => LocationGameIndicesWhereInput)
    where?: Identity<LocationGameIndicesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
