import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonAbilitiesCreateWithoutAbilityInput } from './pokemon-abilities-create-without-ability.input';
import { Type } from 'class-transformer';
import { PokemonAbilitiesCreateOrConnectWithoutAbilityInput } from './pokemon-abilities-create-or-connect-without-ability.input';
import type { Identity } from 'identity-type';
import { PokemonAbilitiesCreateManyAbilityInputEnvelope } from './pokemon-abilities-create-many-ability-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonAbilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';

@InputType()
export class PokemonAbilitiesUncheckedCreateNestedManyWithoutAbilityInput {

    @Field(() => [PokemonAbilitiesCreateWithoutAbilityInput], {nullable:true})
    @Type(() => PokemonAbilitiesCreateWithoutAbilityInput)
    create?: Array<PokemonAbilitiesCreateWithoutAbilityInput>;

    @Field(() => [PokemonAbilitiesCreateOrConnectWithoutAbilityInput], {nullable:true})
    @Type(() => PokemonAbilitiesCreateOrConnectWithoutAbilityInput)
    connectOrCreate?: Array<PokemonAbilitiesCreateOrConnectWithoutAbilityInput>;

    @Field(() => PokemonAbilitiesCreateManyAbilityInputEnvelope, {nullable:true})
    @Type(() => PokemonAbilitiesCreateManyAbilityInputEnvelope)
    createMany?: Identity<PokemonAbilitiesCreateManyAbilityInputEnvelope>;

    @Field(() => [PokemonAbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>>;
}
