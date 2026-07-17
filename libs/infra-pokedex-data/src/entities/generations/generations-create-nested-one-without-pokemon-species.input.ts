import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutPokemonSpeciesInput } from './generations-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutPokemonSpeciesInput } from './generations-create-or-connect-without-pokemon-species.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsCreateNestedOneWithoutPokemonSpeciesInput {

    @Field(() => GenerationsCreateWithoutPokemonSpeciesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutPokemonSpeciesInput)
    create?: GenerationsCreateWithoutPokemonSpeciesInput;

    @Field(() => GenerationsCreateOrConnectWithoutPokemonSpeciesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutPokemonSpeciesInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutPokemonSpeciesInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
