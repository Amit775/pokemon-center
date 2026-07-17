import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { VersionsCreateWithoutPokemonItemsInput } from './versions-create-without-pokemon-items.input';

@InputType()
export class VersionsCreateOrConnectWithoutPokemonItemsInput {

    @Field(() => VersionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsCreateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => VersionsCreateWithoutPokemonItemsInput)
    create!: Identity<VersionsCreateWithoutPokemonItemsInput>;
}
