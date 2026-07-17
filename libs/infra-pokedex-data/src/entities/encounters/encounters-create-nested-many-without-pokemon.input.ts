import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateWithoutPokemonInput } from './encounters-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { EncountersCreateOrConnectWithoutPokemonInput } from './encounters-create-or-connect-without-pokemon.input';
import type { Identity } from 'identity-type';
import { EncountersCreateManyPokemonInputEnvelope } from './encounters-create-many-pokemon-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';

@InputType()
export class EncountersCreateNestedManyWithoutPokemonInput {

    @Field(() => [EncountersCreateWithoutPokemonInput], {nullable:true})
    @Type(() => EncountersCreateWithoutPokemonInput)
    create?: Array<EncountersCreateWithoutPokemonInput>;

    @Field(() => [EncountersCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => EncountersCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<EncountersCreateOrConnectWithoutPokemonInput>;

    @Field(() => EncountersCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => EncountersCreateManyPokemonInputEnvelope)
    createMany?: Identity<EncountersCreateManyPokemonInputEnvelope>;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;
}
