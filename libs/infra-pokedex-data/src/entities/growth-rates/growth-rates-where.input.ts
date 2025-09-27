import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    formula?: StringFilter;

    @Field(() => PokemonSpeciesListRelationFilter, {nullable:true})
    species?: PokemonSpeciesListRelationFilter;

    @Field(() => ExperienceListRelationFilter, {nullable:true})
    experience?: ExperienceListRelationFilter;
}
