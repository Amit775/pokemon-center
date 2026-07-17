import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateManyPokemonInput } from './encounters-create-many-pokemon.input';
import { Type } from 'class-transformer';

@InputType()
export class EncountersCreateManyPokemonInputEnvelope {

    @Field(() => [EncountersCreateManyPokemonInput], {nullable:false})
    @Type(() => EncountersCreateManyPokemonInput)
    data!: Array<EncountersCreateManyPokemonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
