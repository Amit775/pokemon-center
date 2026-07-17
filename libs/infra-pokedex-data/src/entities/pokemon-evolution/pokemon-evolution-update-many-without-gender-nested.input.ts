import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutGenderInput } from './pokemon-evolution-create-without-gender.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutGenderInput } from './pokemon-evolution-create-or-connect-without-gender.input';
import { PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput } from './pokemon-evolution-upsert-with-where-unique-without-gender.input';
import type { Identity } from 'identity-type';
import { PokemonEvolutionCreateManyGenderInputEnvelope } from './pokemon-evolution-create-many-gender-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput } from './pokemon-evolution-update-with-where-unique-without-gender.input';
import { PokemonEvolutionUpdateManyWithWhereWithoutGenderInput } from './pokemon-evolution-update-many-with-where-without-gender.input';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class PokemonEvolutionUpdateManyWithoutGenderNestedInput {

    @Field(() => [PokemonEvolutionCreateWithoutGenderInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutGenderInput)
    create?: Array<PokemonEvolutionCreateWithoutGenderInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutGenderInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutGenderInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutGenderInput>;

    @Field(() => [PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput], {nullable:true})
    @Type(() => PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput)
    upsert?: Array<PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput>;

    @Field(() => PokemonEvolutionCreateManyGenderInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyGenderInputEnvelope)
    createMany?: Identity<PokemonEvolutionCreateManyGenderInputEnvelope>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput)
    update?: Array<PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput>;

    @Field(() => [PokemonEvolutionUpdateManyWithWhereWithoutGenderInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateManyWithWhereWithoutGenderInput)
    updateMany?: Array<PokemonEvolutionUpdateManyWithWhereWithoutGenderInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    @Type(() => PokemonEvolutionScalarWhereInput)
    deleteMany?: Array<PokemonEvolutionScalarWhereInput>;
}
