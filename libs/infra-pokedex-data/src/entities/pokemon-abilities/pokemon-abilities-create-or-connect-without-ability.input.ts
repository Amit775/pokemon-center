import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonAbilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonAbilitiesCreateWithoutAbilityInput } from './pokemon-abilities-create-without-ability.input';

@InputType()
export class PokemonAbilitiesCreateOrConnectWithoutAbilityInput {

    @Field(() => PokemonAbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>;

    @Field(() => PokemonAbilitiesCreateWithoutAbilityInput, {nullable:false})
    @Type(() => PokemonAbilitiesCreateWithoutAbilityInput)
    create!: Identity<PokemonAbilitiesCreateWithoutAbilityInput>;
}
