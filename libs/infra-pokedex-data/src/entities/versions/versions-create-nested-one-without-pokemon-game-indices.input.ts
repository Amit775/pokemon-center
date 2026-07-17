import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsCreateWithoutPokemonGameIndicesInput } from './versions-create-without-pokemon-game-indices.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutPokemonGameIndicesInput } from './versions-create-or-connect-without-pokemon-game-indices.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class VersionsCreateNestedOneWithoutPokemonGameIndicesInput {

    @Field(() => VersionsCreateWithoutPokemonGameIndicesInput, {nullable:true})
    @Type(() => VersionsCreateWithoutPokemonGameIndicesInput)
    create?: Identity<VersionsCreateWithoutPokemonGameIndicesInput>;

    @Field(() => VersionsCreateOrConnectWithoutPokemonGameIndicesInput, {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutPokemonGameIndicesInput)
    connectOrCreate?: Identity<VersionsCreateOrConnectWithoutPokemonGameIndicesInput>;

    @Field(() => VersionsWhereUniqueInput, {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;
}
