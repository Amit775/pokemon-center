import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateWithoutPokemonInput } from './encounters-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { EncountersCreateOrConnectWithoutPokemonInput } from './encounters-create-or-connect-without-pokemon.input';
import { EncountersUpsertWithWhereUniqueWithoutPokemonInput } from './encounters-upsert-with-where-unique-without-pokemon.input';
import type { Identity } from 'identity-type';
import { EncountersCreateManyPokemonInputEnvelope } from './encounters-create-many-pokemon-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { EncountersUpdateWithWhereUniqueWithoutPokemonInput } from './encounters-update-with-where-unique-without-pokemon.input';
import { EncountersUpdateManyWithWhereWithoutPokemonInput } from './encounters-update-many-with-where-without-pokemon.input';
import { EncountersScalarWhereInput } from './encounters-scalar-where.input';

@InputType()
export class EncountersUncheckedUpdateManyWithoutPokemonNestedInput {

    @Field(() => [EncountersCreateWithoutPokemonInput], {nullable:true})
    @Type(() => EncountersCreateWithoutPokemonInput)
    create?: Array<EncountersCreateWithoutPokemonInput>;

    @Field(() => [EncountersCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => EncountersCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<EncountersCreateOrConnectWithoutPokemonInput>;

    @Field(() => [EncountersUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => EncountersUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<EncountersUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => EncountersCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => EncountersCreateManyPokemonInputEnvelope)
    createMany?: Identity<EncountersCreateManyPokemonInputEnvelope>;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;

    @Field(() => [EncountersUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => EncountersUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<EncountersUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [EncountersUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => EncountersUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<EncountersUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [EncountersScalarWhereInput], {nullable:true})
    @Type(() => EncountersScalarWhereInput)
    deleteMany?: Array<EncountersScalarWhereInput>;
}
