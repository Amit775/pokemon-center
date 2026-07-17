import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CharacteristicsScalarWhereInput } from './characteristics-scalar-where.input';
import { Type } from 'class-transformer';
import { CharacteristicsUpdateManyMutationInput } from './characteristics-update-many-mutation.input';

@InputType()
export class CharacteristicsUpdateManyWithWhereWithoutStatInput {

    @Field(() => CharacteristicsScalarWhereInput, {nullable:false})
    @Type(() => CharacteristicsScalarWhereInput)
    where!: Identity<CharacteristicsScalarWhereInput>;

    @Field(() => CharacteristicsUpdateManyMutationInput, {nullable:false})
    @Type(() => CharacteristicsUpdateManyMutationInput)
    data!: Identity<CharacteristicsUpdateManyMutationInput>;
}
