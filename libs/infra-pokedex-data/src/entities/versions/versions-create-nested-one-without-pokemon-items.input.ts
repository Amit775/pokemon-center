import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsCreateWithoutPokemonItemsInput } from './versions-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutPokemonItemsInput } from './versions-create-or-connect-without-pokemon-items.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class VersionsCreateNestedOneWithoutPokemonItemsInput {

    @Field(() => VersionsCreateWithoutPokemonItemsInput, {nullable:true})
    @Type(() => VersionsCreateWithoutPokemonItemsInput)
    create?: Identity<VersionsCreateWithoutPokemonItemsInput>;

    @Field(() => VersionsCreateOrConnectWithoutPokemonItemsInput, {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutPokemonItemsInput)
    connectOrCreate?: Identity<VersionsCreateOrConnectWithoutPokemonItemsInput>;

    @Field(() => VersionsWhereUniqueInput, {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;
}
