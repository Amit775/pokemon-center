import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokedexVersionGroupsCreateManyInput } from './pokedex-version-groups-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokedexVersionGroupsArgs {

    @Field(() => [PokedexVersionGroupsCreateManyInput], {nullable:false})
    @Type(() => PokedexVersionGroupsCreateManyInput)
    data!: Array<PokedexVersionGroupsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
