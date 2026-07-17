import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsCreateWithoutPokemonItemsInput } from './versions-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutPokemonItemsInput } from './versions-create-or-connect-without-pokemon-items.input';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class VersionsCreateNestedOneWithoutPokemonItemsInput {

    @Field(() => VersionsCreateWithoutPokemonItemsInput, {nullable:true})
    @Type(() => VersionsCreateWithoutPokemonItemsInput)
    create?: VersionsCreateWithoutPokemonItemsInput;

    @Field(() => VersionsCreateOrConnectWithoutPokemonItemsInput, {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutPokemonItemsInput)
    connectOrCreate?: VersionsCreateOrConnectWithoutPokemonItemsInput;

    @Field(() => VersionsWhereUniqueInput, {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;
}
