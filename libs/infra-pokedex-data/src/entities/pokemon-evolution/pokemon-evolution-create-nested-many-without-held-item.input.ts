import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutHeldItemInput } from './pokemon-evolution-create-without-held-item.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutHeldItemInput } from './pokemon-evolution-create-or-connect-without-held-item.input';
import { PokemonEvolutionCreateManyHeldItemInputEnvelope } from './pokemon-evolution-create-many-held-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class PokemonEvolutionCreateNestedManyWithoutHeldItemInput {

    @Field(() => [PokemonEvolutionCreateWithoutHeldItemInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutHeldItemInput)
    create?: Array<PokemonEvolutionCreateWithoutHeldItemInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutHeldItemInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutHeldItemInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutHeldItemInput>;

    @Field(() => PokemonEvolutionCreateManyHeldItemInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyHeldItemInputEnvelope)
    createMany?: PokemonEvolutionCreateManyHeldItemInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
