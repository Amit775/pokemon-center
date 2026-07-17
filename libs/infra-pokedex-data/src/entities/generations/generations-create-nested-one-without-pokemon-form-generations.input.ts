import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutPokemonFormGenerationsInput } from './generations-create-without-pokemon-form-generations.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput } from './generations-create-or-connect-without-pokemon-form-generations.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput {

    @Field(() => GenerationsCreateWithoutPokemonFormGenerationsInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutPokemonFormGenerationsInput)
    create?: GenerationsCreateWithoutPokemonFormGenerationsInput;

    @Field(() => GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
