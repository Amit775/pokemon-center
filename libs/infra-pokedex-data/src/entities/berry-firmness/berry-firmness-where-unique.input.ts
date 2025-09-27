import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BerryFirmnessWhereInput } from './berry-firmness-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BerriesListRelationFilter } from '../berries/berries-list-relation-filter.input';

@InputType()
export class BerryFirmnessWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [BerryFirmnessWhereInput], {nullable:true})
    AND?: Array<BerryFirmnessWhereInput>;

    @Field(() => [BerryFirmnessWhereInput], {nullable:true})
    OR?: Array<BerryFirmnessWhereInput>;

    @Field(() => [BerryFirmnessWhereInput], {nullable:true})
    NOT?: Array<BerryFirmnessWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => BerriesListRelationFilter, {nullable:true})
    berries?: BerriesListRelationFilter;
}
