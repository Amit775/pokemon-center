import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutTriggerItemInput } from './pokemon-evolution-create-without-trigger-item.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutTriggerItemInput } from './pokemon-evolution-create-or-connect-without-trigger-item.input';
import { PokemonEvolutionCreateManyTriggerItemInputEnvelope } from './pokemon-evolution-create-many-trigger-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class PokemonEvolutionUncheckedCreateNestedManyWithoutTriggerItemInput {

    @Field(() => [PokemonEvolutionCreateWithoutTriggerItemInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutTriggerItemInput)
    create?: Array<PokemonEvolutionCreateWithoutTriggerItemInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutTriggerItemInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutTriggerItemInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutTriggerItemInput>;

    @Field(() => PokemonEvolutionCreateManyTriggerItemInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyTriggerItemInputEnvelope)
    createMany?: PokemonEvolutionCreateManyTriggerItemInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
