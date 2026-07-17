import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationGameIndicesCreateInput } from './location-game-indices-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLocationGameIndicesArgs {

    @Field(() => LocationGameIndicesCreateInput, {nullable:false})
    @Type(() => LocationGameIndicesCreateInput)
    data!: LocationGameIndicesCreateInput;
}
