import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutShapeInput } from './pokemon-species-create-without-shape.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutShapeInput } from './pokemon-species-create-or-connect-without-shape.input';
import { PokemonSpeciesUpsertWithWhereUniqueWithoutShapeInput } from './pokemon-species-upsert-with-where-unique-without-shape.input';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateManyShapeInputEnvelope } from './pokemon-species-create-many-shape-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateWithWhereUniqueWithoutShapeInput } from './pokemon-species-update-with-where-unique-without-shape.input';
import { PokemonSpeciesUpdateManyWithWhereWithoutShapeInput } from './pokemon-species-update-many-with-where-without-shape.input';
import { PokemonSpeciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class PokemonSpeciesUpdateManyWithoutShapeNestedInput {

    @Field(() => [PokemonSpeciesCreateWithoutShapeInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutShapeInput)
    create?: Array<PokemonSpeciesCreateWithoutShapeInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutShapeInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutShapeInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutShapeInput>;

    @Field(() => [PokemonSpeciesUpsertWithWhereUniqueWithoutShapeInput], {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithWhereUniqueWithoutShapeInput)
    upsert?: Array<PokemonSpeciesUpsertWithWhereUniqueWithoutShapeInput>;

    @Field(() => PokemonSpeciesCreateManyShapeInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyShapeInputEnvelope)
    createMany?: Identity<PokemonSpeciesCreateManyShapeInputEnvelope>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesUpdateWithWhereUniqueWithoutShapeInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateWithWhereUniqueWithoutShapeInput)
    update?: Array<PokemonSpeciesUpdateWithWhereUniqueWithoutShapeInput>;

    @Field(() => [PokemonSpeciesUpdateManyWithWhereWithoutShapeInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateManyWithWhereWithoutShapeInput)
    updateMany?: Array<PokemonSpeciesUpdateManyWithWhereWithoutShapeInput>;

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    @Type(() => PokemonSpeciesScalarWhereInput)
    deleteMany?: Array<PokemonSpeciesScalarWhereInput>;
}
