import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacteristicsCreateManyStatInput } from './characteristics-create-many-stat.input';
import { Type } from 'class-transformer';

@InputType()
export class CharacteristicsCreateManyStatInputEnvelope {

    @Field(() => [CharacteristicsCreateManyStatInput], {nullable:false})
    @Type(() => CharacteristicsCreateManyStatInput)
    data!: Array<CharacteristicsCreateManyStatInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
