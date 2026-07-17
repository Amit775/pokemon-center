import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateWithoutSpeciesInput } from './pokemon-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutSpeciesInput } from './pokemon-create-or-connect-without-species.input';
import { PokemonUpsertWithWhereUniqueWithoutSpeciesInput } from './pokemon-upsert-with-where-unique-without-species.input';
import { PokemonCreateManySpeciesInputEnvelope } from './pokemon-create-many-species-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { PokemonUpdateWithWhereUniqueWithoutSpeciesInput } from './pokemon-update-with-where-unique-without-species.input';
import { PokemonUpdateManyWithWhereWithoutSpeciesInput } from './pokemon-update-many-with-where-without-species.input';
import { PokemonScalarWhereInput } from './pokemon-scalar-where.input';

@InputType()
export class PokemonUpdateManyWithoutSpeciesNestedInput {

    @Field(() => [PokemonCreateWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonCreateWithoutSpeciesInput)
    create?: Array<PokemonCreateWithoutSpeciesInput>;

    @Field(() => [PokemonCreateOrConnectWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Array<PokemonCreateOrConnectWithoutSpeciesInput>;

    @Field(() => [PokemonUpsertWithWhereUniqueWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonUpsertWithWhereUniqueWithoutSpeciesInput)
    upsert?: Array<PokemonUpsertWithWhereUniqueWithoutSpeciesInput>;

    @Field(() => PokemonCreateManySpeciesInputEnvelope, {nullable:true})
    @Type(() => PokemonCreateManySpeciesInputEnvelope)
    createMany?: PokemonCreateManySpeciesInputEnvelope;

    @Field(() => [PokemonWhereUniqueInput], {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonWhereUniqueInput], {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonWhereUniqueInput], {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonWhereUniqueInput], {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonUpdateWithWhereUniqueWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonUpdateWithWhereUniqueWithoutSpeciesInput)
    update?: Array<PokemonUpdateWithWhereUniqueWithoutSpeciesInput>;

    @Field(() => [PokemonUpdateManyWithWhereWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonUpdateManyWithWhereWithoutSpeciesInput)
    updateMany?: Array<PokemonUpdateManyWithWhereWithoutSpeciesInput>;

    @Field(() => [PokemonScalarWhereInput], {nullable:true})
    @Type(() => PokemonScalarWhereInput)
    deleteMany?: Array<PokemonScalarWhereInput>;
}
