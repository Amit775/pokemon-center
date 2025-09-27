import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BerriesScalarRelationFilter } from '../berries/berries-scalar-relation-filter.input';
import { ContestTypesScalarRelationFilter } from '../contest-types/contest-types-scalar-relation-filter.input';
import { TypesScalarRelationFilter } from '../types/types-scalar-relation-filter.input';

@InputType()
export class BerryFlavorsWhereInput {

    @Field(() => [BerryFlavorsWhereInput], {nullable:true})
    AND?: Array<BerryFlavorsWhereInput>;

    @Field(() => [BerryFlavorsWhereInput], {nullable:true})
    OR?: Array<BerryFlavorsWhereInput>;

    @Field(() => [BerryFlavorsWhereInput], {nullable:true})
    NOT?: Array<BerryFlavorsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    berry_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    contest_type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    flavor?: IntFilter;

    @Field(() => BerriesScalarRelationFilter, {nullable:true})
    berry?: BerriesScalarRelationFilter;

    @Field(() => ContestTypesScalarRelationFilter, {nullable:true})
    contestType?: ContestTypesScalarRelationFilter;

    @Field(() => TypesScalarRelationFilter, {nullable:true})
    type?: TypesScalarRelationFilter;
}
