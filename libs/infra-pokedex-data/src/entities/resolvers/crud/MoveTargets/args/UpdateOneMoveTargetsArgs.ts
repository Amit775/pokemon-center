import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetsUpdateInput } from "../../../inputs/MoveTargetsUpdateInput";
import { MoveTargetsWhereUniqueInput } from "../../../inputs/MoveTargetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveTargetsArgs {
  @TypeGraphQL.Field(_type => MoveTargetsUpdateInput, {
    nullable: false
  })
  data!: MoveTargetsUpdateInput;

  @TypeGraphQL.Field(_type => MoveTargetsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveTargetsWhereUniqueInput;
}
