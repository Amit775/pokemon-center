import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoveMetaAilmentsWhereInput } from './move-meta-ailments-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MoveMetaListRelationFilter } from '../move-meta/move-meta-list-relation-filter.input';

@InputType()
export class MoveMetaAilmentsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [MoveMetaAilmentsWhereInput], {nullable:true})
    AND?: Array<MoveMetaAilmentsWhereInput>;

    @Field(() => [MoveMetaAilmentsWhereInput], {nullable:true})
    OR?: Array<MoveMetaAilmentsWhereInput>;

    @Field(() => [MoveMetaAilmentsWhereInput], {nullable:true})
    NOT?: Array<MoveMetaAilmentsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => MoveMetaListRelationFilter, {nullable:true})
    meta?: MoveMetaListRelationFilter;
}
