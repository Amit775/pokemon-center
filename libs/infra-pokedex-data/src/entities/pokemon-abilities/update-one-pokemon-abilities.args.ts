import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonAbilitiesUpdateInput } from './pokemon-abilities-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonAbilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';

@ArgsType()
export class UpdateOnePokemonAbilitiesArgs {

    @Field(() => PokemonAbilitiesUpdateInput, {nullable:false})
    @Type(() => PokemonAbilitiesUpdateInput)
    data!: Identity<PokemonAbilitiesUpdateInput>;

    @Field(() => PokemonAbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>;
}
