import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PokemonStatsScalarWhereInput {

    @Field(() => [PokemonStatsScalarWhereInput], {nullable:true})
    AND?: Array<PokemonStatsScalarWhereInput>;

    @Field(() => [PokemonStatsScalarWhereInput], {nullable:true})
    OR?: Array<PokemonStatsScalarWhereInput>;

    @Field(() => [PokemonStatsScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonStatsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_stat?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    effort?: IntFilter;
}
