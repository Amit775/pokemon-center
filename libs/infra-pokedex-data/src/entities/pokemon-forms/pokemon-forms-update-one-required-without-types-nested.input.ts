import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsCreateWithoutTypesInput } from './pokemon-forms-create-without-types.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateOrConnectWithoutTypesInput } from './pokemon-forms-create-or-connect-without-types.input';
import { PokemonFormsUpsertWithoutTypesInput } from './pokemon-forms-upsert-without-types.input';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { PokemonFormsUpdateToOneWithWhereWithoutTypesInput } from './pokemon-forms-update-to-one-with-where-without-types.input';

@InputType()
export class PokemonFormsUpdateOneRequiredWithoutTypesNestedInput {

    @Field(() => PokemonFormsCreateWithoutTypesInput, {nullable:true})
    @Type(() => PokemonFormsCreateWithoutTypesInput)
    create?: PokemonFormsCreateWithoutTypesInput;

    @Field(() => PokemonFormsCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => PokemonFormsCreateOrConnectWithoutTypesInput)
    connectOrCreate?: PokemonFormsCreateOrConnectWithoutTypesInput;

    @Field(() => PokemonFormsUpsertWithoutTypesInput, {nullable:true})
    @Type(() => PokemonFormsUpsertWithoutTypesInput)
    upsert?: PokemonFormsUpsertWithoutTypesInput;

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;

    @Field(() => PokemonFormsUpdateToOneWithWhereWithoutTypesInput, {nullable:true})
    @Type(() => PokemonFormsUpdateToOneWithWhereWithoutTypesInput)
    update?: PokemonFormsUpdateToOneWithWhereWithoutTypesInput;
}
