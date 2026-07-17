import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutColorInput } from './pokemon-species-create-without-color.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutColorInput } from './pokemon-species-create-or-connect-without-color.input';
import { PokemonSpeciesUpsertWithWhereUniqueWithoutColorInput } from './pokemon-species-upsert-with-where-unique-without-color.input';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateManyColorInputEnvelope } from './pokemon-species-create-many-color-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateWithWhereUniqueWithoutColorInput } from './pokemon-species-update-with-where-unique-without-color.input';
import { PokemonSpeciesUpdateManyWithWhereWithoutColorInput } from './pokemon-species-update-many-with-where-without-color.input';
import { PokemonSpeciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class PokemonSpeciesUncheckedUpdateManyWithoutColorNestedInput {

    @Field(() => [PokemonSpeciesCreateWithoutColorInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutColorInput)
    create?: Array<PokemonSpeciesCreateWithoutColorInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutColorInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutColorInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutColorInput>;

    @Field(() => [PokemonSpeciesUpsertWithWhereUniqueWithoutColorInput], {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithWhereUniqueWithoutColorInput)
    upsert?: Array<PokemonSpeciesUpsertWithWhereUniqueWithoutColorInput>;

    @Field(() => PokemonSpeciesCreateManyColorInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyColorInputEnvelope)
    createMany?: Identity<PokemonSpeciesCreateManyColorInputEnvelope>;

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

    @Field(() => [PokemonSpeciesUpdateWithWhereUniqueWithoutColorInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateWithWhereUniqueWithoutColorInput)
    update?: Array<PokemonSpeciesUpdateWithWhereUniqueWithoutColorInput>;

    @Field(() => [PokemonSpeciesUpdateManyWithWhereWithoutColorInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateManyWithWhereWithoutColorInput)
    updateMany?: Array<PokemonSpeciesUpdateManyWithWhereWithoutColorInput>;

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    @Type(() => PokemonSpeciesScalarWhereInput)
    deleteMany?: Array<PokemonSpeciesScalarWhereInput>;
}
