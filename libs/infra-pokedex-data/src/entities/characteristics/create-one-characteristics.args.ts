import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CharacteristicsCreateInput } from './characteristics-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCharacteristicsArgs {

    @Field(() => CharacteristicsCreateInput, {nullable:false})
    @Type(() => CharacteristicsCreateInput)
    data!: Identity<CharacteristicsCreateInput>;
}
