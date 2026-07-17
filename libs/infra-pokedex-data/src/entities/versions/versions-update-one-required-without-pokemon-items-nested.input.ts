import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsCreateWithoutPokemonItemsInput } from './versions-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutPokemonItemsInput } from './versions-create-or-connect-without-pokemon-items.input';
import { VersionsUpsertWithoutPokemonItemsInput } from './versions-upsert-without-pokemon-items.input';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { VersionsUpdateToOneWithWhereWithoutPokemonItemsInput } from './versions-update-to-one-with-where-without-pokemon-items.input';

@InputType()
export class VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput {

    @Field(() => VersionsCreateWithoutPokemonItemsInput, {nullable:true})
    @Type(() => VersionsCreateWithoutPokemonItemsInput)
    create?: VersionsCreateWithoutPokemonItemsInput;

    @Field(() => VersionsCreateOrConnectWithoutPokemonItemsInput, {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutPokemonItemsInput)
    connectOrCreate?: VersionsCreateOrConnectWithoutPokemonItemsInput;

    @Field(() => VersionsUpsertWithoutPokemonItemsInput, {nullable:true})
    @Type(() => VersionsUpsertWithoutPokemonItemsInput)
    upsert?: VersionsUpsertWithoutPokemonItemsInput;

    @Field(() => VersionsWhereUniqueInput, {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsUpdateToOneWithWhereWithoutPokemonItemsInput, {nullable:true})
    @Type(() => VersionsUpdateToOneWithWhereWithoutPokemonItemsInput)
    update?: VersionsUpdateToOneWithWhereWithoutPokemonItemsInput;
}
