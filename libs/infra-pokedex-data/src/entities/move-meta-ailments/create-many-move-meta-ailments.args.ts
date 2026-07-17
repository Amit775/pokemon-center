import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaAilmentsCreateManyInput } from './move-meta-ailments-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMoveMetaAilmentsArgs {

    @Field(() => [MoveMetaAilmentsCreateManyInput], {nullable:false})
    @Type(() => MoveMetaAilmentsCreateManyInput)
    data!: Array<MoveMetaAilmentsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
