import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypeGameIndicesWhereInput } from './type-game-indices-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyTypeGameIndicesArgs {

    @Field(() => TypeGameIndicesWhereInput, {nullable:true})
    @Type(() => TypeGameIndicesWhereInput)
    where?: Identity<TypeGameIndicesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
