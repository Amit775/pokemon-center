import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonItemsCreateWithoutPokemonInput } from './pokemon-items-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonItemsCreateOrConnectWithoutPokemonInput } from './pokemon-items-create-or-connect-without-pokemon.input';
import { PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-items-upsert-with-where-unique-without-pokemon.input';
import type { Identity } from 'identity-type';
import { PokemonItemsCreateManyPokemonInputEnvelope } from './pokemon-items-create-many-pokemon-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-items-update-with-where-unique-without-pokemon.input';
import { PokemonItemsUpdateManyWithWhereWithoutPokemonInput } from './pokemon-items-update-many-with-where-without-pokemon.input';
import { PokemonItemsScalarWhereInput } from './pokemon-items-scalar-where.input';

@InputType()
export class PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput {

    @Field(() => [PokemonItemsCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonItemsCreateWithoutPokemonInput)
    create?: Array<PokemonItemsCreateWithoutPokemonInput>;

    @Field(() => [PokemonItemsCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonItemsCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonItemsCreateOrConnectWithoutPokemonInput>;

    @Field(() => [PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => PokemonItemsCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonItemsCreateManyPokemonInputEnvelope)
    createMany?: Identity<PokemonItemsCreateManyPokemonInputEnvelope>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;

    @Field(() => [PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [PokemonItemsUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonItemsUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<PokemonItemsUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [PokemonItemsScalarWhereInput], {nullable:true})
    @Type(() => PokemonItemsScalarWhereInput)
    deleteMany?: Array<PokemonItemsScalarWhereInput>;
}
