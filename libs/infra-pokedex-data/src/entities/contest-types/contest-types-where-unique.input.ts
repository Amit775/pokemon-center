import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ContestTypesWhereInput } from './contest-types-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MovesListRelationFilter } from '../moves/moves-list-relation-filter.input';
import { BerryFlavorsListRelationFilter } from '../berry-flavors/berry-flavors-list-relation-filter.input';

@InputType()
export class ContestTypesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ContestTypesWhereInput], {nullable:true})
    AND?: Array<ContestTypesWhereInput>;

    @Field(() => [ContestTypesWhereInput], {nullable:true})
    OR?: Array<ContestTypesWhereInput>;

    @Field(() => [ContestTypesWhereInput], {nullable:true})
    NOT?: Array<ContestTypesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;

    @Field(() => BerryFlavorsListRelationFilter, {nullable:true})
    berryFlavors?: BerryFlavorsListRelationFilter;
}
