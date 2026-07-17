import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { SuperContestEffectsWhereInput } from './super-contest-effects-where.input';

@InputType()
export class SuperContestEffectsScalarRelationFilter {

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    is?: Identity<SuperContestEffectsWhereInput>;

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    isNot?: Identity<SuperContestEffectsWhereInput>;
}
