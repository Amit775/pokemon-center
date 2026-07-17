import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { VersionsCreateWithoutPokemonGameIndicesInput } from './versions-create-without-pokemon-game-indices.input';

@InputType()
export class VersionsCreateOrConnectWithoutPokemonGameIndicesInput {

    @Field(() => VersionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsCreateWithoutPokemonGameIndicesInput, {nullable:false})
    @Type(() => VersionsCreateWithoutPokemonGameIndicesInput)
    create!: Identity<VersionsCreateWithoutPokemonGameIndicesInput>;
}
