import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateWithoutLocationInput } from './pokemon-evolution-create-without-location.input';

@InputType()
export class PokemonEvolutionCreateOrConnectWithoutLocationInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionCreateWithoutLocationInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutLocationInput)
    create!: PokemonEvolutionCreateWithoutLocationInput;
}
