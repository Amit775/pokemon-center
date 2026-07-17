import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonAbilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonAbilitiesCreateInput } from './pokemon-abilities-create.input';
import { PokemonAbilitiesUpdateInput } from './pokemon-abilities-update.input';

@ArgsType()
export class UpsertOnePokemonAbilitiesArgs {

    @Field(() => PokemonAbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>;

    @Field(() => PokemonAbilitiesCreateInput, {nullable:false})
    @Type(() => PokemonAbilitiesCreateInput)
    create!: PokemonAbilitiesCreateInput;

    @Field(() => PokemonAbilitiesUpdateInput, {nullable:false})
    @Type(() => PokemonAbilitiesUpdateInput)
    update!: PokemonAbilitiesUpdateInput;
}
