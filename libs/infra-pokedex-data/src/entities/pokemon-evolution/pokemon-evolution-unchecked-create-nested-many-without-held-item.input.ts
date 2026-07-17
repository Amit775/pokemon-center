import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutHeldItemInput } from './pokemon-evolution-create-without-held-item.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutHeldItemInput } from './pokemon-evolution-create-or-connect-without-held-item.input';
import type { Identity } from 'identity-type';
import { PokemonEvolutionCreateManyHeldItemInputEnvelope } from './pokemon-evolution-create-many-held-item-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class PokemonEvolutionUncheckedCreateNestedManyWithoutHeldItemInput {

    @Field(() => [PokemonEvolutionCreateWithoutHeldItemInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutHeldItemInput)
    create?: Array<PokemonEvolutionCreateWithoutHeldItemInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutHeldItemInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutHeldItemInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutHeldItemInput>;

    @Field(() => PokemonEvolutionCreateManyHeldItemInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyHeldItemInputEnvelope)
    createMany?: Identity<PokemonEvolutionCreateManyHeldItemInputEnvelope>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
