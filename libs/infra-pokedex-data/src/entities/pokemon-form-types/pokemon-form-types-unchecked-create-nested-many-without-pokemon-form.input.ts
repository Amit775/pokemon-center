import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormTypesCreateWithoutPokemonFormInput } from './pokemon-form-types-create-without-pokemon-form.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesCreateOrConnectWithoutPokemonFormInput } from './pokemon-form-types-create-or-connect-without-pokemon-form.input';
import type { Identity } from 'identity-type';
import { PokemonFormTypesCreateManyPokemonFormInputEnvelope } from './pokemon-form-types-create-many-pokemon-form-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormTypesWhereUniqueInput } from './pokemon-form-types-where-unique.input';

@InputType()
export class PokemonFormTypesUncheckedCreateNestedManyWithoutPokemonFormInput {

    @Field(() => [PokemonFormTypesCreateWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormTypesCreateWithoutPokemonFormInput)
    create?: Array<PokemonFormTypesCreateWithoutPokemonFormInput>;

    @Field(() => [PokemonFormTypesCreateOrConnectWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormTypesCreateOrConnectWithoutPokemonFormInput)
    connectOrCreate?: Array<PokemonFormTypesCreateOrConnectWithoutPokemonFormInput>;

    @Field(() => PokemonFormTypesCreateManyPokemonFormInputEnvelope, {nullable:true})
    @Type(() => PokemonFormTypesCreateManyPokemonFormInputEnvelope)
    createMany?: Identity<PokemonFormTypesCreateManyPokemonFormInputEnvelope>;

    @Field(() => [PokemonFormTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormTypesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>>;
}
