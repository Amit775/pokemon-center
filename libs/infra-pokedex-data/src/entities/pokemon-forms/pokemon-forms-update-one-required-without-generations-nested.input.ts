import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsCreateWithoutGenerationsInput } from './pokemon-forms-create-without-generations.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateOrConnectWithoutGenerationsInput } from './pokemon-forms-create-or-connect-without-generations.input';
import { PokemonFormsUpsertWithoutGenerationsInput } from './pokemon-forms-upsert-without-generations.input';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { PokemonFormsUpdateToOneWithWhereWithoutGenerationsInput } from './pokemon-forms-update-to-one-with-where-without-generations.input';

@InputType()
export class PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput {

    @Field(() => PokemonFormsCreateWithoutGenerationsInput, {nullable:true})
    @Type(() => PokemonFormsCreateWithoutGenerationsInput)
    create?: PokemonFormsCreateWithoutGenerationsInput;

    @Field(() => PokemonFormsCreateOrConnectWithoutGenerationsInput, {nullable:true})
    @Type(() => PokemonFormsCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: PokemonFormsCreateOrConnectWithoutGenerationsInput;

    @Field(() => PokemonFormsUpsertWithoutGenerationsInput, {nullable:true})
    @Type(() => PokemonFormsUpsertWithoutGenerationsInput)
    upsert?: PokemonFormsUpsertWithoutGenerationsInput;

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;

    @Field(() => PokemonFormsUpdateToOneWithWhereWithoutGenerationsInput, {nullable:true})
    @Type(() => PokemonFormsUpdateToOneWithWhereWithoutGenerationsInput)
    update?: PokemonFormsUpdateToOneWithWhereWithoutGenerationsInput;
}
