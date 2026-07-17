import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeGameIndicesCreateInput } from './type-game-indices-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTypeGameIndicesArgs {

    @Field(() => TypeGameIndicesCreateInput, {nullable:false})
    @Type(() => TypeGameIndicesCreateInput)
    data!: TypeGameIndicesCreateInput;
}
