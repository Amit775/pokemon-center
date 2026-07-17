import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsCreateWithoutPokemonGameIndicesInput } from './versions-create-without-pokemon-game-indices.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutPokemonGameIndicesInput } from './versions-create-or-connect-without-pokemon-game-indices.input';
import { VersionsUpsertWithoutPokemonGameIndicesInput } from './versions-upsert-without-pokemon-game-indices.input';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { VersionsUpdateToOneWithWhereWithoutPokemonGameIndicesInput } from './versions-update-to-one-with-where-without-pokemon-game-indices.input';

@InputType()
export class VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput {

    @Field(() => VersionsCreateWithoutPokemonGameIndicesInput, {nullable:true})
    @Type(() => VersionsCreateWithoutPokemonGameIndicesInput)
    create?: VersionsCreateWithoutPokemonGameIndicesInput;

    @Field(() => VersionsCreateOrConnectWithoutPokemonGameIndicesInput, {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutPokemonGameIndicesInput)
    connectOrCreate?: VersionsCreateOrConnectWithoutPokemonGameIndicesInput;

    @Field(() => VersionsUpsertWithoutPokemonGameIndicesInput, {nullable:true})
    @Type(() => VersionsUpsertWithoutPokemonGameIndicesInput)
    upsert?: VersionsUpsertWithoutPokemonGameIndicesInput;

    @Field(() => VersionsWhereUniqueInput, {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsUpdateToOneWithWhereWithoutPokemonGameIndicesInput, {nullable:true})
    @Type(() => VersionsUpdateToOneWithWhereWithoutPokemonGameIndicesInput)
    update?: VersionsUpdateToOneWithWhereWithoutPokemonGameIndicesInput;
}
