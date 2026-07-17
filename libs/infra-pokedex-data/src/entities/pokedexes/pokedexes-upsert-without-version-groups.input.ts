import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesUpdateWithoutVersionGroupsInput } from './pokedexes-update-without-version-groups.input';
import { Type } from 'class-transformer';
import { PokedexesCreateWithoutVersionGroupsInput } from './pokedexes-create-without-version-groups.input';
import { PokedexesWhereInput } from './pokedexes-where.input';

@InputType()
export class PokedexesUpsertWithoutVersionGroupsInput {

    @Field(() => PokedexesUpdateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => PokedexesUpdateWithoutVersionGroupsInput)
    update!: Identity<PokedexesUpdateWithoutVersionGroupsInput>;

    @Field(() => PokedexesCreateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => PokedexesCreateWithoutVersionGroupsInput)
    create!: Identity<PokedexesCreateWithoutVersionGroupsInput>;

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: Identity<PokedexesWhereInput>;
}
