import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestEffectsWhereInput } from './contest-effects-where.input';

@InputType()
export class ContestEffectsScalarRelationFilter {

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    is?: Identity<ContestEffectsWhereInput>;

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    isNot?: Identity<ContestEffectsWhereInput>;
}
