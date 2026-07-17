import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonSpeciesListRelationFilter } from '../pokemon-species/pokemon-species-list-relation-filter.input';
import { ExperienceListRelationFilter } from '../experience/experience-list-relation-filter.input';

@InputType()
export class GrowthRatesWhereInput {

    @Field(() => [GrowthRatesWhereInput], {nullable:true})
    AND?: Array<GrowthRatesWhereInput>;

    @Field(() => [GrowthRatesWhereInput], {nullable:true})
    OR?: Array<GrowthRatesWhereInput>;

    @Field(() => [GrowthRatesWhereInput], {nullable:true})
    NOT?: Array<GrowthRatesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => StringFilter, {nullable:true})
    formula?: Identity<StringFilter>;

    @Field(() => PokemonSpeciesListRelationFilter, {nullable:true})
    species?: Identity<PokemonSpeciesListRelationFilter>;

    @Field(() => ExperienceListRelationFilter, {nullable:true})
    experience?: Identity<ExperienceListRelationFilter>;
}
