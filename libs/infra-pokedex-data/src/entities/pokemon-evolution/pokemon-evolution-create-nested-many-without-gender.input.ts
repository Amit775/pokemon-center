import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutGenderInput } from './pokemon-evolution-create-without-gender.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutGenderInput } from './pokemon-evolution-create-or-connect-without-gender.input';
import { PokemonEvolutionCreateManyGenderInputEnvelope } from './pokemon-evolution-create-many-gender-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class PokemonEvolutionCreateNestedManyWithoutGenderInput {

    @Field(() => [PokemonEvolutionCreateWithoutGenderInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutGenderInput)
    create?: Array<PokemonEvolutionCreateWithoutGenderInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutGenderInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutGenderInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutGenderInput>;

    @Field(() => PokemonEvolutionCreateManyGenderInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyGenderInputEnvelope)
    createMany?: PokemonEvolutionCreateManyGenderInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
