import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutPokemonTypesInput } from './types-create-without-pokemon-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutPokemonTypesInput } from './types-create-or-connect-without-pokemon-types.input';
import { TypesUpsertWithoutPokemonTypesInput } from './types-upsert-without-pokemon-types.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateToOneWithWhereWithoutPokemonTypesInput } from './types-update-to-one-with-where-without-pokemon-types.input';

@InputType()
export class TypesUpdateOneRequiredWithoutPokemonTypesNestedInput {

    @Field(() => TypesCreateWithoutPokemonTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutPokemonTypesInput)
    create?: Identity<TypesCreateWithoutPokemonTypesInput>;

    @Field(() => TypesCreateOrConnectWithoutPokemonTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutPokemonTypesInput)
    connectOrCreate?: Identity<TypesCreateOrConnectWithoutPokemonTypesInput>;

    @Field(() => TypesUpsertWithoutPokemonTypesInput, {nullable:true})
    @Type(() => TypesUpsertWithoutPokemonTypesInput)
    upsert?: Identity<TypesUpsertWithoutPokemonTypesInput>;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateToOneWithWhereWithoutPokemonTypesInput, {nullable:true})
    @Type(() => TypesUpdateToOneWithWhereWithoutPokemonTypesInput)
    update?: Identity<TypesUpdateToOneWithWhereWithoutPokemonTypesInput>;
}
