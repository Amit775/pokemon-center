import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacteristicsCreateInput } from './characteristics-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCharacteristicsArgs {

    @Field(() => CharacteristicsCreateInput, {nullable:false})
    @Type(() => CharacteristicsCreateInput)
    data!: CharacteristicsCreateInput;
}
