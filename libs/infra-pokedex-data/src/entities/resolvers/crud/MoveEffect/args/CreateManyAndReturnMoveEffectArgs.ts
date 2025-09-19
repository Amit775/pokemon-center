import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectCreateManyInput } from "../../../inputs/MoveEffectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMoveEffectArgs {
  @TypeGraphQL.Field(_type => [MoveEffectCreateManyInput], {
    nullable: false
  })
  data!: MoveEffectCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
