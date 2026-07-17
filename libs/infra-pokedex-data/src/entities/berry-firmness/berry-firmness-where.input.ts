import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BerriesListRelationFilter } from '../berries/berries-list-relation-filter.input';

@InputType()
export class BerryFirmnessWhereInput {

    @Field(() => [BerryFirmnessWhereInput], {nullable:true})
    AND?: Array<BerryFirmnessWhereInput>;

    @Field(() => [BerryFirmnessWhereInput], {nullable:true})
    OR?: Array<BerryFirmnessWhereInput>;

    @Field(() => [BerryFirmnessWhereInput], {nullable:true})
    NOT?: Array<BerryFirmnessWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => BerriesListRelationFilter, {nullable:true})
    berries?: Identity<BerriesListRelationFilter>;
}
