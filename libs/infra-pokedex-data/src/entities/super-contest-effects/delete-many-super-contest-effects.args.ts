import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { SuperContestEffectsWhereInput } from './super-contest-effects-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManySuperContestEffectsArgs {

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereInput)
    where?: Identity<SuperContestEffectsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
