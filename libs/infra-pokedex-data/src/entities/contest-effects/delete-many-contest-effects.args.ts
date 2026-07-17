import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestEffectsWhereInput } from './contest-effects-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyContestEffectsArgs {

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    @Type(() => ContestEffectsWhereInput)
    where?: ContestEffectsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
