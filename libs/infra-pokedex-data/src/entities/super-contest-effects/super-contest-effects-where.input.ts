import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { MovesListRelationFilter } from '../moves/moves-list-relation-filter.input';

@InputType()
export class SuperContestEffectsWhereInput {

    @Field(() => [SuperContestEffectsWhereInput], {nullable:true})
    AND?: Array<SuperContestEffectsWhereInput>;

    @Field(() => [SuperContestEffectsWhereInput], {nullable:true})
    OR?: Array<SuperContestEffectsWhereInput>;

    @Field(() => [SuperContestEffectsWhereInput], {nullable:true})
    NOT?: Array<SuperContestEffectsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    appeal?: Identity<IntFilter>;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: Identity<MovesListRelationFilter>;
}
