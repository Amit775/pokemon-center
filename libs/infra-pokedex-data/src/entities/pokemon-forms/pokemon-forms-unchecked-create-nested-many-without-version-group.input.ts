import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsCreateWithoutVersionGroupInput } from './pokemon-forms-create-without-version-group.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateOrConnectWithoutVersionGroupInput } from './pokemon-forms-create-or-connect-without-version-group.input';
import { PokemonFormsCreateManyVersionGroupInputEnvelope } from './pokemon-forms-create-many-version-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';

@InputType()
export class PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput {

    @Field(() => [PokemonFormsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonFormsCreateWithoutVersionGroupInput)
    create?: Array<PokemonFormsCreateWithoutVersionGroupInput>;

    @Field(() => [PokemonFormsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonFormsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<PokemonFormsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => PokemonFormsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => PokemonFormsCreateManyVersionGroupInputEnvelope)
    createMany?: PokemonFormsCreateManyVersionGroupInputEnvelope;

    @Field(() => [PokemonFormsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>>;
}
