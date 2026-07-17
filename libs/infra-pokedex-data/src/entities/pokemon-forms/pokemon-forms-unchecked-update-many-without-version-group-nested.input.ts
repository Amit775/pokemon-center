import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsCreateWithoutVersionGroupInput } from './pokemon-forms-create-without-version-group.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateOrConnectWithoutVersionGroupInput } from './pokemon-forms-create-or-connect-without-version-group.input';
import { PokemonFormsUpsertWithWhereUniqueWithoutVersionGroupInput } from './pokemon-forms-upsert-with-where-unique-without-version-group.input';
import { PokemonFormsCreateManyVersionGroupInputEnvelope } from './pokemon-forms-create-many-version-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { PokemonFormsUpdateWithWhereUniqueWithoutVersionGroupInput } from './pokemon-forms-update-with-where-unique-without-version-group.input';
import { PokemonFormsUpdateManyWithWhereWithoutVersionGroupInput } from './pokemon-forms-update-many-with-where-without-version-group.input';
import { PokemonFormsScalarWhereInput } from './pokemon-forms-scalar-where.input';

@InputType()
export class PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput {

    @Field(() => [PokemonFormsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonFormsCreateWithoutVersionGroupInput)
    create?: Array<PokemonFormsCreateWithoutVersionGroupInput>;

    @Field(() => [PokemonFormsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonFormsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<PokemonFormsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => [PokemonFormsUpsertWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonFormsUpsertWithWhereUniqueWithoutVersionGroupInput)
    upsert?: Array<PokemonFormsUpsertWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => PokemonFormsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => PokemonFormsCreateManyVersionGroupInputEnvelope)
    createMany?: PokemonFormsCreateManyVersionGroupInputEnvelope;

    @Field(() => [PokemonFormsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonFormsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonFormsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonFormsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonFormsUpdateWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonFormsUpdateWithWhereUniqueWithoutVersionGroupInput)
    update?: Array<PokemonFormsUpdateWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => [PokemonFormsUpdateManyWithWhereWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonFormsUpdateManyWithWhereWithoutVersionGroupInput)
    updateMany?: Array<PokemonFormsUpdateManyWithWhereWithoutVersionGroupInput>;

    @Field(() => [PokemonFormsScalarWhereInput], {nullable:true})
    @Type(() => PokemonFormsScalarWhereInput)
    deleteMany?: Array<PokemonFormsScalarWhereInput>;
}
