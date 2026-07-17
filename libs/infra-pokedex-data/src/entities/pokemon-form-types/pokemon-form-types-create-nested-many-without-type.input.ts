import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormTypesCreateWithoutTypeInput } from './pokemon-form-types-create-without-type.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesCreateOrConnectWithoutTypeInput } from './pokemon-form-types-create-or-connect-without-type.input';
import type { Identity } from 'identity-type';
import { PokemonFormTypesCreateManyTypeInputEnvelope } from './pokemon-form-types-create-many-type-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormTypesWhereUniqueInput } from './pokemon-form-types-where-unique.input';

@InputType()
export class PokemonFormTypesCreateNestedManyWithoutTypeInput {

    @Field(() => [PokemonFormTypesCreateWithoutTypeInput], {nullable:true})
    @Type(() => PokemonFormTypesCreateWithoutTypeInput)
    create?: Array<PokemonFormTypesCreateWithoutTypeInput>;

    @Field(() => [PokemonFormTypesCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => PokemonFormTypesCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<PokemonFormTypesCreateOrConnectWithoutTypeInput>;

    @Field(() => PokemonFormTypesCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => PokemonFormTypesCreateManyTypeInputEnvelope)
    createMany?: Identity<PokemonFormTypesCreateManyTypeInputEnvelope>;

    @Field(() => [PokemonFormTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormTypesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>>;
}
