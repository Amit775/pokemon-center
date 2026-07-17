import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateWithoutTriggerItemInput } from './pokemon-evolution-create-without-trigger-item.input';

@InputType()
export class PokemonEvolutionCreateOrConnectWithoutTriggerItemInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionCreateWithoutTriggerItemInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutTriggerItemInput)
    create!: PokemonEvolutionCreateWithoutTriggerItemInput;
}
