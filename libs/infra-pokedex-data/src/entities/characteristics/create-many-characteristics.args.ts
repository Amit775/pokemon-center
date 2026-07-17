import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacteristicsCreateManyInput } from './characteristics-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCharacteristicsArgs {

    @Field(() => [CharacteristicsCreateManyInput], {nullable:false})
    @Type(() => CharacteristicsCreateManyInput)
    data!: Array<CharacteristicsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
