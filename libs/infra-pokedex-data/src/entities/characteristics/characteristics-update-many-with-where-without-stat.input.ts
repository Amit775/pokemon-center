import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacteristicsScalarWhereInput } from './characteristics-scalar-where.input';
import { Type } from 'class-transformer';
import { CharacteristicsUpdateManyMutationInput } from './characteristics-update-many-mutation.input';

@InputType()
export class CharacteristicsUpdateManyWithWhereWithoutStatInput {

    @Field(() => CharacteristicsScalarWhereInput, {nullable:false})
    @Type(() => CharacteristicsScalarWhereInput)
    where!: CharacteristicsScalarWhereInput;

    @Field(() => CharacteristicsUpdateManyMutationInput, {nullable:false})
    @Type(() => CharacteristicsUpdateManyMutationInput)
    data!: CharacteristicsUpdateManyMutationInput;
}
