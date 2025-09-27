import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { MovesListRelationFilter } from '../moves/moves-list-relation-filter.input';

@InputType()
export class ContestEffectsWhereInput {

    @Field(() => [ContestEffectsWhereInput], {nullable:true})
    AND?: Array<ContestEffectsWhereInput>;

    @Field(() => [ContestEffectsWhereInput], {nullable:true})
    OR?: Array<ContestEffectsWhereInput>;

    @Field(() => [ContestEffectsWhereInput], {nullable:true})
    NOT?: Array<ContestEffectsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    appeal?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    jam?: IntFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;
}
