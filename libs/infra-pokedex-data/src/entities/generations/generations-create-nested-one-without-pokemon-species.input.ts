import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutPokemonSpeciesInput } from './generations-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutPokemonSpeciesInput } from './generations-create-or-connect-without-pokemon-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsCreateNestedOneWithoutPokemonSpeciesInput {

    @Field(() => GenerationsCreateWithoutPokemonSpeciesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutPokemonSpeciesInput)
    create?: Identity<GenerationsCreateWithoutPokemonSpeciesInput>;

    @Field(() => GenerationsCreateOrConnectWithoutPokemonSpeciesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutPokemonSpeciesInput)
    connectOrCreate?: Identity<GenerationsCreateOrConnectWithoutPokemonSpeciesInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
