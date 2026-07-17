import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsCreateWithoutPokemonInput } from './pokemon-forms-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateOrConnectWithoutPokemonInput } from './pokemon-forms-create-or-connect-without-pokemon.input';
import { PokemonFormsCreateManyPokemonInputEnvelope } from './pokemon-forms-create-many-pokemon-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';

@InputType()
export class PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput {

    @Field(() => [PokemonFormsCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonFormsCreateWithoutPokemonInput)
    create?: Array<PokemonFormsCreateWithoutPokemonInput>;

    @Field(() => [PokemonFormsCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonFormsCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonFormsCreateOrConnectWithoutPokemonInput>;

    @Field(() => PokemonFormsCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonFormsCreateManyPokemonInputEnvelope)
    createMany?: PokemonFormsCreateManyPokemonInputEnvelope;

    @Field(() => [PokemonFormsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>>;
}
