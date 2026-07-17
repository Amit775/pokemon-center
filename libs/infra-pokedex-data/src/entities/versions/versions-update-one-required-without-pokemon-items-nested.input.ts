import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsCreateWithoutPokemonItemsInput } from './versions-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutPokemonItemsInput } from './versions-create-or-connect-without-pokemon-items.input';
import { VersionsUpsertWithoutPokemonItemsInput } from './versions-upsert-without-pokemon-items.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { VersionsUpdateToOneWithWhereWithoutPokemonItemsInput } from './versions-update-to-one-with-where-without-pokemon-items.input';

@InputType()
export class VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput {

    @Field(() => VersionsCreateWithoutPokemonItemsInput, {nullable:true})
    @Type(() => VersionsCreateWithoutPokemonItemsInput)
    create?: Identity<VersionsCreateWithoutPokemonItemsInput>;

    @Field(() => VersionsCreateOrConnectWithoutPokemonItemsInput, {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutPokemonItemsInput)
    connectOrCreate?: Identity<VersionsCreateOrConnectWithoutPokemonItemsInput>;

    @Field(() => VersionsUpsertWithoutPokemonItemsInput, {nullable:true})
    @Type(() => VersionsUpsertWithoutPokemonItemsInput)
    upsert?: Identity<VersionsUpsertWithoutPokemonItemsInput>;

    @Field(() => VersionsWhereUniqueInput, {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsUpdateToOneWithWhereWithoutPokemonItemsInput, {nullable:true})
    @Type(() => VersionsUpdateToOneWithWhereWithoutPokemonItemsInput)
    update?: Identity<VersionsUpdateToOneWithWhereWithoutPokemonItemsInput>;
}
