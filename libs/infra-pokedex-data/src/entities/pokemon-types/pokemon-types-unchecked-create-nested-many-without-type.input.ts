import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonTypesCreateWithoutTypeInput } from './pokemon-types-create-without-type.input';
import { Type } from 'class-transformer';
import { PokemonTypesCreateOrConnectWithoutTypeInput } from './pokemon-types-create-or-connect-without-type.input';
import type { Identity } from 'identity-type';
import { PokemonTypesCreateManyTypeInputEnvelope } from './pokemon-types-create-many-type-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonTypesWhereUniqueInput } from './pokemon-types-where-unique.input';

@InputType()
export class PokemonTypesUncheckedCreateNestedManyWithoutTypeInput {

    @Field(() => [PokemonTypesCreateWithoutTypeInput], {nullable:true})
    @Type(() => PokemonTypesCreateWithoutTypeInput)
    create?: Array<PokemonTypesCreateWithoutTypeInput>;

    @Field(() => [PokemonTypesCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => PokemonTypesCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<PokemonTypesCreateOrConnectWithoutTypeInput>;

    @Field(() => PokemonTypesCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => PokemonTypesCreateManyTypeInputEnvelope)
    createMany?: Identity<PokemonTypesCreateManyTypeInputEnvelope>;

    @Field(() => [PokemonTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonTypesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>>;
}
