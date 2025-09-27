import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MovesListRelationFilter } from '../moves/moves-list-relation-filter.input';

@InputType()
export class MoveTargetsWhereInput {

    @Field(() => [MoveTargetsWhereInput], {nullable:true})
    AND?: Array<MoveTargetsWhereInput>;

    @Field(() => [MoveTargetsWhereInput], {nullable:true})
    OR?: Array<MoveTargetsWhereInput>;

    @Field(() => [MoveTargetsWhereInput], {nullable:true})
    NOT?: Array<MoveTargetsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;
}
