import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetsWhereUniqueInput } from "../../../inputs/MoveTargetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveTargetsArgs {
  @TypeGraphQL.Field(_type => MoveTargetsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveTargetsWhereUniqueInput;
}
