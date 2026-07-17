import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutEncountersInput } from './pokemon-create-without-encounters.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutEncountersInput } from './pokemon-create-or-connect-without-encounters.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class PokemonCreateNestedOneWithoutEncountersInput {

    @Field(() => PokemonCreateWithoutEncountersInput, {nullable:true})
    @Type(() => PokemonCreateWithoutEncountersInput)
    create?: Identity<PokemonCreateWithoutEncountersInput>;

    @Field(() => PokemonCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: Identity<PokemonCreateOrConnectWithoutEncountersInput>;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
