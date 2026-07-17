import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsUpdateWithoutPokedexesInput } from './regions-update-without-pokedexes.input';
import { Type } from 'class-transformer';
import { RegionsCreateWithoutPokedexesInput } from './regions-create-without-pokedexes.input';
import { RegionsWhereInput } from './regions-where.input';

@InputType()
export class RegionsUpsertWithoutPokedexesInput {

    @Field(() => RegionsUpdateWithoutPokedexesInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutPokedexesInput)
    update!: Identity<RegionsUpdateWithoutPokedexesInput>;

    @Field(() => RegionsCreateWithoutPokedexesInput, {nullable:false})
    @Type(() => RegionsCreateWithoutPokedexesInput)
    create!: Identity<RegionsCreateWithoutPokedexesInput>;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: Identity<RegionsWhereInput>;
}
