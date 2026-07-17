import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonAbilitiesCreateWithoutPokemonInput } from './pokemon-abilities-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonAbilitiesCreateOrConnectWithoutPokemonInput } from './pokemon-abilities-create-or-connect-without-pokemon.input';
import { PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-abilities-upsert-with-where-unique-without-pokemon.input';
import type { Identity } from 'identity-type';
import { PokemonAbilitiesCreateManyPokemonInputEnvelope } from './pokemon-abilities-create-many-pokemon-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonAbilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-abilities-update-with-where-unique-without-pokemon.input';
import { PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput } from './pokemon-abilities-update-many-with-where-without-pokemon.input';
import { PokemonAbilitiesScalarWhereInput } from './pokemon-abilities-scalar-where.input';

@InputType()
export class PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput {

    @Field(() => [PokemonAbilitiesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonAbilitiesCreateWithoutPokemonInput)
    create?: Array<PokemonAbilitiesCreateWithoutPokemonInput>;

    @Field(() => [PokemonAbilitiesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonAbilitiesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonAbilitiesCreateOrConnectWithoutPokemonInput>;

    @Field(() => [PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => PokemonAbilitiesCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonAbilitiesCreateManyPokemonInputEnvelope)
    createMany?: Identity<PokemonAbilitiesCreateManyPokemonInputEnvelope>;

    @Field(() => [PokemonAbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>>;

    @Field(() => [PokemonAbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>>;

    @Field(() => [PokemonAbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>>;

    @Field(() => [PokemonAbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>>;

    @Field(() => [PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [PokemonAbilitiesScalarWhereInput], {nullable:true})
    @Type(() => PokemonAbilitiesScalarWhereInput)
    deleteMany?: Array<PokemonAbilitiesScalarWhereInput>;
}
