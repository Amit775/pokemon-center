import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MoveMetaListRelationFilter } from '../move-meta/move-meta-list-relation-filter.input';

@InputType()
export class MoveMetaAilmentsWhereInput {

    @Field(() => [MoveMetaAilmentsWhereInput], {nullable:true})
    AND?: Array<MoveMetaAilmentsWhereInput>;

    @Field(() => [MoveMetaAilmentsWhereInput], {nullable:true})
    OR?: Array<MoveMetaAilmentsWhereInput>;

    @Field(() => [MoveMetaAilmentsWhereInput], {nullable:true})
    NOT?: Array<MoveMetaAilmentsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => MoveMetaListRelationFilter, {nullable:true})
    meta?: MoveMetaListRelationFilter;
}
