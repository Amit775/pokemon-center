import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
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
    pokemon_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    base_stat?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    effort?: Identity<IntFilter>;
}
