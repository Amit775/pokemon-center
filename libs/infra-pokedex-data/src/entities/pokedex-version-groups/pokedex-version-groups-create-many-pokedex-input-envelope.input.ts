import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexVersionGroupsCreateManyPokedexInput } from './pokedex-version-groups-create-many-pokedex.input';
import { Type } from 'class-transformer';

@InputType()
export class PokedexVersionGroupsCreateManyPokedexInputEnvelope {

    @Field(() => [PokedexVersionGroupsCreateManyPokedexInput], {nullable:false})
    @Type(() => PokedexVersionGroupsCreateManyPokedexInput)
    data!: Array<PokedexVersionGroupsCreateManyPokedexInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
