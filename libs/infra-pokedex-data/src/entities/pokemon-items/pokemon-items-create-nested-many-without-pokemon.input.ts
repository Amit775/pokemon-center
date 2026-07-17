import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonItemsCreateWithoutPokemonInput } from './pokemon-items-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonItemsCreateOrConnectWithoutPokemonInput } from './pokemon-items-create-or-connect-without-pokemon.input';
import type { Identity } from 'identity-type';
import { PokemonItemsCreateManyPokemonInputEnvelope } from './pokemon-items-create-many-pokemon-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';

@InputType()
export class PokemonItemsCreateNestedManyWithoutPokemonInput {

    @Field(() => [PokemonItemsCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonItemsCreateWithoutPokemonInput)
    create?: Array<PokemonItemsCreateWithoutPokemonInput>;

    @Field(() => [PokemonItemsCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonItemsCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonItemsCreateOrConnectWithoutPokemonInput>;

    @Field(() => PokemonItemsCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonItemsCreateManyPokemonInputEnvelope)
    createMany?: Identity<PokemonItemsCreateManyPokemonInputEnvelope>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;
}
