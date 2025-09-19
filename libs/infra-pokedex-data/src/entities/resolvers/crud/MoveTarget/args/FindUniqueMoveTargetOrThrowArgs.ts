import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetWhereUniqueInput } from "../../../inputs/MoveTargetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveTargetOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveTargetWhereUniqueInput, {
    nullable: false
  })
  where!: MoveTargetWhereUniqueInput;
}
