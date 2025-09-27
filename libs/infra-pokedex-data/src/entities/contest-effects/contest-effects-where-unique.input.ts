import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ContestEffectsWhereInput } from './contest-effects-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { MovesListRelationFilter } from '../moves/moves-list-relation-filter.input';

@InputType()
export class ContestEffectsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ContestEffectsWhereInput], {nullable:true})
    AND?: Array<ContestEffectsWhereInput>;

    @Field(() => [ContestEffectsWhereInput], {nullable:true})
    OR?: Array<ContestEffectsWhereInput>;

    @Field(() => [ContestEffectsWhereInput], {nullable:true})
    NOT?: Array<ContestEffectsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    appeal?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    jam?: IntFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;
}
