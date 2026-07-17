import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { VersionsCreateWithoutPokemonItemsInput } from './versions-create-without-pokemon-items.input';

@InputType()
export class VersionsCreateOrConnectWithoutPokemonItemsInput {

    @Field(() => VersionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsCreateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => VersionsCreateWithoutPokemonItemsInput)
    create!: VersionsCreateWithoutPokemonItemsInput;
}
