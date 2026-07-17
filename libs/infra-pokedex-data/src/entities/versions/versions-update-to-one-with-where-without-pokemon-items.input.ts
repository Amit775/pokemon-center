import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsWhereInput } from './versions-where.input';
import { Type } from 'class-transformer';
import { VersionsUpdateWithoutPokemonItemsInput } from './versions-update-without-pokemon-items.input';

@InputType()
export class VersionsUpdateToOneWithWhereWithoutPokemonItemsInput {

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: VersionsWhereInput;

    @Field(() => VersionsUpdateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => VersionsUpdateWithoutPokemonItemsInput)
    data!: VersionsUpdateWithoutPokemonItemsInput;
}
