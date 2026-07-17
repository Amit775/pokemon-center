import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutPokemonFormGenerationsInput } from './generations-create-without-pokemon-form-generations.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput } from './generations-create-or-connect-without-pokemon-form-generations.input';
import { GenerationsUpsertWithoutPokemonFormGenerationsInput } from './generations-upsert-without-pokemon-form-generations.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { GenerationsUpdateToOneWithWhereWithoutPokemonFormGenerationsInput } from './generations-update-to-one-with-where-without-pokemon-form-generations.input';

@InputType()
export class GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput {

    @Field(() => GenerationsCreateWithoutPokemonFormGenerationsInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutPokemonFormGenerationsInput)
    create?: GenerationsCreateWithoutPokemonFormGenerationsInput;

    @Field(() => GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput;

    @Field(() => GenerationsUpsertWithoutPokemonFormGenerationsInput, {nullable:true})
    @Type(() => GenerationsUpsertWithoutPokemonFormGenerationsInput)
    upsert?: GenerationsUpsertWithoutPokemonFormGenerationsInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateToOneWithWhereWithoutPokemonFormGenerationsInput, {nullable:true})
    @Type(() => GenerationsUpdateToOneWithWhereWithoutPokemonFormGenerationsInput)
    update?: GenerationsUpdateToOneWithWhereWithoutPokemonFormGenerationsInput;
}
